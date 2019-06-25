---
title: " Ai - 安装配置 - Java Agent 自动安装"
---

#Java Agent 自动安装方法
目前，Java Agent 自动安装方法已经和 Tomcat, Jetty, JBoss 以及 Glassfish 完全兼容。其他平台仍需要手动编辑启动脚本。

###自动安装方法

1. 使用 Java Agent, 您需要一个 OneAPM 账户。
2. 登入 OneAPM.
3. 选择开始安装。
4. 选择 Java，然后遵循安装步骤。

除非您有特别的安装考虑，您可以通过"开始使用 OneAPM 应用性能管理"页面的指导完成安装。此页面有关于安装过程的更多信息。

###运行安装程序

安装程序是包含在 Agent 中的。在 oneapm 目录中执行 install 命令。

```
cd /path/to/appserver/oneapm
java -jar oneapm.jar install
```
安装程序会找到您的启动脚本，将其备份，然后编辑并添加 -javaagent 选项。

**安装程序选项包括:**
<table>
	<head>
		<tr>
			<th>选项</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>-h</td>
			<td>显示使用帮助</td>
		</tr>
		<tr>
			<td>-l licensecode</td>
			<td>账户授权编号</td>
		</tr>
		<tr>
			<td>-s /path/to/applicationserver</td>
			<td>应用服务器的位置 （如果blueware不在应用服务器的主页目录中）</td>
		</tr>
	</head>
</table>


**不论程序安装是否成功都会有反馈信息**：

如果它运行成功，会让您重启应用服务器、试运行您的应用，然后登入 OneAPM 查看您的应用数据。
如果运行不成功，会说明原因然后让您使用 Java Agent 手动安装方法。
