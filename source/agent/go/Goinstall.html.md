# Go Agent 安装
Go探针的安装分为两部分：Collector和Agent.下面详细介绍探针安装步骤：
 
1.注册 OneAPM

注册 OneAPM，登录账号后在“探针下载”页面选择“Go”。然后您可以在右侧页面中看到具体的安装步骤。您也可以根据本文的安装步骤进行安装。

![](/images/ai_addgo.png)


2.获取授权编号（LICENSE_KEY）

![](/images/py3.png)

3.下载解压探针安装包

在“探针下载”页面选择Go语言，下载探针安装包。解压探针安装包在Go的代码工作空间src目录下。解压后的探针安装包包括go-agent、go-collector两个文件夹。  
  $ tar -xzvf OneAPM_go_Agent_lastversion.tar.gz   


4.配置collector  
Go探针的Collector端是一个二进制包，解压探针安装包后可直接启动。解压后的go-collector文件夹中包括3个文件：  
oneapm-service:Collector二进制文件。  
blueware-collector.ini：Collector的配置文件。  
daemon-install.sh：Collector的安装卸载脚本。

4.1 安装collector  
使用deamon-install.sh脚本可进行oneapm-service的安装。  

（1）使用sh daemon-install.sh install脚本进行安装  
在运行该脚本之前，先打开该脚本，将变量修改为oneapm-service的安装位置。

  g_daemon_path=/usr/bin/  

 (2)安装之后会自动启动oneapm-service服务  
blueware-collector.ini文件会自动拷贝到oneapm-service所在目录下。

（3）其它   
`#显示帮助 `   
    sh daemon-install.sh --help  
`#卸载`   
 sh daemon-install.sh unistall  

4.2 配置collector（SaaS可跳过此步骤）  
（1）在blueware-collector.ini中可进行相应参数配置。  

    host=  appcollector.oneapm.com  
    port=  80
    # Collector与Agent进行通信时，所需设置的通道端口号。
    collector_port = 5888   

    # Collector的日志文件的位置
    log_file = /tmp/go_collector.log

    # Collector的日志文件的日志级别
    log_level = debug

（2）确认blueware-collector.ini文件与oneapm-service所在位置一致。  
 例如oneapm-service放在了Go工作空间的$GOPATH/bin目录下，则blueware-collector.ini文件也需要在$GOPATH/bin目录下

5.配置Agent  
Go探针的Agent端是一个源码包，以SDK的方式提供使用。您需要把Agent集成到自己的源码中使用。

5.1 Agent安装  
在解压后的go-agent文件夹中包含两部分内容：blueware目录和examples目录。
**blueware：包含Go探针的实现代码。
**examples: 包含如何使用Go探针的简单实例。您可以参考该实例来了解

（1）导入Go探针包  
 在您的代码中，使用下列命令导入Go探针包。
  
    import "go-agent/blueware"  
 
（2）创建探针配置对象config  

    func main() {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		panic(err.Error())
	}
	iniFilePath := dir + "/blueware-agent.ini"
	cfg := blueware.NewConfig(iniFilePath)
	...
    }
    
注意：当您在使用Go探针时，需要指明配置文件的位置。上面的例子中，将配置文件blueware-agent.ini指定在与二进制程序相同的目录下（比如，您的Web网站经编译后生成一个名为server的二进制程序，且位于Go工作空间的$GOPATH/bin目录下，则也需要把blueware-agent.ini拷贝到$GOPATH/bin目录下）。

（3）创建探针实例对象Application
   
    var (
	app blueware.Application
    )

    func main() {
	...
	app, err = blueware.NewApplication(cfg)
	if nil != err {
		fmt.Println(err)
		os.Exit(1)
	}
    ...
    }

（4）探针实例app插入路由Handler  
使用GO探针提供的WrapHandleFunc(或WrapHandle)函数，将探针实例app插入到路由Handler中。
    
    func main() {
    ...
    http.HandleFunc(blueware.WrapHandleFunc(app, "/", index))
	http.HandleFunc(blueware.WrapHandleFunc(app, "/notice_error", noticeError))
	
	http.ListenAndServe(":8000", nil)
    }

注：在examples目录下，您可使用Go探针的demo实例。将其编译后，直接运行其二进制文件，即可通过访问[](http://localhost:8080)来访问该程序。您可以通过使用demo文件详细了解go探针的使用。

5.2 Agent配置  
进入go-agent/blueware/config目录下的blueware-agent.ini探针配置文件，在该文件中进行Agent相关参数的配置。  

（1）替换license key  
将OneAPM分配给您的license key在此处进行替换即可。

   #探针的license，请替换为实际的license key值  
  
    license_key = *** REPLACE ME ***

（2）配置collector地址  
如果您的collector部署在其它机器，您需要将collector ip修改为部署机器的ip。如果collector在本机部署，则不需要进行修改   

`#Collector主机地址`
  
    collector_host = 127.0.0.1 
 
`#Collector与Agent进行通信时，所需设置的通道端口号。注意与blueware-collector.ini中的设置相一致`  

    connect_port = 5888   # 连接通道的端口号  
    data_port = 6888      # Transaction 数据通道的端口号  
    sampler_port = 7888   # 采样数据(CPU, Memory)数据通道的端口号

（3）设置应用名、tier名  
`#设置应用名`
  
    app_name = Example App

`#设置集群名`  

    tier_name = Example Tier

（4）其它信息设置  
`# 探针的日志文件的位置`
  
    log_file = /tmp/go_agent.log

`# 探针的日志文件的日志级别`
  
    log_level = debug


6、启动Go程序  
在启动您的应用后，稍等片刻，等待OneAPM接收Agent发送的数据。
