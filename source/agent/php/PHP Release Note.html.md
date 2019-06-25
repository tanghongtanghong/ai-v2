#PHP Release Note
OneAPM 管理员 发表于 2015年06月09日 15:41 最后修改于 2016年09月21日 12:02 
*OneAPM PHP Agent 2.8.1.0
发布时间：2018.08.24
新功能：
    探针支持php7.2
*OneAPM PHP Agent 2.6.0
发布日期：2016.11.08
解决问题:
	1.demon进程crash
	2.后台任务没有数据
	3.外部服务信息命名展示不正确
	4.错误信息页面，没能抓取后台任务产生的错误信息
	5.agent连接daemon失败，daemon进程crash
	6.没有慢sql信息
	7.无法查询版本号信息
	8.nginx+php7.0.11_zts环境下加载agent弹框
	9.安装过程中daemon报错
	10.安装过程报错，php.ini没有被写入
	11.手动安装执行dumpbin.exe，报错   

* OneAPM PHP Agent 2.5.3
发布日期：2016.09.08
新功能：
	1.非root用户安装
	2.SaaS Ai 支持PHP7 CI Laravel4.2框架
优化：
	1.解决daemon一次发送 metric 数据过多
	2.修改安装脚本，使安装脚本可以根据参数，手动安装
	3.数据中断现象(断点续传)
解决问题：
    1.服务器返回 417 错误
    2.非root下安装脚本问题
    3.Daemon 一次 log 打印超过1 MB 时，log 乱码
    4.php分布式 trace，在 php 进程过多，daemon 获取的 trace 可能是全是不计数 trace
    5.Agent安装后，频繁重启 php-fpm ,导致出 core

* OneAPM PHP Agent 2.4.7
发布日期：2016.05.03
新功能：
	1.可以对服务器中不想监控的端口进行屏蔽
优化：
	1.修复 php 探针格式，与 server 端同步
解决问题：
	1.数据库详情中 Breakdown Table 没有数据问题

* OneAPM PHP Agent 2.4.5
发布日期：2016.02.25
改进：
	1.应用配置完善支持多线程模式
	2.slowsql 按照事务和 sqlid 一起合并
修复：
	1.不同时区用户无法正常使用探针
	2.无法通过 VisualGDB 编译
	3.其它 Bug

* OneAPM PHP Agent 2.4.4
发布日期：2016.01.27
改进：
	1.为trace抓取节点限制增加阀值
	2.修改现在获取应用名称机制，改为使用固定应用名称
	3.增加 enable-rate 功能
	4.增加默认申请的trace节点个数
修复：
	1.浏览器功能开启，不会自动插码，bi无数据
	2.慢事务里面看不到平均响应时间最长的web事务
	3.breakdown table 只展示SQL跟外部服务
	4.trace 中没有数据库信息
	5.调用栈信息错误

* OneAPM PHP Agent 2.4.3
发布日期：2016.01.07
新增：
	1.daemon 支持自动重新加载 loglevel
	2.添加 daemon 停止特性（可以通过`oneapm-daemon -s stop`杀掉 daemon，不再需要 ps 再 kill）
改进：
	1.探针性能优化
	2.探针日志代码重构
	3.数据库、外部服务代码抽离解耦
	4.脚本 refactor
	5.安装脚本优化
	6.提升稳定性
修复：
	1.数据库数据为空
	2.slowsql 数据超过100条时 daemon 会将其清掉重新收集
	3.post 参数中包含 `\r` 导致 trace 数据解析错误
	4.请求参数中存在 `\r` 导致参数解析错误 
	5.daemon 死锁问题

*OneAPM PHP Agent 2.4.2
发布日期：2015/12/18
增加功能：
	1.增加后台任务的功能。
	2.支持两个 PHP 框架 laravel4.2 和 laravel5。
优化功能：
	1.修改编译脚本，可以根据 git 号来自动编译。
	2.将 metric data 中的 memory 与 CPU 数据移到 daemon 里。
	3.简化 PHP 安装步骤。
	4.php.ini 文件中给 OneAPM 配置部分加入开始和结束标记。
	5.优化 apm_get_database_metric_name。
	6.添加对子表查询和 replace 语句的的匹配支持。
	7.备份 php.ini,并增加前后项对比。
	8.对非 CRUD 操作的数据抓取支持。
