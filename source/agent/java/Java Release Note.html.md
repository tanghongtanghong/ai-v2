#Java Release Note
滕方 发表于 2014年11月14日 17:01 最后修改于 2016年10月11日 14:15 

注意：依据 JDK 的版本，OneAPM Java Agent有两套版本：
1.x版本的 Java Agent 针对 JDK 1.5
3.x版本的 Java Agent 针对 JDK 1.6, 1.7 1.8

*OneAPM Java Agent 3.3.6.5
本次发布内容主要包含自定义参数method方法获取、支持bes添加jmx相关数据、支持bes-ejb-client-0.8.1、解决cookie丢失问题等。
发布日期：2018/7/9
修复功能：
    1. 自定义参数method方法获取
    2.支持 bes-ejb-client-0.8.1

*OneAPM Java Agent 3.2.11
修复功能：
    1.修复 Jetty9.2.x 版本的嵌入式开发方式抓取不到数据的问题
    2.修复某种情况下应用被隐藏，但正常运行的问题

*OneAPM Java Agent 3.2.10
发布日期：2016/8/10
新增功能：
    1.企业级版本与 SAAS 版本共用一套代码库，不同之处在于，配置文件的配置项有所区别。    
修复功能：
    1.修复 jedis 2.7 在企业级版本中支持丢失的问题

*OneAPM Java Agent 3.2.9.1
发布日期：2016/8/03
新增功能：
    1.企业级版本兼容 SAAS 版本
改进：
    1.探针兼容 saas-数据库/ NOSQL
    2.探针兼容 trace 上传
修复功能：
    1.修复探针抓取不到 Xmemcatched,SpyMemcatched 执行的 Nosql 语句
    2.修复探针在 MongoDB 2.* 版本时，抓取不到 collection.find(dbObject) 语句
    3.修复Tier 运行环境 Physical Processors 和 Total Physical Memory (MB) 始终为0
    4.修复探针 log 中出现大量 java.lang.NullPointerException 的问题

*OneAPM Java Agent 3.2.3
发布日期：2016/4/27
新增功能：
    1.提供对政企公司BI插码功能
改进：
    1.对于 spring 框架内的用户业务代码的抓取
    2.改进探针对 MySQL 系统变量的抓取
修复功能：
    1.tomcat-broswer.jar 扩展包导致内存溢出

*OneAPM Java Agent 3.2.0
发布日期：2015/8/28
新增功能：
    1.支持中文 appName；
	2.支持根据系统参数重命名事务名称*；
	3.请求参数长度可配置*；
	4.dubbo 分布式支持。
修复问题：
	1.删除以进程号命名的异常信息；
	2.修复 java8 servlet 日志报错；
	3.校准 external 与 external transaction 的数据准确性；
	4.修复 sql 参数在 Windows 出现乱码的问题；
	5.修复小于阀值的 trace 上传问题；
	6.修复 MongoDB 调用者时间占比不显示的问题。
备注：
	1.支持根据系统参数重命名事务名称：
	2.通过设置参数 transaction_parameter_names 区分各参数名，参数之间用逗号分隔，比如：transaction_parameter_names = para1， para2；系统会在抓取到对应参数值后将不同参数对应的事物分类命名与计算。
	3.请求参数长度可配置：
	探针默认抓取参数值的最大长度为：256，修改 transaction_tracer.max_user_parameter_size 属性值可以调整这个最大长度值。比如：transaction_tracer.max_user_parameter_size = 300，标示抓取参数值的最大长度为300。

*OneAPM Java Agent 3.1.9
发布日期：2015/7/30
新增功能：
	1.支持 multipart/form-data 
	2.完善 SQL 参数值的抓取
备注：
	1.关于 multipart/form-data 支持，目前可以抓取文本域参数以及上传文件的大小；整个文件内容的抓取虽然可以实现，但并不建议，因为抓取整个文件会大量消耗系统性能；
	2.关于 SQL 参数值抓取，需要在“应用设置”中将“慢 sql 追踪”模式选为“原始sql” 或配置参数“transaction_tracer.record_sql = raw”。

*OneAPM Java Agent 1.1.0
发布日期：2015/6/26
修复问题：
	1.与 Kodo 框架冲突
	2.版本命名问题
增加功能：
	3.JSP 异常抓取

*OneAPM Java Agent 3.1.8
发布日期：2015/6/18
修复问题：
	1.新增支持 NoSQL DB 数据抓取。

*OneAPM Java Agent 3.1.7
发布日期：2015/4/22
修复问题：
	1.代码混淆。

*OneAPM Java Agent 3.1.6
发布日期：2015/4/10
增加功能：
	1.新增控制台在线修改探针配置的功能；
	2.浏览器监控功能：增加对 wildfly、tongweb、bes 等应用服务器的支持；
	3.优化探针配置文件：
	4.文件扩展名从 yml 改为了 properties，减少修改时出错的几率。
	5.新增配置项 appserver_port，用于配置应用的服务端口，此端口会增加到控制台中查看到的应用服务器的命名。
	6.部分用户反馈非主动开启浏览器监控功能的问题，此功能配置项删除，默认值由 true 改为 false。

*OneAPM Java Agent 3.1.1
发布日期：2015/3/9
增加功能：
	1.增加 WebSphere 支持。
修复问题：
	2.修复浏览器功能配置的问题。

*OneAPM Java Agent 3.1.0
Java Agent 3.1.0 支持更多 JDK 和 EJB 版本，特别增设了对 Tuxedo 的支持，以及 MongoDB 的支持。
发布日期：2015/2/2
增加功能：
	1.支持 JDK 1.6/JDK 1.7/JDK 1.8 ；
	2.增加 EJB 2.0，EJB 3.0 框架支持；
	3.增加 Tuxedo 支持；
	4.支持(Tomcat/Weblogic/Bes/Jboss/Jetty/)浏览器数据抓取；
	5.支持 MongoDB 的所有版本；
	6.增加 Redis v2.6.0 版本支持；
	7.增加 Memcache 版本支持（Spymemcache、Xmemcache、Memcache for Java）
	8.基于 Servlet 的事务划分功能。

*OneAPM Java Agent 2.0
发布日期：2014/11/17
增加功能：
	1.新增支持 JDK 1.7/JDK 1.8；
	2.增加 EJB 2.0，EJB 3.0 框架支持。
修复问题：
	3.修复了 licence 过期的 Bug，更新 licence 后无需再重启应用；（如果您的监控不可用了，请及时更新探针，目前 OneAPM 还在免费使用中！）
	4.修复在 tomcat 7 获取不到端口问题。

*OneAPM Java Agent 1.0
发布日期：2014/10/30
增加功能：
	1.增加 EJB 2.0，EJB 3.0 框架支持。
	2.支持在 xml 文件通配接口或者注解，可以精确抓取到类的方法；
修复问题：
	1.解决浏览器没有数据问题；
	2.解决在 Tomcat 7 获取不到端口问题；
	3.设置 Agent 版本号；（1.0 支持 1.5 和 1.6 版本的 JDK）
把探针端的过期验证解除，转由服务器端进行统一验证。