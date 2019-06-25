# PHP Agent更新日志




###OneAPM PHP Agent V2.5.3
####更新内容：
1.非root用户安装  
2.SaaS Ai 支持PHP7 CI Laravel4.2框架
3.解决daemon一次发送metric数据过多  
4.修改安装脚本，使安装脚本可以根据参数，手动安装  
5.数据中断现象(断点续传)  
6.服务器返回 417 错误  
7.非root下安装脚本问题  
8.Daemon 一次log打印超过1MB 时，log乱码    
9.php分布式trace，在php进程过多，daemon获取的trace可能是全是不计数trace  
10.Agent安装后，频繁重启php-fpm,导致出core
***


###OneAPM PHP Agent V2.4.7
####更新内容：
1.可以对服务器中不想监控的端口进行屏蔽  
2.修复 php 探针格式，与 server 端同步  
3.解决数据库详情中 Breakdown Table 没有数据问题
***



###OneAPM PHP Agent V2.4.5
####更新内容：
1.应用配置完善支持多线程模式  
2.slowsql 按照事务和 sqlid 一起合并  
3.不同时区用户无法正常使用探针  
4.无法通过 VisualGDB 编译  
5.修复其它 Bug
***



###OneAPM PHP Agent V2.4.4
####更新内容：
1.为trace抓取节点限制增加阀值  
2.修改现在获取应用名称机制，改为使用固定应用名称  
3.增加 enable-rate 功能  
4.增加默认申请的trace节点个数  
5.修复浏览器功能开启，不会自动插码，bi无数据  
6.修复慢事务里面看不到平均响应时间最长的web事务  
7.修复breakdown table 只展示SQL跟外部服务  
8.修复trace 中没有数据库信息  
10.修复调用栈信息错误  
***

###OneAPM PHP Agent V2.4.3
####更新内容：
1.daemon 支持自动重新加载 loglevel  
2.添加 daemon 停止特性（可以通过`oneapm-daemon -s stop`杀掉 daemon，不再需要 ps 再 kill）  
3.探针性能优化  
4.探针日志代码重构  
5.数据库、外部服务代码抽离解耦  
6.脚本 refactor  
7.安装脚本优化  
8.提升稳定性  
9.修复数据库数据为空  
10.修复slowsql 数据超过100条时 daemon 会将其清掉重新收集  
11.修复post 参数中包含 `\r` 导致 trace 数据解析错误  
12.修复请求参数中存在 `\r` 导致参数解析错误   
13.修复daemon 死锁问题  
***

###OneAPM PHP Agent V2.4.2
####更新内容：

1.增加后台任务的功能  
2.支持两个 PHP 框架 laravel4.2 和 laravel5  
3.修改编译脚本，可以根据 git 号来自动编译  
4.将 metric data 中的 memory 与 CPU 数据移到 daemon 里  
5.简化 PHP 安装步骤  
6.php.ini 文件中给 OneAPM 配置部分加入开始和结束标记  
7.优化 apm_get_database_metric_name  
8.添加对子表查询和 replace 语句的的匹配支持  
9.备份 php.ini,并增加前后项对比  
10.对非 CRUD 操作的数据抓取支持  
11.修复安装后，安装脚本信息显示不正确问题  
12.修复安装过程中 appname 双引号中的空格无法解析问题  
13.修复部分用户安装之后 agent crash 问题  
14.修复部分用户安装失败问题  
15.修复不能正确获得带注释的 SQL 中的表名问题  
16.修复在阿里云平台上，agent、daemon 不能通信问题  
17.修复新版本探针已支持框架有时无法被识别的问题  
***

###OneAPM PHP Agent for PHP 7 Beta 1.0.0.27
####更新内容：
注：此版本只支持 PHP 7，不向下兼容。  
1. 操作系统支持：  
   CentOS 5.5 及以上  
   Ubuntu 11.04 及以上

2. 功能模块支持：  
   拓扑图     
   Web 事务  
   慢事务  
   数据库  
   慢 SQL  
   错误信息  
   Web 事务报表  
   数据库报表  
***

###OneAPM PHP Agent V2.4.1
####更新内容：
1.新增应用设置功能，支持在控制台直接动态更改探针配置  
2.安装脚本支持使用参数完成环境变量配置，配置全部变量之后自动切换为静默安装  
3.优化数据处理算法，提高处理效率  
4.更新 daemon 上传规则，修复总览页面响应时间图表掉点问题  
5.修复一个可能导致 oneapm.so crash 的 bug  
6.修复 CodeIgniter 和 Yii 框架部分情况下无法自动拆分 Web 事务的问题  
7.修复 oneapm.so 启动时可能无法与 oneapm-daemon 通信的问题    
8.修复了部分情况下无法自动拆分 ThinkPHP 与 CodeIgniter URL 的问题 
*** 

