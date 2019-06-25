# Java Agent 更新日志


###OneAPM JavaAgent V3.4.1
####更新内容：  
1.支持调用链快照标记   
2.支持错误日志提取  
3.JavaAgent java包启动选项支持传参，支持-Doneapm.app_name，-Doneapm.tier_name， -Doneapm.license_key参数  
4.探针日志优化  
5.修复部分bug

***

###OneAPM JavaAgent V3.4.0 
####更新内容：  
1.支持对探针进行管理，支持删除、暂停、启动等  
2.CSF升级到2.0     
***

###OneAPM JavaAgent V3.3.1
####更新内容：  
1.自定义参数method方法获取  
2.支持 bes-ejb-client-0.8.1  
3.支持bes添加jmx相关数据  
4.修复cookie丢失问题  
注：  
依据 JDK 的版本，OneAPM Java Agent有两套版本：  
1.x版本的 Java Agent 针对 JDK 1.5  
2.x版本的 Java Agent 针对 JDK 1.6, 1.7 1.8    
***

###OneAPM JavaAgent V3.3.0
####更新内容：  
1.全面支持Netty框架   
2.支持MI和AI打通参数    
***

###OneAPM  JavaAgent V3.2.4
####更新内容：  
 1.修复 Jetty9.2.x 版本的嵌入式开发方式抓取不到数据的问题  
 2.修复某种情况下应用被隐藏，但正常运行的问题
***

###OneAPM  JavaAgent V3.2.3
####更新内容：  
 1、修复 jedis 2.7 在企业级版本中支持丢失的问题 

###OneAPM  JavaAgent V3.2.2
####更新内容：  
1.探针兼容 saas-数据库/ NOSQL  
2.探针兼容 trace 上传  
3.修复探针抓取不到 Xmemcatched,SpyMemcatched 执行的 Nosql 语句  
4.修复探针在 MongoDB 2.* 版本时，抓取不到 collection.find(dbObject) 语句  
5.修复Tier 运行环境 Physical Processors 和 Total Physical Memory (MB) 始终为0  
6.修复探针 log 中出现大量 java.lang.NullPointerException 的问题  
 
***
###OneAPM  JavaAgent V3.2.1
####更新内容：
1.对于 spring 框架内的用户业务代码的抓取  
2.改进探针对 MySQL 系统变量的抓取  
3、tomcat-broswer.jar 扩展包导致内存溢出

***
###OneAPM  JavaAgent V3.2.0
####更新内容：
1.支持中文APPName  
2.支持根据系统参数重命名事务名称*  
3.请求参数长度可配置*
4.dubbo分布式支持  
5.删除以进程号命名的异常信息  
6.修复 java8 servlet 日志报错  
7.校准 external 与 external transaction 的数据准确性  
8.修复 sql 参数在 Windows 出现乱码的问题  
9.修复小于阀值的 trace 上传问题  
10.修复 MongoDB 调用者时间占比不显示的问题

注：  
1.支持根据系统参数重命名事务名称：

  通过设置参数 transaction_parameter_names 区分各参数名，参数之间用逗号分隔，比如：transaction_parameter_names = para1， para2；系统会在抓取到对应参数值后将不同参数对应的事物分类命名与计算。

2. 请求参数长度可配置：

  探针默认抓取参数值的最大长度为：256，修改 transaction_tracer.max_user_parameter_size 属性值可以调整这个最大长度值。比如：transaction_tracer.max_user_parameter_size = 300，标示抓取参数值的最大长度为300。

***

###OneAPM  JavaAgent V3.1.2  
####更新内容：
1.支持 multipart/form-data   
2.完善 SQL 参数值的抓取  
3.修复kodo框架冲突  
4.解决版本命名问题  
5.增加JSP异常抓取

注：  
  
1、关于 multipart/form-data 支持，目前可以抓取文本域参数以及上传文件的大小；整个文件内容的抓取虽然可以实现，但并不建议，因为抓取整个文件会大量消耗系统性能；

2、关于 SQL 参数值抓取，需要在“应用设置”中将“慢 sql 追踪”模式选为“原始sql” 或配置参数“transaction_tracer.record_sql = raw”。

***


###OneAPM  JavaAgent V3.1.1
####更新内容：
1.支持Nosql DB数据库抓取  
2.新增控制台在线修改探针配置的功能  
3.增加浏览器监控功能  
4.增加对wildly、tongweb、bes等应用服务器的支持  
5.优化探针配置文件

***

###OneAPM  JavaAgent V3.1.0
####更新内容：
1.增加WebSphere支持  
2、修复浏览器功能配置问题  

***

###OneAPM  JavaAgent V3.0.0
####更新内容：
1.支持 JDK 1.6版本  
2.增加 Tuxedo 支持  
3.支持(Tomcat/Weblogic/Bes/Jboss/Jetty/)浏览器数据抓取  
4.支持 MongoDB 的所有版本  
5.增加 Redis v2.6.0 版本支持  
6.增加 Memcache 版本支持（Spymemcache、Xmemcache、Memcache for Java）  
7.基于 Servlet 的事务划分功能。

***


###OneAPM  JavaAgent V2.0.0
####更新内容：
1.支持 JDK 1.7/JDK 1.8  
2.增加 EJB 2.0，EJB 3.0 框架支持   
3.修复license过期问题，更新license后无需重启应用    
4.修复Tomcat7获取不到端口问题  

***

###OneAPM  JavaAgent V1.0.0
####更新内容：
1.Java Agent全新上线  
2.增加EJB2.0,EJB3.0框架支持  
3.支持在xml文件通配接口或注解，可以精确抓取到类的方案  
4.修复浏览器没有数据问题     
5.修复Tomcat7获取不到端口问题  
6.解决探针端过期验证，由服务器端进行统一验证
  
***