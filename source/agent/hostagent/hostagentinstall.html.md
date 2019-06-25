# Host Agent 安装

 该探针仅支持java探针V3.4.1及以上版本

1.安装环境检查  

检查HostAgent,JavaAgent端所在系统、AI server数据库、AI server所在系统、浏览器端四者时间是否一致，不一致时建议修改，可接受最大差异20s。  


2.安装包检查  
Host Agent安装包包含以下内容：

![](/images/ha1.png)

3.安装配置Host Agent

1）下载安装包后，将其放置java Agent所在目录，并进行解压。如在/opt/oneapm目录  

```
 cd /opt/oneapm    
```

```
 unzip OneAPM_host_Agent_linux-x64_lastversion.zip
```

2）配置  
#####监控主机      
首次启动探针后会生成host_id，您可以在hostagent/data/meta.json文件中获取对应的host_id，然后在java探针的oneapm.properties中新增一行，增加host_id

#####监控docker容器
探针会自动采集所在容器的container_id，并将其与其它探针配置信息一起上传。

#####修改hostagent.yml文件  
您可以根据自己的业务需要配置hostagent.yml文件：  
1、对于SaaS用户，系统默认output.oneapm下的hosts为appcollector.oneapm.com:80
如果您想要更换Ai DC主机信息，根据您的实际业务情况修改对应的ip和端口。 
 
2、配置output.oneapm下的license_key为系统给出的license_key信息。

3）启动  
执行sh startup.sh或./hostagent -c hostagent.yml命令即可启动探针。  


4.数据查看  
稍等片刻，您可以在平台中进行数据的查看。


5、常见问题及排查解决  
Q1：Ai的DV未显示数据？  
A1：排查相关服务器的时间是否一致


Q2：开启了docker配置，环境未安装docker时，日志报错  
A2：注释hostagent.yml中docker的相关配置




