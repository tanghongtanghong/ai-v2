# Glassfish 安装

### 1. 获取授权编号

* License Key 获取<br>
 ![](/images/license_keyget01.png)

### 2. 下载
* 下载 Agent
 ![](/images/agent_download01.png)

* JDK 1.6 - 1.8  请下载

```
 wget: https://user.oneapm.com/account/5dad74ffe945c060/agent/java/OneAPM_java_Agent_latest.zip
 ```

* JDK 1.5 请下载

 ```
 wget:https://user.oneapm.com/account/5dad74ffe945c060/agent/java/OneAPM_java_Agent_legacy.zip
  ```

### 3. 安装

* 解压「Agent」至「Glassfish的根目录」下

```
 unzip OneAPM_java_Agent_latest.zip -d
 <Application Server Path>/
 ```

* 写入「License Key」至配置文件「OneAPM/oneapm.properties」<br>
 模板如下：
 ![](/images/ailicense_key01.png)

* 注意 license_key 配置的时候不能有引号

* 1.访问 GlassFish 控制台

* 2.在左侧的导航栏中选择 配置 > JVM 设置 > JVM 选项

* 3.在 JVM 选项页面，选择 添加 JVM 选项

* 4.添加一项 -javaagent 标签

 ```
-javaagent:/full/path/to/oneapm.jar
```

* 5.注意：-javaagent:后面跟的是 oneapm.jar 的绝对路径

* 6.点击保存并重新启动
 ![](/images/Glass.png)

* 7.配置 > JVM 设置 > JVM 选项: 在 JVM 选项 页面添加 javaagent 选项。

* 8.如果 Glassfish 没有正常启动，表明 -javaagent 选项没有设置正确。您可以通过编辑 domain.xml 文件(glassfish/domains/{domain}/config/domain.xml)改变服务器 JVM 选项。
