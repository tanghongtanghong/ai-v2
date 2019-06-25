# Play安装

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

* 解压「Agent」至「Play 的根目录」下

```
 unzip OneAPM_java_Agent_latest.zip -d
 <Application Server Path>/
 ```

* 写入「License Key」至配置文件「OneAPM/oneapm.properties」<br>
 模板如下：<br>
 ![](/images/ailicense_key01.png)

* 注意 license_key 配置的时候不能有引号

* Play 2.2+ production 模式安装方法

* **注意：** play 启动命令不支持 -javaagent 选项。

* 使用解压命令：

 ```
 play clean dist && unzip target/universal/*.zip
 ```

* 在启动 Play 框架的应用程序时添加 -J-javaagent 选项。例如：

 ```
 cd UNZIPPEDFOLDER;
 ```

 ```
 ./bin/SCRIPTNAME -J-javaagent:path/to/oneapm.jar
 ```

* Play 2 production 模式安装方法

* 注意：play 启动命令不支持 -javaagent 选项。

 ```
 play clean dist && unzip dist/*.zip
 ```

* 在启动 play 框架的应用程序时添加 -javaagent 选项。例如：

 ```
 cd UNZIPPEDFOLDER;
 ```
 ```
 chmod a+x start;
 ```
 ```
 ./start -javaagent:path/to/oneapm.jar
 ```
