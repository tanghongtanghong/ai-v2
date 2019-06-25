
# .NET Agent 收集日志信息方法

## 日志的开发方法和级别


* 打开路径 C:\ProgramData\OneAPM.Net.Agent（需要开启显示隐藏文件）下的 oneapm.config 文件，可以用 Visual Studio 或者记事本打开。

![](/images/collect1.png)

* 如图所示，当 log level 为 off 时，将关闭日志记录。您需要更改 log level 的属性值来开启日志记录。参数类型可以为 fatal| error | warn | info | debug | trace|finest(all)。
日志的输出级别如下：

### 日志输出级别

![](/images/collect2.png)

当您修改完成后，将立即生效。设置非 off 值将记录 Agent 的工作日志，参数的级别决定了日志的细度。建议您设置为 fine。