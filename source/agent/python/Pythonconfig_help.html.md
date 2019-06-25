# Python Agent 安装配置
对于大多数支持的 WSGI 服务器和 web 框架，您可以依照 OneAPM 快速使用指南中的说明进行使用。如果在使用 Heroku，请查看 Heroku 快速使用指南。

如果快速指南没有覆盖到您的 web 框架，或者您对安装方式有特别需求，以下的说明会对您有所帮助。

**可用的方式**

安装 OneAPM Python 包的标准方式：
从我们的下载网站上手动下载安装包后用提供的 setup.py 进行安装。
为 Python agent 能正常运行，您需要做到以下步骤：

 1.将 OneAPM 包安装到 Python 中。
 2.创建、编辑 Python agent 的配置文件。
 3.测试安装。
 4.编辑您的应用，加载并且初始化 agent。

**下载页面**

 1. 手动取得安装包，请参照 Python agent 引导安装页面的最新版本的链接。
 2. 解压 zip 文件。
 3. 在解压的安装包下顶层文件夹下安装，运行：

``` stylus
python setup.py install
```
对于 Python 安装或者您希望安装 Python agent 到某个虚拟环境，均可运行此命令。
注意：如果在系统范围内进行 Python 安装，使用 sudo 命令，或者将命令作为 root 运行。

**创建配置文件**

当 oneapm Python 包已经安装后，会包含一个命名为 blueware-admin 的管理脚本，和 Python 执行文件在同一目录下。

1.创建 agent 的配置文件，使用 generate-config 命令运行管理脚本，然后提供您的产品授权码，包括一个编写配置文件的目标名称。

``` stylus
blueware-admin generate-config LICENSE-KEY blueware.ini
```
2.编辑生成的 agent 配置文件，取消该行的注释，然后设置日志文件到一个您的 web 应用可以写入的地方。

``` stylus
log_file = /tmp/blueware-python-agent.log
```
如果您在托管服务上托管您的 web 应用，您也许需要询问托管服务商来获知编写日志文件的地方，该路径需是绝对路径。

3.最后，修改会向 OneAPM 用户界面发送数据的应用名称。当前默认是

``` stylus
app_name = Python Application
```
**测试 agent 配置**

在您继续之前，请使用包含管理脚本的命令行测试包已经被正确安装，以及确认配置文件的相关参数是正确的。如需进行此测试，请运行：

``` stylus
blueware-admin validate-config blueware.ini
```
