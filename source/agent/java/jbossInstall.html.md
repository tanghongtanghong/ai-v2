# Jboos 安装
### 1. 获取授权编号

* License Key 获取<br>
 ![](/images/license_keyget01.png)

### 2. 下载
* 下载 Agent
 ![](/images/agent_download01.png)

* JDK 1.6 - 1.8  请下载

```
 wget:https://user.oneapm.com/account/5dad74ffe945c060/agent/java/OneAPM_java_Agent_latest.zip
 ```

* JDK 1.5 请下载

 ```
 wget:https://user.oneapm.com/account/5dad74ffe945c060/agent/java/OneAPM_java_Agent_legacy.zip
  ```

### 3. 安装

* 解压「Agent」至「Jboos的根目录」下

```
 unzip OneAPM_java_Agent_latest.zip -d
 <Application Server Path>/
 ```

* 写入「License Key」至配置文件「OneAPM/oneapm.properties」<br>
 模板如下：<br>
 ![](/images/ailicense_key01.png)

* 注意 license_key 配置的时候不能有引号


* Domain mode

 domain mode 支持 JBoss versions 6.x EAP 或 7.0.x AS 及以上版本。

 修改 domain/configuration/domain.xml，添加 -javaagent 选项，格式如下：

```
<server-group name="main-server-group" profile="full">
  <jvm name="default">
    <jvm-options>
    <option value="-javaagent:/full/path/to/oneapm.jar"/>
  </jvm-options>
</jvm>
.
.
.
</server-group> 
```
<br>

注意：javaagent 选项要指向 oneapm.jar 安装的绝对路径

* Standalone mode

 ![](/images/jbossinstall.png)

 
注意：javaagent 选项要指向 oneapm.jar 安装的绝对路径
