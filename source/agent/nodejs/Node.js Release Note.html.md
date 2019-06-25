#Node.js Release Note
OneAPM 管理员 发表于 2015年06月09日 15:26 最后修改于 2015年12月22日 14:31 
如何更新最新的 Node.js Agent ？请查看 Node.js Agent 更新方法

*OneAPM Node.js Agent 1.2.16
发布日期：2015/12/22
新增功能：
	1.对 thrift 库的支持。
修复问题：
	2.错误率统计不正确的 bug；
	3.错误信息中，URL 和错误堆栈不匹配的 bug。

*OneAPM Node.js Agent 1.2.15
发布日期：2015/12/9
修复问题：
	1.恢复了 Windows 下 CPU 的采样
	2.恢复了某种特殊情况下读取依赖导致 CPU 占用过高的 Bug。

*OneAPM Node.js Agent 1.2.14
发布日期：2015/11/13
修复问题：
	1.修复了一个 JSON 包解析问题，该问题可能导致潜在错误。

*OneAPM Node.js Agent 1.2.13
发布日期：2015/11/9
新增功能：
	1.慢事务详情页展示 trace 信息。

*OneAPM Node.js Agent 1.2.12
发布日期：2015/11/3 

新增功能：
	1.添加数据库追踪的慢 SQL 追踪；
	2.慢事务详情页面展示抓取到的 SQL 语句。

*OneAPM Node.js Agent 1.2.11
发布日期：2015/10/26 
改进功能：
	1.缩小了 OneAPM 安装包的大少。

*OneAPM Node.js Agent 1.2.10
发布日期：2015/10/26 
修复问题：
	1.修复了 MySQL Query 参数解析的问题。

*OneAPM Node.js Agent 1.2.9
发布日期：2015/10/10
修复问题：
	1.解决了与 Node.js 4.1.1 的兼容性问题。

*OneAPM Node.js Agent 1.2.8
发布日期：2015/9/10
新增功能：
	1.增加通过 npm install oneapm 安装方法。

*OneAPM Node.js Agent 1.2.6
发布日期：2015/9/9
修复问题：
	1.禁用 Windows 下 CPU 的采集。

*OneAPM Node.js Agent 1.2.5
发布日期：2015/8/26
新增功能：
	1.对 MySQL 连接池的支持
修复问题：
	1.Bi 的慢加载可以下钻到 Ai 的慢事务

*OneAPM Node.js Agent 1.2.4
发布日期：2015/7/23
新增功能：
	1.对 Docker 运行环境的检测
	2.对 MongoDB 若干方法的捕获
修复问题：
	1.修复了 KrakenJS 兼容性问题
	2.增强了 Browser Insight 探针报错信息

*OneAPM Node.js Agent 1.2.3
发布日期：2015/6/15
新增功能：
	1.支持从 npm.oneapm.com 下载和更新探针；
	2.CPU 使用率上报支持 Windows 和 MacOS。
修复问题：
	1.修复了在 io.js 下无法启动探针的问题。
	
*OneAPM Node.js Agent 1.2.2
发布日期：2015/6/15
新增功能：
	1.错误采集支持自定义属性；
	2.内存上报；
		CPU 使用率上报 ( 只支持 Linux )；
		改进了对 NOSQL 数据的展示 (MongoDB, Redis, Memcached)。

*OneAPM Node.js Agent 1.2.1
发布日期：2015/4/22
修复问题：
	1.Express 中间件导致事务名中有重复路径。

*OneAPM Node.js Agent 1.1.1
发布日期：2015/4/7
修复问题：
	1.Express 4.x 模块化 Router 的支持。
增加功能：
	1.可以查看 Trace 中的外部请求的具体 URL。
	2.错误率支持 Web 和非 Web 的分类。

*OneAPM Node.js Agent 1.1.0
发布日期：2015/2/13
修复问题：
	1.修复配置文件里面 App 名称使用汉字，Agent 启动失败的问题。
增加功能：
	1.新增 ThinkJS 框架支持。