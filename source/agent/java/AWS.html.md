---
title: " Ai - 快速入门 - Web事务入口"
---

#AWS Elastic Beanstalk 安装方法
安装 OneAPM，您需要：
Amazon Web Service 账号
OneAPM 账号

###下载 OneAPM

下载最新的 OneAPM Agent。<br>
1. 登录 OneAPM<br>
2. 点击"应用名称"旁边的加号 ，添加应用程序<br>
3. 根据您的平台，根据页面安装步骤安装 Java Agent。

在您的安装过程中，您将会使用到 oneapm.jar 和 oneapm.properites 配置文件。<br>
![](/images/aws_1.png)

###安装

您的 oneapm.properites(config)配置文件不需修改，可以直接运行。如果您希望自定义您的配置文件，见：配置选项-Java。<br>
1. 将 oneapm.jar 和 oneapm.properites 文件添加到您应用程序中的 WEB-INF/LIB/。<br>
2. 重新打包和部署您新的 WAR 文件，作为一个新应用或者您现在应用的更新版本。

###Agent 激活

注意：本部分是 Tomcat 6/7 container 的指导。您可能需要修改您 container 的文件路径。

1. 在 Default Environment 页面，选择 Environment Details > Overview
2. 选择 Software Configuration
3. 在 ContainerOptions，进入下面 JVM Command Line Options 文件：
   For Tomcat 6
  <pre><code>-javaagent:/var/lib/tomcat6/webapps/ROOT/WEB-INF/lib/oneapm.jar</code></pre>     For Tomcat 7
  <pre><code>-javaagent:/usr/share/tomcat7/webapps/ROOT/WEB-INF/lib/oneapm.jar</code></pre>
4. 选择 Apply Changes

JVM 将重启，并且应用会在几分钟之内出现在您 OneAPM 账户里面。<br>
![](/images/aws_2.png)