修复问题：
	1.修复安装后，安装脚本信息显示不正确问题。
	2.修复安装过程中 appname 双引号中的空格无法解析问题。
	3.修复部分用户安装之后 agent crash 问题。
	4.修复部分用户安装失败问题。
	5.修复不能正确获得带注释的 SQL 中的表名问题。
	6.修复在阿里云平台上，agent、daemon 不能通信问题。
	7.修复新版本探针已支持框架有时无法被识别的问题。

*OneAPM PHP Agent for PHP 7 Beta 1.0.0.27
备注：此版本只支持 PHP 7，不向下兼容。
发布日期：2015/12/3
最后更新日期：2015/12/10
操作系统支持：
	1.CentOS 5.5 及以上
	2.Ubuntu 11.04 及以上
功能模块支持：
	1.拓扑图
	2.Web 事物
	3.慢事务
	4.数据库
	5.慢 SQL
	6.错误信息
	7.Web 事物报表
	8.数据库报表

*OneAPM PHP Agent 2.4.1
发布日期：2015/11/18
增加功能：
	1.新增应用设置功能，支持在控制台直接动态更改探针配置。
优化功能：
	2.安装脚本支持使用参数完成环境变量配置，配置全部变量之后自动切换为静默安装；
	3.优化数据处理算法，提高处理效率。
修复问题：
	1.更新 daemon 上传规则，修复总览页面响应时间图表掉点问题；
	2.修复一个可能导致 oneapm.so crash 的 bug；
	3.修复 CodeIgniter 和 Yii 框架部分情况下无法自动拆分 Web 事务的问题；
	4.修复 oneapm.so 启动时可能无法与 oneapm-daemon 通信的问题；
	5.修复了部分情况下无法自动拆分 ThinkPHP 与 CodeIgniter URL 的问题。

*OneAPM PHP Agent 2.4.0
发布日期：2015/10/08
增加功能：
	1.新增通过 PHP Agent 自动注入 Bi Agent 脚本功能；
	2.新增通过 PHP Agent Bi API 注入 Bi Agent 脚本功能；
	3.新增对 pathinfo 格式 URI 的支持；
	4.新增 PHP 应用和 Java 应用的数据打通，具有调用关系的应用能直接在调用栈中跳转；
	5.新增对 Yii 2.0 的支持，优化对 Yii 1.1 的支持；
	6.新增在调用栈中显示代码所在行号；
	7.增加对 HTTPS 传输的支持；
	8.增加对代理配置的支持；
	9.增加对 FreeBSD 系统的支持。
优化功能：
	1.优化安装脚本，在监测到 PHP 环境存在问题时终止安装程序；
	2.优化安装脚本，在无法监测到有效 php.ini 文件时提示用户手动指定绝对路径；
	3.优化 Agent 和 daemon 通信规则，进一步降低资源占用；
	4.优化按子域名拆分聚合的规则，逻辑更加人性化；
	5.优化外部服务时间计算规则，结果更加人性化。
修复问题：
	1.修复在新版本 UI 中，具体外部服务页面中调用者时间占比为空的问题；
	2.修复在新版本 UI 中，拓扑页面的 Web 事务详情中没有外部服务的问题；
	3.修复在新版本 UI 中，错误信息页面自定义参数缺失的问题；
	4.修复在同一台机器部署多个应用时数据合并的问题；
	5.修复在极少数情况下不能通过 kill 命令结束 oneapm-daemon 的问题；
	6.修复在极少数情况下无法启动 oneapm-daemon 的问题；
	7.修复在极少数情况下可能出现的崩溃问题。
备注：
	本次发布的探针暂不支持 PHP 5.2。

*OneAPM PHP Agent 2.3.12
发布日期：2015/07/14
修复问题：
	1.修复 2.3.11 探针在极少数环境下 daemon 重启问题；
	2.修复 BTM 配置无法更新问题。
