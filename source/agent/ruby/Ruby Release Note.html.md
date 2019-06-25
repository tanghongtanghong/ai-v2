# Ruby Release Note
OneAPM 管理员 发表于 2015年06月09日 15:38 最后修改于 2016年05月13日 11:04 
如何更新最新的 Ruby Agent？请查看 Ruby Agent 更新方法

*OneAPM Ruby Agent 1.3.6
发布日期：2016/5/13
改进功能：
    1.支持Grape0.16。
    2.更新文件。

*OneAPM Ruby Agent 1.3.5
发布日期：2016/1/28
改进功能：
   1.压缩回传数据，提高数据回传率。
 
*OneAPM Ruby Agent 1.3.4
发布日期：2016/1/4
改进功能：
   1.重构获取内存与 CPU 占用率功能，让数据更准确。

*OneAPM Ruby Agent 1.3.3
发布日期：2015/12/23
新增功能：
   1.支持 Rails 5.0.

*OneAPM Ruby Agent 1.3.2
发布日期：2015/12/18
新增功能：
   1.开发模式支持 ruby-prof 的调用堆栈展示和 graphviz 展示。

*OneAPM Ruby Agent 1.3.1
发布日期：2015/12/4
新增功能：
	1.支持Thrift
	2.可配置自动插码位置

*OneAPM Ruby Agent 1.3.0
发布日期：2015/11/30
新增功能：
	1.支持慢事务跟踪中显示MongoDB的查询.

*OneAPM Ruby Agent 1.2.9
发布日期：2015/11/20
优化功能：
	1.修复Ubuntu下内存不准确的bug

*OneAPM Ruby Agent 1.2.8
发布日期：2015/11/13
新增功能：
	1.支持监控 RabbitMQ。

*OneAPM Ruby Agent 1.2.7
发布日期：2015/11/6
优化功能：
	1.重构开发模式界面。

*OneAPM Ruby Agent 1.2.6
发布日期：2015/10/29
优化功能：
	1.修复部分用户无法获取服务器名称的问题；
	2.优化“服务器环境”中的参数列表；
    3.优化用户在不同平台的配置文件编码问题。

*OneAPM Ruby Agent 1.2.5
发布日期：2015/10/23
新增功能：
	1.支持 Mongoid 5.0。

*OneAPM Ruby Agent 1.2.4
发布日期：2015/10/10
优化功能：
	1.修复了内存数据不准确的问题。

*OneAPM Ruby Agent 1.2.3
发布日期：2015/9/30
优化功能：
	1.修复了在线修改应用配置后导致应用无数据的问题；
	2.修复了 Bi 注入时偶尔出现注入失败的问题。

*OneAPM Ruby Agent 1.2.2
发布日期：2015/9/22
优化功能：
	1.重构代码，统一了发给 APM 服务器与 JavaScript 探针的 TransactionName，实现从 Bi 到 Ai 的跳转。

*OneAPM Ruby Agent 1.2.1
发布日期：2015/9/15
新增功能：
	1.可配置 redis_ignore_commands，忽略配置列表中 Redis 命令的性能数据收集；
	2.可配置 disable_rails_middleware，默认打开，以防止 Breakdown Table 中出现大量 Middleware。
修复问题：
	1.优化跨应用的探针间性能数据的回传格式；
	2.修复 ignore_error 不生效的错误。

*OneAPM Ruby Agent 1.2.0
发布日期：2015/7/1
新增功能：
	1.支持开启开发模式。

*OneAPM Ruby Agent 1.1.3
发布日期：2015/6/18
新增功能：
	1.支持 Puma Server 2.11.*；
	2.修复对多进程 Server（如 unicorn 等）的支持问题；
	3.精简 oneapm.yml 的配置参数。

*OneAPM Ruby Agent 1.1.2
发布日期：2015/6/8
新增功能：
	1.支持 EventMachine 的 periodic 作为后台任务的监控。
修复问题：
	2.ActiveRecord 的标识统一为数据库格式显示，可显示增删改查四种类型。

*OneAPM Ruby Agent 1.1.1
发布日期：2015/6/1
修复问题：
	1.修复数据库性能数据上传不完善导致数据库吞吐量和响应时间缺失。

*OneAPM Ruby Agent 1.1.0
发布日期：2015/6/1
修复问题：
	1.修复CPU性能数据在某些情况下会出现负值；
	2.修复在某些情况下无法检测到 Thin Server；
	3.性能提升。
增加功能：
	1.支持 Mongoid-Moped、redis、memcache 的数据抓取；
	2.支持在线修改探针配置；
	3.支持 Goliath 自动注入；
	4.支持 rubygems.org 安装探针。

*OneAPM Ruby Agent 1.0.1
发布日期：2015/4/14
增加功能：
	1.解决同时使用 NewRelic 探针引发的冲突问题；
	2.支持 Rack 1.3 & 1.6；
	3.支持 ActiveRecord 4.0.11 & 4.2.0。

