# Agent 成功部署后 OneAPM 界面无数据显示
## 故障说明
完成 Python Agent 安装步骤后，OneAPM 界面上没有任何数据显示。
## 解决方案

 - 请检查配置的 licensekey 是否正确, license_key 复制粘贴无误一般最后有个"="
 - 请确认网络是否通  在终端输入命令：telnet tpm.oneapm.com 443
 - 请检查 agent 所在的服务器的时间和时区，是否为北京时间
 - 探针回传数据周期是 1min 可以稍等一下刷新看看
 - 应用有没有访问
 - 确定重启了应用

如果仍然没有数据请修改配置文件，开启日志 debug 模式，打印详细的日志。把 blueware.ini 的配置文件中 log\_file 文件打开，log_level 设置成 debug 模式

然后将产生的日志文件发送给我们，可以更快的解决你的问题。
发送方式：support@oneapm.com 或者 [提交工单][1]。


  [1]: https://oneapm.kf5.com/request/new/