增加功能：
	1.支持 business transaction （自定义事务）功能
	2.增加对 fsockopen 接口数据的抓取功能
	3.Agent 的 log 大小限制在 30MB 左右
	4.Daemon 的 log 大小限制在 512MB 左右
	5.Daemon 上传数据使用 Deflate 压缩

*OneAPM PHP Agent 2.3.11
发布日期：2015/06/23
修复问题：
	1.修复 PHP Agent 2.3.10 安装脚本卸载命令 purge 不能用的问题。移除 purge 命令，Uninstall 命令直接完全删除。
增加功能：
	1.切换按照网站名显示服务器，默认情况下按照 hostname 命名服务器。
	2.通过设置 oneapm.usesitename=true，切换成按照 $_SERVER['HTTP_HOST'] 的值命名服务器。
	3.Web 事务参数配置功能增加对 POST 参数的支持。
新增功能：
	1.新增Business Transactions 功能，支持自定义参数拆分 Web 事务。
    2.URI 参数的”等于“匹配模式。
    3.HTTP 参数的”等于“匹配模式。
    4.Header 参数的”等于“匹配模式。

*OneAPM PHP Agent 2.3.10
发布日期：2015/06／11
修复问题：
	1.解决单一入口的问题。
增加功能：
	1.php.ini 中新增2个用于配置事务名的解决配置项，分别是 auto_transcation_args 和 auto_transcation_naming。

*OneAPM PHP Agent 2.3.9
发布日期：2015/06／2
修复问题：
	1.修复“总览 > web 事务”中 Trace 只显示 {main} 的 Bug；
	2.修复 Apdex 值不准确问题。
增加功能：
	1.新增对 NoSQL 的支持(Redis, MongoDB, Memcache, Memcached)；
	2.优化脚本安装流程。

*OneAPM PHP Agent 2.3.8
发布日期：2015/05／26
修复问题：
	1.优化 oneapm-daemon 内存占用问题，资源消耗明显下降，性能显著提升；
	2.重启 PHP 应用 oneapm-daemon 伴随启动，无需手动启动 oneapm-daemon。
增加功能：
	1.完善 php.ini 文件中的配置项。

*OneAPM PHP Agent 2.3.7
发布日期：2015/04／30
修复问题：
	1.修复 ubuntu 系统，多个 php.ini 没有正确配置的问题。

*OneAPM PHP Agent 2.3.6
发布日期：2015/04／27
修复问题：
	1.修复没有 php 扩展目录时，安装失败的问题。
增加功能：
	1.支持自动监控前端浏览器性能；
	2.安装脚本添加升级功能；
	3.在配置选项中，可配置错误报告级别。

*OneAPM PHP Agent 2.3.5
发布日期：2015/04／21
修复问题：
	1.大幅提升 PHP Agent 性能；
	2.修复 PHP2.3.1 不支持 amh4.2 和框架报错的问题；
	3.修复出现多服务器的问题。
增加功能：
	1.支持 PHP 5.2；
	2.安装脚本添加升级功能 。

*OneAPM PHP Agent 2.2.1
发布日期：2015/3/11
修复问题：
	1.解决各别用户 uri 为空的问题。
增加功能：
	1.新增支持 PostgreSQL 数据库。

*OneAPM PHP Agent 2.0.1
发布日期：2015/3/6
修复问题：
	1.解决安装探针后无法启动的 php-fpm 问题。
增加功能：
	1.新增支持PHP 5.6；
	2.新增"应用程序-监控-总览-响应时间图表"中外部事物曲线信息的功能。

*OneAPM PHP Agent 1.0.1.47
发布日期：2015/2/13
修复问题：
	1.解决 discuz 框架压测一段时间没有数据问题;
	2.解决配置文件文字提示出入问题;
	3.解决 php-daemon 自动退出问题;
	4.其他小问题的 fix。
增加功能：
	1.支持外部服务功能;
	2.支持 AMH 面板环境;
	3.支持 phpMyAdmin 环境;
	4.安装脚本修改,无需输入安装目录。