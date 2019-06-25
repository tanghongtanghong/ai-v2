# ColdFusion 安装

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

* 解压「Agent」至「ColdFusion的根目录」下

```
 unzip OneAPM_java_Agent_latest.zip -d
 <Application Server Path>/
 ```
* 写入「License Key」至配置文件「OneAPM/oneapm.properties」<br>
 模板如下：<br>
 ![](/images/ailicense_key01.png)

* 注意 license_key 配置的时候不能有引号

* ColdFusion 应用服务器 Java Agent 安装步骤：

* 第一步：登陆到 ColdFusion 的 Administrator Console.

* 第二步：在左侧的导航栏中选择 SERVER SETTINGS > Java and JVM.

* 第三步：在 JVM Arguments 文本框中， 添加 -javaagent 标签:

 ```
 -javaagent:/full/path/to/oneapm.ja
 ```

 ![](/images/wwp7.png)

* 第四步：点击提交并重新启动。<br>
 ![](/images/wwp8.png)
