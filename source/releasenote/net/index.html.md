# .Net Agent更新日志

###OneAPM .Net Agent V2.2.0
####更新内容：  
1、底层代码优化   
2、修复部分trace打不开问题  
3、探针实例名称支持主机名字上报  
***

###OneAPM .Net Agent V2.0.0
####更新内容：  
1、修复bug，将analitic中的hasTrace修正为是否有transaction_sample_data  
2、修复bug，将bytemode设为false，网页中有两段插码 
***

###OneAPM .Net Agent V1.4.1
####更新内容：
1.增加一个探针完整性检测工具  
2.支持Mongodb.Diver,Version2.1.0  
3.StackExchange.Redis1.0.481支持  
4.对log组件中的文件写入功能加入按大小拆分的功能  
5.对ExceptionEnhancer添加配置项  
6.升级 Profiler 层的方法描述实现  
7.丰富异常信息的信息量  
8.探针日志报错问题  
9.追踪模式设置为关闭，展示不正确  
10.探针发送数据问题  
  
***

###OneAPM .Net Agent V1.4.0
####更新内容：  
1..Net探针BI功能无法开启   
2.AI3.2.5——总览 没有外部服务信息  
3.线上saas AI——监控——数据库重复  
4.线上saas AI——监控——web事务 没有慢事务  
5.探针在 .NetFramework 4.6.1 版 ASP.NET Web 模板下崩溃等问题  
6.数据库nosql类型没有调用者时间占比等详细信息  
7.NET探针关键事务性能剖析功能 无法正常使用  
***

###OneAPM .Net Agent V1.3.2
####更新内容：
1..Net 探针 metric_data 中 “Errors/WebTransaction/{Web事务url}” 字段缺失  
2.关键事务性能剖析，数据展现后，过一会就不能查看了  
3.基于 ServiceStack 的 Redis 驱动数据捕获失效  
4.错误详情的请求参数 展示有问题  
5.安装程序自动进行64位和32位判断
  
***


###OneAPM .Net Agent V1.3.1
####更新内容：
1.时间戳单位由秒修改为毫秒   
2.服务器报500错误  
3.修复探针只抓取了部分慢事务问题
  
***

###OneAPM .Net Agent V1.3.0
####更新内容：
1.transaction次数记录不准确  
2.wcf无法显示拓扑  
3.将Metricld的类型从 int 改为 long

***


###OneAPM .Net Agent V1.2.2
####更新内容：
1.慢事务追踪，未展示慢事务信息  
2.探针在 Windows Server 2003（IIS6.0）上卸载出错  
3.探针抓取 Web 应用端口号错误  
4.关闭BI自动注入功能
***

###OneAPM .Net Agent V1.2.1
####更新内容：
1.AI 浏览器自动插码功能  
2.支持 WebSite 类型的用户代码的自定义抓取  
3.分布式调用抓取  
4.应用间接调用 externaltransaction 数据给前端做展示  
5.使用更明确的提示方式告知用户安装过程要重启 IIS  
6.应用程序-设置-自定义事务 探针无法抓取自定义事务  
7.安装包环境变量缺失  
8.将探针注入一般化，提供用户可定制注入特性(兼容性增强)

***


###OneAPM .Net Agent V1.2.0
####更新内容：
1.支持Memcache和Redis监控  
2.优化注入字节码情况下的异常   
3.恢复安装后的开始菜单中的logs菜单  
4.安装脚本增加信息提示窗
***

###OneAPM .Net Agent V1.1.0
####更新内容：
1.支持MongoDB  
2.增加忽略某些assembly的配置  
3.探针安装后，不需要再重启Windows  
4.在配置文件添加应用程序与服务器切换的配置项  
5.支持enable_auto_app_naming的配置  
6.支持非IIS的应用，对于非IIS的自托管应用，目前已支持WCF Services
***


###OneAPM .Net Agent V1.0.3
####更新内容：
1.Business Transaction功能，支持自定义参数拆分web事务  
  url参数的“等于”匹配模式  
  http参数的“等于”匹配模式  
  header参数的“等于”匹配模式

2.server端应用的配置设置  
  .net agent的应用无需在config文件中更改，支持在server端进行应用的配置设置操作  
 
3.添加对指定应用过滤的功能，在web.config的appSettings进行配置即可

  ` add key = "OneAPM.Enable" value="false" `

***

###OneAPM .Net Agent V1.0.2
####更新内容：
1.修复了 SharePoint 2013崩溃问题  
2.修复了插入浏览器探针 errorbeacon 字段的 bug  
3.修改了浏览器探针插入字段 EUM
4.支持64位 Server 运行32位 Web Application:  

  在旧版本中，如果64位操作系统安装的是32位的 IIS，那么只能使用32位的 .NET 安装包。如果使用64位的 .NET 安装包是监控不到数据的。  

   在新版本中，如果64位操作系统安装的是32位的 IIS，可以使用64位的 .NET 安装包，后台可以监控到数据。

5.支持对 Enterprise library 数据库操作的监控  

.NET Agent 可以监控 .NET 应用以下数据库发出的请求的性能，但 Agent 不会直接监控数据库的处理过程。

旧版本中，.NET Agent 可以支持监控的数据库有：SQL Server、Oracle、MySQL以及 PostgreSQL。

新版本中，不仅可以支持上述数据库操作的监控，还支持了对 Enterprise library 数据库操作的监控

***

###OneAPM .Net Agent V1.0.1
####更新内容：
1.修复浏览器监控不可用    
2.添加对ServiceStack框架的异常处理  
3.修复加密库导致的crt溢出的bug

***

###OneAPM .Net Agent V1.0.0
####更新内容：
1.全新上线.net探针  
2.支持wcf框架  
3.添加版本信息至Agent files
4.解决安装包在安装过程中Windows 2003 server中license没有被替换的问题  
5.解决agent运行过程中license为初始值一直发送请求的问题  
6.解决安装脚本创建快捷方式失败时退出的问题  
7.支持ServiceStack框架V3，V4版本，及ServiceStack Url的合并  
8.添加 MVC/WEBPAI 对 Rest Url 的合并  
9.添加 OneAPM 配置文件 对 Apdex_T 的配置  
10.修改 Oneapm.Net.Agent 的类格式

***