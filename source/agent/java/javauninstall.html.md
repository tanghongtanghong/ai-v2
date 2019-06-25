# 卸载 Agent

**方案－**

* Agent 是否运行控制开关

 1.打开 /OneAPM/oneapm.properties

 2.找到 agent_enabled = true －－使用这个参数来控制 agent 是否运行.

 3.把值设置为 false 就可以禁止 OneAPM 运行

**方案二**

* 以 Tomcat 为例

 1.打开 tomcat bin/catalina.sh 或者 tomcat bin/catalina.bat

 2.搜索 oneapm ，会找到如下：

 ```
# ---- oneapm switch automatically added to start command on 2015 Nov 05， 17：23：31
BW_JAR=/usr/local/server/tomcat7/OneAPM/oneapm.jar; export BW_JAR
CATALINA_OPTS="$CATALINA_OPTS -javaagent：$BW_JAR"; export CATALINA_OPTS
 ```

 3.把这几行删除或者注释掉

 4.重启应用服务器
