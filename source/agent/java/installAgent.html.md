
#1.基础信息

##1.1 安装包信息

名称：OneAPM\_java\_Agent\_3.3.0_BETA.zip<br>
描述：本版本探针带有 collector，支持分布式部署并兼容原始部署方式。

##1.2 环境要求
操作系统：此版本 collector 只支持 Linux 相关操作系统。<br>
Java agent 支持 Windows，Linux 和 MAC 操作系统。
#2．环境检查
##2.1 安装环境
* 检查 Collector 端所在系统、Agent 端所在系统、AI Server 数据库、AI Server 所在
系统、浏览器端四者时间是否一致，不一致时建议修改，可接受最大差异 20s。<br><br>
* 检查 collector 系统所需要的默认端口(19876)是否被占用。

#3．安装步骤
##3.1 解压安装包
切换到安装包所在目录，解压安装包，如安装包在/usr/local/src/tomcat7 目录下：

```
# cd /usr/local/src/tomcat7
# unzip -zxvf OneAPM_java_Agent_3.3.0_BETA.zip
```
 ![](/images/j0.png)

##3.2 安装包检查
###3.2.1 collector 检查
位置：Collector 位于 java agent 安装包内 collector 文件夹下。
内容：


 ![](/images/j1.png)

###3.2.2 java agent 检查
位置：解压后位于 OneAPM 文件夹下。
内容：
 ![](/images/j2.png)

##3.3 版本检查
###3.3.1 collector 版本信息
运行 java -jar collector.jar -v 察看当前版本是否为正确版本。

 ![](/images/j3.png)

###3.3.2 java agent 版本信息
运行 java -jar oneapm.jar -v 察看当前版本是否为正确版本。

 ![](/images/j4.png)

##3.4 配置 java agent
###3.4.1 java agent 通用配置设置
修改探针配置文件 oneapm.properties

```
# cd OneAPM
# vi oneapm.properties
```

 ![](/images/j5.png)

更改下列配置项：
> license\_key<br>
＃ 您必须指明您的 OneAPM 账户的 license\_key,<br>
＃ 这个 license\_key 会将您的 agent 数据绑定到您的账号下.<br>
license\_key = 这里请输入生成的 License Key<br>
 app\_name<br>
＃ 为您的业务指定一个您喜欢的名称在 OneAPM Server 中显示.<br>
＃ 如下,假设您的业务名称为 MyApplication.<br>
＃ 此参数为必设参数.<br>
app\_name = MyApplication<br>
tier\_name<br>
＃ tier\_name 是为应用指定 tierName,相同 app\_name 的所有 tier(应用) 被视为同一个
业务, 但不同的 tier 是不同的应用.<br>
＃ 如果 enable\_auto\_tier\_naming 设定为 false, agent 将发送所有数据给这里配置
的 tier.<br>
＃ 如果 enable\_auto\_tier\_naming 设定为 true, agent 将非 Web 的事务数据(即后台任
务的数据)发送给这里配置的 tier,<br>
＃ 并且 agent 会将 Web 事务数据,数据库的数据等发送给探针自动命名的 tier.<br>
＃ 此参数为必设参数.<br>
tier\_name = MyTier<br>
连接后端的 host 和 port 配置项全部放入 collector.properties 配置文件中.<br>


###3.4.2 选择 collector 部署模式
collector 和 java 探针在同一服务器下安装运行即为 collector 本机部署模式。将
collector 与探针分布到不同服务器的部署方式为远程部署。

* **本机部署模式：**
在 oneapm.properties 文件夹中的 collector 相关配置项保持默认值，启动探针即可，探针
将会自动帮你启动 collector。

* **远程部署模式：**
远程部署模式需要先启动 collector，在启动探针，可以支持多个探针指向同一个
collector。
修改 oneapm.properties 中的下列配置项：<br>
>Collector.ip<br>
＃ collector client 的配置信息配置<br>
＃ collector server 的 ip 地址<br>
collector.ip = xxx.xxx.xxx.xxx<br>
collector\_deployment\_mode<br>
＃ Collector 部署模式:LOCAL(本机部署) REMOTE(远程部署)<br>
collector\_deployment\_mode = REMOTE<br>

##3.5 配置 collector
切换到 collector 所在目录，修改 collector.properties 配置文件，如无特殊需要，仅修
改 collector.dc.host 项即可：

```
# cd collector
# vi collector.properties
```

 ![](/images/j6.png)


可更改的配置如下：<br>
>＃ OneAPM dc 服务器地址设置<br>
collector.dc.host = xxx.xxx.xxx.xxx<br>
＃  OneAPM dc 服务器的端口<br>
collector.dc.port = 8080<br>
＃ 是否开启 SSL<br>
collector.dc.https = false<br>
＃ collector 开启的端口，需与探针配置文件 oneapm.properties 下 collector.port 一致。
该项配置默认不开启（使用 19876 端口），如修改为其他端口需更改端口号并开启该项。<br>
＃ collector.listen.port = 19876<br>
＃ Collector 将会使用自带的日志文件进行日志记录,从而区别于您应用自身的日志.<br>
＃  这个设置是动态的，更改它并不需要您重启应用.<br>
＃ 在此指定您日志的级别.<br>
＃ log 的级别: OFF, ERROR,WARN,INFO, DEBUG, TRACE, ALL.<br>
＃ 默认是 OFF.<br>
collector.log.level = OFF<br>
＃ collector log 日志最大保存个数，如写满新数据会覆盖旧数据<br>
＃ collector.log.maxCount = 1<br>
＃ 单个日志最大内存使用量，以 MB 为单位<br>
＃ collector.log.maxFileSize = 1024<br>
＃ 设置代理连接 OneAPM 服务器.<br>
＃  如果代理被使用, 那么主机设置就是必须的。其它设置是可选的。<br>
＃ 默认端口是 8080.<br>
＃ 设置用户名和密码以对代理进行认证<br>
＃ collector.proxy.host=<br>
＃  collector.proxy.port=<br>
＃ collector.proxy.username=<br>
＃ collector.proxy.password=<br>
＃ collector 接收数据消息队列容量<br>
＃ 在多探针或者高TPS应用适当调大该容量,建议与collector.thread\_pool.size成比例调
整 默认: 1000<br>
collector.message\_queue.size = 1000<br>
＃  collector 处理数据线程池容量<br>
＃  使用多探针或高 TPS 应用时适当调大该容量,可调至与当前 CPU 核心数一致 默认: 2
collector.thread_pool.size = 2<br>


##3.6 安装运行 java 探针
对于 tomcat 中间件运行命令 java -jar oneapm.jar install
启 动 应 用 程 序 将 会 自 动 启 动 探 针 。 对 于 其 他 中 间 件 请 参 考
http://www.oneapm.com/docs/ai/getStart/installAgent.html。

##3.7 启动 collector
切换到 collector 所在目录，启动脚本：

```
# cd collector
# sh startup.sh
# ps -ef | grep ONEAPM_COLLECTOR
```

 ![](/images/j7.png)

如提示信息正常且进程存在，即为启动成功。
##3.8 停止 collector
切换到 collector 所在目录，启动脚本：

```
# cd collector
# sh shutdown.sh
# ps -ef | grep ONEAPM_COLLECTOR
```

![](/images/j8.png)


如提示信息正常且 collector 相应进程不存在，即为停止成功。
#4．错误排除
##4.1 collector 日志查询
collector 日志文件名为 collector.log，在 collector/logs 目录下
















