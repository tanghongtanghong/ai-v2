# Java Agent 兼容性和安装要求
本文主要针对 OneAPM 的 Java Agent 的兼容性，安装方法，配置进行展开说明。
我们支持的应用服务器和应用框架如下表所示：

**javaagent支持列表-3.x**

|中间件    |  JVM |操作系统|是否支持|
| :--- | :--- |:--- |:--- |
|Weblogic-10.3 |  HotSpot JDK-(1.6.x, 1.7.x, 1.8.x)-64bit |  CentOS 7.x, Ubuntu 14.x, RedHat 6.x, Win 7, Win 2008 |   是 |
|Weblogic-10.3 |  JRockit JDK-(1.6.x)-64bit |  CentOS 7.x, Ubuntu 14.x, RedHat 6.x, Win 7, Win 2008 |   是 |
|Weblogic-10.3 |  J9 JDK-(1.6.x)-64bit & 32bit |  AIX 5.3 64bit |   是 |
|weblogic-12.1.3.0.0 |	HotSpot JDK-(1.7.x, 1.8.x)-64bit |	CentOS 7.x Ubuntu 14.x, RedHat 6.x | 是  |
|Weblogic-12.2.1.1.0 |  HotSpot JDK-( 1.8.x)-64bit | CentOS 7.x Ubuntu 14.x, RedHat 6.x	| 是  |
|WebSphere 7.0 | J9 JDK-(1.6.x)-64bit |  CentOS 7.x, Ubuntu 14.x, RedHat 6.x |  是 |
|WebSphere 8.0 | J9 JDK-(1.7.x, 1.8.x)-64bit   | CentOS 7.x, Ubuntu 14.x, RedHat 6.x, Win 7 | 是 |
|WebSphere 8.5 | J9 JDK-(1.7.x, 1.8.x)-64bit   | CentOS 7.x, Ubuntu 14.x, RedHat 6.x, Win 7	| 是 |
|WebSphere 9.0 | J9 JDK-(1.8.x)-64bit	 CentOS 7.x, Ubuntu 14.x, RedHat 6.x, Win 7	是
|Tomcat 6.0.45 | HotSpot JDK-(1.6.x, 1.7.x, 1.8.x )-64bit | CentOS 7.x, Ubuntu 14.x, RedHat 6.x, Win 7, Win 2008 | 是 |
|Tomcat 7.0.70	| HotSpot JDK-(1.6.x, 1.7.x, 1.8.x )-64bit |	CentOS 6.5 32bit	| 是 |
|Tomcat 8.0.45	| HotSpot JDK-(1.7.x, 1.8.x )-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Tomcat 8.5.4	| HotSpot JDK-(1.7.x, 1.8.x )-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Tomcat 9	 | HotSpot JDK-(1.8.x )-64bit	|  CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|JBoss 5.1.0	| HotSpot JDK-(1.6x, 1.7.x)-64bit | CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|JBoss 6.0.0	| HotSpot JDK-(1.6x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|JBoss 6.1.0	| HotSpot JDK-(1.6x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 | 
|JBoss 7.0.0	| HotSpot JDK-(1.7.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|JBoss 7.1.1	| HotSpot JDK-(1.7.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|JBoss 7.2.0	| HotSpot JDK-(1.7.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Jetty 7.6.19	| HotSpot JDK-(1.6x, 1.7.x,1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Jetty 9.0.7	| HotSpot JDK-(1.7.x,1.8.x)-64bit | CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Jetty 9.1.6	| HotSpot JDK-(1.7.x,1.8.x)-64bit| CentOS 7.x, Ubuntu 14.x, RedHat 6.x  | 是 | 
|Jetty 9.2.18	| HotSpot JDK-(1.7.x,1.8.x)-64bit |	 CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|Jetty 9.3.10	| HotSpot JDK-(1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Jetty 9.3.11	| HotSpot JDK-(1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Jetty 9.4.6	| HotSpot JDK-(1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Resin 4.0.41	| HotSpot JDK-(1.6x, 1.7.x)-64bit |	CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Resin 4.0.49	| HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit |	CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|Resin 4.0.53	| HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit |	CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|TTongWeb 4.6	| HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit |	CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|TongWeb 5.0	| HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit |	CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|TongWeb 5.0	| HotSpot JDK-(1.6x)-64bit	AIX 5.3 64bit |	是 |
|TongWeb 6.0	| HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit |	CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|BES 8.11	| HotSpot JDK-(1.6x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x |	是 |
|金蝶 AAS 5.1 | HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit | CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|金蝶 AAS 9.0	| HotSpot JDK-(1.6x, 1.7.x, 1.8.x)-64bit | CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|中创CVICSE 9.1.2	| HotSpot JDK-(1.7.x, 1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x | 是 |
|Wildfly 8.0.0	| HotSpot JDK-(1.7.x, 1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Wildfly 8.2.0	| HotSpot JDK-(1.7.x, 1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Wildfly 8.2.1	| HotSpot JDK-(1.7.x, 1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Wildfly 9.0.1	| HotSpot JDK-(1.7.x, 1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Wildfly 9.0.2	| HotSpot JDK-(1.7.x, 1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Wildfly 10.0.0	| HotSpot JDK-(1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
|Wildfly 10.1.0	| HotSpot JDK-(1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 | 
|Wildfly 11.0.0	| HotSpot JDK-(1.8.x)-64bit	| CentOS 7.x, Ubuntu 14.x, RedHat 6.x	| 是 |
<br><br>


|  |  |
| :--- | :--- |
|  框架 | CXF<br>Axis1.x to 2.x<br>Grails 1.3.7 to 2.3.x (待测试)<br>JSF (Java Server Faces)<br>Play 1.2.4 (待测试)<br>Play 2.0.3 to 2.3.x (待测试)<br>Spring 3.x to 4.x<br>Hibernate 3.x to 4.x<br>HttpClient 3.0.1 to 4.3.x<br>Solr 1.4.0 to 4.0 (待测试)<br>Struts 2<br>EJB2<br>EJB3<br>OSB<br>Apache Turbine 2.3.x<br>Dorado 7.2.3  |
| 数据库  |  Oracle(ojdbc5, ojdbc6,ojdbc14)<br>SQL Server(sqljdbc_4.0_sqljdbc4.jar jtds-1.2.2 jtds-1.2.4 jtds-1.2.7 jtds-1.2.8 jtds-1.3.1)<br>MySQL(5.1.17~5.1.6)<br>Postgres(postgressql-8.4-703.jdbc3,postgressql 9.0-802, 9.1-903,9.4)<br>DB2(jdbc3,jdbc4)<br>Informix<br>Dameng 
<br>神通数据库<br><br>Sybases<br> |
|  NOSQL| MongoDB(2.0 ~ 3.4.2)<br>Memcached(spymemcached-2.11.6,2.7.3,2.8.1,2.8.4/xmemcached-1.3.2~2.0.0)<br>Memcached(whalin-2.0.1/whalin-3.0.2)<br>Redis(2.6.0 ~ 2.9.0)<br>Cassandra(3.0.0 ~ 3.1.0) |
|分布式协议  |  XMLRPC<br>RMI<br>Dubbo<br>HTTP<br>Thrift 0.9<br>hsfRPC<br>phpRPC<br>|
| MQ | RabbitMQ 2.7 to 3.5 (AMQP and JMS)<br>ActiveMQ<br>IBM MQ<br>Tonglinkq 8.1<br>RocketMQ 3.2.6 |
| 浏览器插码 |  Tomcat<br>WebLogic<br>WebSphere<br>Jboss<br>Resin<br>BES<br>TongWeb<br>Jetty<br>金蝶AAS<br>中创CVICSE<br>Wildfly<br>|
| 其他 | Quartz Job Scheduler 1.8.3 to 2.2.x<br>JSP 2.0 to 2.2<br>JMS 1.1 and Spring-JMS<br>JMX |


**javaagent支持列表-1.x**

|中间件    |  JVM |操作系统|是否支持|
| :--- | :--- |:--- |:--- |
| Weblogic-9.2 | HotSpot JDK-(1.5.x)-64bit |CentOS 7, Ubuntu 14.x, RedHat 6.x, Win 7, Win 2008| 是 |
| Weblogic-9.2 | JRockit 1.5 |CentOS 7, Ubuntu 14.x, RedHat 6.x, Win 7, Win 2008| 是 |
| WebLogic 10.1 | HotSpot JDK-(1.5.x)-64bit |CentOS 7, Ubuntu 14.x, RedHat 6.x| 是 |
| Tomcat 6 | HotSpot JDK-(1.5.x)-64bit |CentOS 7, Ubuntu 14.x, RedHat 6.x| 是 |
| Tomcat 6 | JRockit 1.5 |CentOS 7, Ubuntu 14.x, RedHat 6.x| 是 |

<br><br>

|  |  |
| :--- | :--- |
| 框架 | CXF<br>Grails (待测试)<br>JSF (Java Server Faces)<br>Play 1.2.4 (待测试)<br>Spring<br>Hibernate<br>HttpClient<br>Solr<br>Struts |
| 数据库 | Oracle(ojdbc5, ojdbc6,ojdbc14)<br>SQL Server(jTDS open source JDBC 3.0 type 4 driver,sqljdbc4)<br>MySQL<br>Postgres(postgressql-8.4-701.jdbc3,postgressql 9.0, 9.1)<br>Informix |
| 分布式 | HTTP |
| 浏览器插码 | Tomcat<br>TongWeb |
| 其他 | JSP 2.0 to 2.2<br>JMS 1.1 and Spring-JMS<br>JMX |














