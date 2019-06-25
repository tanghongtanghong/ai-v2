# Jsvc 方式安装 Agent<br>

### 1. 获取授权编号
* License Key 获取<br>
 ![](/images/license_keyget01.png)

### 2. 下载
* 下载 Agent
 ![](/images/agent_download01.png)

* JDK 1.6 - 1.8 请下载

```
 wget: https://user.oneapm.com/account/5dad74ffe945c060/agent/java/OneAPM_java_Agent_latest.zip
 ```

* JDK 1.5 请下载

 ```
 wget:https://user.oneapm.com/account/5dad74ffe945c060/agent/java/OneAPM_java_Agent_legacy.zip
  ```

### 3. 安装

* 在 jsvc 启动脚本中增加 JAVA\_OPTS="$JAVA_OPTS -javaagent:/full/path/to/OneAPM/oneapm.jar" <br>
* 注意：-javaagent: 后面跟 oneapm.jar 的绝对路径。<br>
