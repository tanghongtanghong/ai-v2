<font color=#333333 face="微软雅黑" size=6>使用向导</font> 
 
### 如果你是OneAPM Ai 的新用户，可以通过以下内容快速了解Ai及如何使用Ai~ 

 　　[什么是Ai?](#ai)　　[如何获取使用账号?](#2)    　　　

　　 [初步使用](#3)　　[最佳实践](#4)  
    
 　　[了解更多](#5)　　[讨论交流](#6)


### <span id="ai">什么是Application Insight</span>

 OneAPM Ai，全名为 OneAPM Application Insight，是OneAPM公司为企业用户精心打造的web应用性能管理工具，实现从用户终端到服务器端的全过程监控，它能帮助企业实现应用性能的最优化管理、改善终端用户使用体验、提高各部门工作效率。  
 ![](/images/ai_indexnew.png)

* **应用性能最优化管理**  
  对复杂的、分布式的应用系统进行监控，自动将应用、数据库、远程服务与其它应用之间的调用关系可视化拓扑呈现，帮助用户快速了解应用运行健康状况，有针对性的进行优化，实现性能的提高。

* **终端用户使用体验改善**  
  自动还原业务调用关系，将应用中的众多单个服务节点按照业务执行逻辑进行关联与呈现，从终端用户视角进行了解业务服务质量，从而改善使用体验。

* **各部门工作效率提高**  
  对缓慢与错误请求进行追踪，故障节点深度钻取，深入查找代码级原因，快速定位问题；智能告警随时处理业务故障，定期报表了解应用运行概况，让研发、运维等IT部门专注于核心工作，提高开发效率。

### <span id="2">如何获取使用账号？</span>
只要拥有OneAPM旗下任何一款产品的用户就是OneAPM的用户，就可以直接体验AI。  

**已注册用户**  

  访问 [OneAPM 登录页面](https://www.oneapm.com) ，输入已注册的 OneAPM 账号，进入 OneAPM 主页面。<br>  

**未注册用户**

若尚未注册 OneAPM 账号，请[注册 OneAPM 账号](https://user.oneapm.com/pages/v2/signup?from=ai-docs)后，开始使用。<br>
登录后默认进入控制台页面，点击 Application Insight 进入操作页面。
![](/images/ai_index02.png)


###<span id="3"> 初步使用</span>

**安装**  
初次使用 Application Insight 时，您需要添加相应的监控应用，下面以Java应用为例。  

1. 点击“探针下载”，如图所示：
 ![](/images/ai_index03.png)

2. 当我们选中 Java 的图标后会看到，如图：
 ![](/images/ai_index04.png)

3. 通过上面图中指示方式，（以 Tomcat 为例）下载 Agent 后放置到并成功部署在应用服务器根目录后如图：
 ![](/images/ai_index06.png)

4. 配置 license_key 到应用服务器根目录下的 /OneAPM/oneapm.properties 文件中（如上述截图所示的OneAPM文件夹），然后重启应用服务器。

5. 两分钟后，出现如下图所示数据，就说明您已经成功监控到应用的性能数据（[OneAPM中常用术语解释]()），可以开始进行性能分析了~
![](/images/ai_index05.png)

6. 其它探针安装：  
 [PHP](http://docs-ai.oneapm.com/agent/php/php_index.html)  
 [.NET](http://docs-ai.oneapm.com/agent/net/dotnet_index.html)  
 [Python](http://docs-ai.oneapm.com/agent/python/python_index.html)  
 [Node.js](http://docs-ai.oneapm.com/agent/nodejs/nodejs_index.html)  
 [Ruby](http://docs-ai.oneapm.com/agent/ruby/ruby_index.html)  

###功能说明
　　[应用拓扑查看](http://docs-ai.oneapm.com/book/Application/app_index.html)    
　　[使用web事务分析问题](http://docs-ai.oneapm.com/book/Web_trans/web_index.html)  
　　[用户缓慢请求详细追踪](http://docs-ai.oneapm.com/book/Trace/trace_index.html)  
　　[业务应用集群监控](http://docs-ai.oneapm.com/book/Tiers/tiers_index.html)  
　　[数据库监控](http://docs-ai.oneapm.com/book/Database_calls/database_index.html)  
　　[应用内外部调用追踪](http://docs-ai.oneapm.com/book/Remote_service/remote_index.html)  
　　[自定义监控指标数据](http://docs-ai.oneapm.com/book/Setting/setting_index.html)  
　　[智能报警设置](http://docs-ai.oneapm.com/book/Alert/alert_index.html)  
　　[监控报表查看与下载](http://docs-ai.oneapm.com/book/Report/report_index.html)  

###<span id="4">最佳实践</span>
　　[如何使用AI性能剖析](http://docs-ai.oneapm.com/bestpractice/sj1.html)  
　　[如何分析由于数据库调用产生的性能问题](http://docs-ai.oneapm.com/bestpractice/sj2.html)  
　　[如何高效设置报警](http://docs-ai.oneapm.com/bestpractice/sj3.html)  


###<span id="5">了解更多</span>
　　[OneAPM大学](https://www.oneapm.com/openclass/index.html)
　　[OneAPM博客](http://blog.oneapm.com/)

###<span id="6">讨论与交流</span>
　　[OneAPM社区](http://club.oneapm.com/)
