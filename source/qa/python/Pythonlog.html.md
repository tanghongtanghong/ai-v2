# Python Agent 日志录入和故障排查
您可以选择配置 Python Agent 将输出行为录入为日志。推荐您坚持使用这一功能，因为这样您可以捕获 agent 是否与 OneAPM 正确连接以及运行中出现了什么问题等信息。当您遇到问题时，这些信息可以帮助我们更快地为您提供解决方案。
## 文件日志录入
Agent 使用 Python 的日志记录模块输出日志信息。因此，您应用的日志策略会影响到 Agent 日志的输出。 如果您没有使用记录模块，Agent 为您提供了一个简便的方法来启用 Python Agent 的日志文件。为使用该方法，您需要设置 Agent 配置文件中的 "logfile" 和 "loglevel" 参数。例如：

``` stylus
log_file = /tmp/oneapm-python-agent.log
log_level = info
```
**注意**：您提供的 "log_file" 路径必须是可写入的。

如果您使用的是 Apache/mod_wsgi，因为通常 Apache 用户会限制文件系统的访问。所以，您可能需要创建一个 Apache 用户可写入的、访问该日志文件的特殊路径。另外，由于应用的当前工作目录是不确定的，所以建议您使用绝对路径而不是相对路径。

使用的日志级别有："error"，"warning"，"info" 和 "debug"。在正常情况下，您使用的是 "info"。如果涉及更复杂的问题，OneAPM 的技术支持会指导您使用更详细的 debug 选项。并且，OneAPM 不建议长时间使用 debug 选项，因为它们会产生大量的输出，而日志记录模块的日志文件处理程序是标准的文件处理程序，不执行任何日志文件轮换。
## 标准错误录入
对于某些托管服务提供商，Agent 可能使用不同的日志文件。在这种情况下，您需要配置记录模块来记录标准错误的输出。此类输出将会在您托管机制的正常错误日志文件中被捕获。

若要启用此功能，在 agent 配置文件中设置：

``` stylus
log_file = stderr
log_level = info
```
除了用 "stderr"，也可用 "stdout"。
## 日志记录模块冲突
如果没有捕获到记录，那么可能是 Python 日志记录模块的初始化或配置过程中发生冲突。

当所监控的应用程序使用 "logging.config.fileConfig()" 函数来初始化 Python 的日志模块，并且 Agent 在请求前就开始了初始化的时候，系统会默认禁用 Agent 进行日志记录。

如果您使用的是 Python2.6 或更高版本，且有权限修改 "logging.config.fileConfig()"，建议您通过设置 "disableexistingloggers" 参数为 "false" 来开启 Agent 日志模块。

``` stylus
logging.config.fileConfig('logging.cfg', disable_existing_loggers=False)
```
如果无法修改 "logging.config.fileConfig()"，您可以使 Agent 自带的日志模块生效。生效方法：在 logging.cfg 文件中添加如下 logger 配置。

``` stylus
[loggers]
keys = root,oneapm

[logger_oneapm]
qualname = oneapm
level = INFO
handlers =
```
这种情况下，"handlers" 的设置未被保留，信息的记录方式是由 root logger 相关的处理程序来决定的。

当所监控的应用程序使用 "logging.config.dictConfig()" 时，也会出现上面类似的问题。 当使用键值对来配置日志记录模块时，"disableexistingloggers" 参数需要手动添加。

``` stylus
LOGGING = {
    'disable_existing_loggers': False,
...
}
```
同样，如果不希望继续使用现有的 logger，那么需要在用于配置记录模块的键值对中加入明确的 logger 定义。

``` stylus
LOGGING = {
...,

    'loggers': {
        'oneapm': {
            'level': 'INFO',
        },
        ...
    }
}
```
更多关于配置 Python 日志记录模块的信息，见[日志记录模块][1]
## agent 日志文件轮换
如果您的应用程序在单个进程中运行，您可以放心地使用日志模块提供的 RotatingFileHandler 或 TimedRotatingFileHandler 处理程序。如果只想用作 Python agent 的输出，请在 "OneAPM" 模块导入之前的 WSGI script 文件或模块的开始部分，执行以下代码：

``` stylus
_LOG_FORMAT = '%(asctime)s (%(process)d/%(threadName)s)' \
        ' %(name)s %(levelname)s - %(message)s'

_logger = logging.getLogger('oneapm')
_handler = logging.handlers.TimedRotatingFileHandler(
        'agent.log', when='midnight', backupCount=7)
_formatter = logging.Formatter(_LOG_FORMAT)
_handler.setFormatter(_formatter)
_logger.addHandler(_handler)
_logger.setLevel(logging.INFO)
```
以上代码的作用是，访问 "oneapm" 的 root logger 并附上日志文件轮换处理程序，然后将设置日志级别的信息发送到该日志文件。

**注意**：如果日志记录模块作为一个整体也进行了初始化，所有的日志输出仍会向上一级传输，并通过任意和 root logger 相关的处理程序记录，其中可能包括标准错误。因此，为了避免重复输出日志，您最好为 root logger 配置日志处理程序。
## 多进程安全的日志轮换
标准的日志记录模块中提供的日志文件轮换处理程序，在多进程服务器的环境下不是完全安全的。在多个进程同时交替进行日志文件轮换时可能会出现问题。

如果需要一个强大的日志文件轮换机制，则需要结合 Python 日志记录模块使用第三方的日志处理程序。

  [1]: https://docs.python.org/2/library/logging.config.html