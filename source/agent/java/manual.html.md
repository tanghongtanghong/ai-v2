#Java Agent 手动安装方法
OneAPM 提供 Java Agent 自动安装方法，和 Tomcat, Jetty, JBoss 以及 Glassfish 完全兼容。其他平台仍需要手动编辑启动脚本。
###下载文件

使用 Java Agent, 您需要一个 OneAPM 账户。该 Agent 需要 Java 1.5 或以上。
.zip 文件需要两种文件以完成安装：

* oneapm.jar：包含 Agent class 文件。
* oneapm.properites：包含 OneAPM Agent 的配置信息，包括您的授权编号、应用名称、SSL 设置等。

在服务器启动中，Agent 会在含有 oneapm.jar 的目录下搜索 oneapm.properites 文件。oneapm 会在同一位置下的下属目录编写 Agent 日志，命名为 logs。

如果您已经有了账户但还未安装 oneapm, 开始使用 OneAPM 应用性能监控页面会自动出现。
###安装 Java Agent

* 在应用程序服务器的根目录下，创建名为 oneapm 的文件夹
* 解压下载的文件到 oneapm 目录中。
* 在安装开始前，备份 oneapm.properites 配置文件。
* 使用 “-javaagent:oneapm.jar 的绝对路径”，启动或重启应用程序服务器，将参数传递到 Java 虚拟机。
* 登录 OneAPM 账号，查看应用程序性能。

###特定平台安装注释

<table>
	<head>
		<tr>
			<th>平台</th>
			<th>安装注释</th>
		</tr>
	</head>
		<tr>
			<th>TongWeb</th>
			<td>修改 startserver.sh 和 startservernohup.sh，添加内容如下： <br>		
				<pre><code>export JAVA_OPTIONS="${JAVA_OPTIONS}  
-javaagent:oneapm.jar 的绝对路径"</code></pre>            (-javaagent 选项要指向 oneapm 的安装全路径)
			</td>
		</tr>
		<tr>
			<th>Geronimo</th>
			<td>对于 Apache Geronimo, 运行启动指令，JAVA_OPTS 环境变量下的 OneAPM agent jar:
			<pre><code>export JAVA_OPTS="$JAVA_OPTS 
  -javaagent:oneapm.jar 的绝对路径" && geronimo run </code></pre>		</td>
		</tr>
		<tr>
			<th>Glassfish</th>
			<td>[查看 Glassfish 安装](install/java/manual/glassfishInstall.md)
			</td>
		</tr>
		<tr>
			<th>JBoss</th>
			<td>[查看 JBoss 安装](install/java/manual/jbossInstall.md)</td>
		</tr>
		<tr>
			<th>Jetty</th>
			<td>jetty 6 及以下版本启动脚本 (jetty.sh)可以使用 JAVA_OPTIONS 环境变量配置：
				<pre><code>export JAVA_OPTIONS="${JAVA_OPTIONS}
  -javaagent:oneapm.jar 的绝对路径"</code></pre>			(-javaagent 选项要指向 oneapm 的安装全路径)
				其他版本查看[Jetty 安装方法](install/java/manual/jettyInstall.md)
			</td>
		</tr>
		<tr>
			<th>Resin</th>
			<td>[查看 Resin 安装](install/java/manual/ResinInstall.md)
			</td>
		</tr>
		<tr>
			<th>Solr</th>
			<td>对于一个 stand alone 的 Solr, 在 start.jar 之前加入 -javaagent:
				<pre><code>java -javaagent:oneapm.jar 的绝对路径 -jar start.jar</code></pre>	在应用服务器环境下运行 Solr, 遵循该应用服务器的说明加入 javaagent flag. 同时保证应用服务器已经启用 JMX。
			</td>
		</tr>
		<tr>
			<th>Tomcat</th>
			<td>[查看 Tomcat 安装](install/java/manual/tomcatInstall.md)
				修改 catalina.sh，添加内容如下：
				<pre><code>export JAVA_OPTS="$JAVA_OPTS
  -javaagent:oneapm.jar 的绝对路径"</code></pre>(-javaagent 选项要指向 oneapm 的安装全路径)
			</td>
		</tr>
		<tr>
			<th>WebLogic</th>
			<td>[查看 WebLogic 安装](install/java/manual/weblogicInstall.md)
				修改 startWebLogic.sh 或 startWebLogic.bat，添加内容如下：
				<pre><code>export JAVA_OPTS="$JAVA_OPTS
  -javaagent:oneapm.jar 的绝对路径"</code></pre>(-javaagent 选项要指向 oneapm 的安装全路径)
			</td>
		</tr>
		<tr>
			<th>WebSphere</th>
			<td>[查看 WebSphere 安装](install/java/manual/websphereInstall.md)
				对于 WebSphere 通用版, 在运行启动命令时参考在 JAVA_OPTS 环境变量下的 OneAPM agent jar：
				<pre><code>export JAVA_OPTS="$JAVA_OPTS
  -javaagent:oneapm.jar的绝对路径" && startup</code></pre>
			</td>
		</tr>
		<tr>
			<th>其他应用服务器</th>
			<td>OneAPM Java Agent 可以工作在任何应用程序服务器上通过
				<pre><code>-javaagent:oneapm.jar 的绝对路径</code></pre>切换到 java 虚拟机
			</td>
		</tr>	
</table>	 
 	 
 




 	
 

 


 	
 


 	
 


 
 