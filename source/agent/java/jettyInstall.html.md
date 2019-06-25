# Jetty 安装

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

* 解压「Agent」至「jetty 的根目录」下

```
 unzip OneAPM_java_Agent_latest.zip -d
 <Application Server Path>/
 ```

* 写入「License Key」至配置文件「OneAPM/oneapm.properties」<br>
 模板如下：<br>

 ![](/images/ailicense_key01.png)

* 注意 license_key 配置的时候不能有引号

**以下是不同版本 Jetty 的安装方法：**

* Jetty 7 及以上版本安装方法

 在 jetty.sh 的脚本中，See if JETTY_PORT is defined 的模块下加入

```
JAVA_OPTIONS+=("-javaagent:/full/path/to/oneapm.jar")
```

* Jetty 6及以下版本 安装方法

* Jetty 启动脚本 (jetty.sh)可以使用 JAVA_OPTIONS 环境变量配置：

 ```
export JAVA_OPTIONS="${JAVA_OPTIONS}
  -javaagent:/full/path/to/oneapm.jar"
 ```

* **注意：**/full/path/to/oneapm.jar 为 oneapm 绝对路径
