# .NET Agent 安装成功，没有数据<br>


**故障说明**

成功安装了 .NET Agent，但是官网上无法看到性能数据。

**故障原因**

应用场景中开启了防火墙，导致数据无法传输。

**解决方案**

* Ping tpm.oneapm.com，检查网络是否连通

* Telnet tpm.oneapm.com 443，检查数据传输端口是否打开

* 如果客户服务禁止 Ping（例如微软 Azure），需要使用 TCP 工具 Tcping.exe 或者 Psping.exe 进行网络连通测试。测试工具下载

注：如果提示" Telnet 不是内部或外部命令"，需要开启该功能。对于 windows7 用户，请打开控制面板 - 程序和功能 - 打开或关闭 windows 功能。将 telnet 客户端勾选上，静候系统修改完成，便可以使用 telnet 命令了。