###OneAPM PHP Agent V2.4.0
####更新内容：
1.新增通过 PHP Agent 自动注入 Bi Agent 脚本功能  
2.新增通过 PHP Agent Bi API 注入 Bi Agent 脚本功能  
3.新增对 pathinfo 格式 URI 的支持  
4.新增 PHP 应用和 Java 应用的数据打通，具有调用关系的应用能直接在调用栈中跳转  
5.新增对 Yii 2.0 的支持，优化对 Yii 1.1 的支持  
6.新增在调用栈中显示代码所在行号  
7.增加对 HTTPS 传输的支持  
8.增加对代理配置的支持  
9.增加对 FreeBSD 系统的支持  
10.优化安装脚本，在监测到 PHP 环境存在问题时终止安装程序  
11.优化安装脚本，在无法监测到有效 php.ini 文件时提示用户手动指定绝对路径  
12.优化 Agent 和 daemon 通信规则，进一步降低资源占用  
13.优化按子域名拆分聚合的规则，逻辑更加人性化  
14.优化外部服务时间计算规则，结果更加人性化  
15.修复在新版本 UI 中，具体外部服务页面中调用者时间占比为空的问题  
16.修复在新版本 UI 中，拓扑页面的 Web 事务详情中没有外部服务的问题  
17.修复在新版本 UI 中，错误信息页面自定义参数缺失的问题  
18.修复在同一台机器部署多个应用时数据合并的问题  
19.修复在极少数情况下不能通过 kill 命令结束 oneapm-daemon 的问题  
20.修复在极少数情况下无法启动 oneapm-daemon 的问题  
21.修复在极少数情况下可能出现的崩溃问题  

注：本次发布的探针暂不支持 PHP 5.2。
***

###OneAPM PHP Agent V2.3.12
####更新内容：
1.修复 2.3.11 探针在极少数环境下 daemon 重启问题  
2.修复 BTM 配置无法更新问题  
3.支持 business transaction （自定义事务）功能  
4.增加对 fsockopen 接口数据的抓取功能  
5.Agent 的 log 大小限制在 30MB 左右  
6.Daemon 的 log 大小限制在 512MB 左右  
7.Daemon 上传数据使用 Deflate 压缩  
***

###OneAPM PHP Agent V2.3.11
####更新内容：
1. 修复 PHP Agent 2.3.10 安装脚本卸载命令 purge 不能用的问题。移除 purge 命令，Uninstall 命令直接完全删除  
2. 切换按照网站名显示服务器，默认情况下按照 hostname 命名服务器
3. 通过设置 oneapm.usesitename=true，切换成按照 $_SERVER['HTTP_HOST'] 的值命名服务器  
4. Web 事务参数配置功能增加对 POST 参数的支持 
5. 新增 Business Transactions 功能，支持自定义参数拆分 Web 事务  
   1）URI 参数的”等于“匹配模式  
   2）HTTP 参数的”等于“匹配模式  
   3）Header 参数的”等于“匹配模式  
***


###OneAPM PHP Agent V2.3.10
####更新内容：
1.解决单一入口的问题  
2.php.ini 中新增2个用于配置事务名的解决配置项，分别是 auto_transcation_args 和 auto_transcation_naming  
***

###OneAPM PHP Agent V2.3.9
####更新内容：
1.修复“总览 > web事务”中 Trace 只显示 {main} 的 Bug  
2.修复 Apdex 值不准确问题  
3.新增对 NoSQL 的支持(Redis, MongoDB, Memcache, Memcached)  
4.优化脚本安装流程 
*** 

###OneAPM PHP Agent V2.3.8
####更新内容：
1.优化 oneapm-daemon 内存占用问题，资源消耗明显下降，性能显著提升  
2.重启 PHP 应用 oneapm-daemon 伴随启动，无需手动启动 oneapm-daemon  
3.完善 php.ini 文件中的配置项  
***

###OneAPM PHP Agent V2.3.7
####更新内容：
1.修复 ubuntu 系统，多个 php.ini 没有正确配置的问题 
*** 

###OneAPM PHP Agent V2.3.6
####更新内容：
1.修复没有 php 扩展目录时，安装失败的问题  
2.支持自动监控前端浏览器性能  
3.安装脚本添加升级功能    
4.在配置选项中，可配置错误报告级别 
*** 

###OneAPM PHP Agent V2.3.5
####更新内容：
1.大幅提升 PHP Agent 性能  
2.修复 PHP2.3.1 不支持 amh4.2 和框架报错的问题  
3.修复出现多服务器的问题  
4.支持 PHP 5.2  
5.安装脚本添加升级功能  
***

###OneAPM PHP Agent V2.1.1
####更新内容：
1.解决各别用户 uri 为空的问题。
2.新增支持 PostgreSQL 数据库。
***

###OneAPM PHP Agent V2.0.0
####更新内容：
1.解决安装探针后无法启动的 php-fpm 问题  
2.新增支持PHP 5.6  
3.新增"应用程序-监控-总览-响应时间图表"中外部事物曲线信息的功能
***  

###OneAPM PHP Agent V1.0.0
####更新内容：
1.解决 discuz 框架压测一段时间没有数据问题  
2.解决配置文件文字提示出入问题  
3.解决 php-daemon 自动退出问题  
4.其他小问题的 fix   
5.支持外部服务功能  
6.支持 AMH 面板环境  
7.支持 phpMyAdmin 环境  
8.安装脚本修改,无需输入安装目录  
***