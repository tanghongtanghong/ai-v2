# Python Release Note
OneAPM 管理员 发表于 2015年06月09日 15:28 最后修改于 2015年09月30日 13:50 
如何更新最新的 Python Agent？请查看 Python Agent 更新方法

*OneAPM Python Agent 1.0.9
发布日期：2015/9/24
增加功能：
	1.openerp(odoo) 框架支持；
	2.针对外部服务与应用间事务相关数据进行优化；
	3.浏览器插入 js 功能修改为默认插入js文件内容，如需修改为以前的插入 js 文件地址方式，可通过配置项 browser_monitoring.is_js_text 进行设定新增浏览器自动插入 js 限制，可通过配置项 browser_monitoring.request_ip 和 browser_monitoring.request_url 进行设定，单独针对某一个 IP 或 URL 访问的页面进行插码。
修复问题：
	1.解决 Tornado 4 应用通过 uwsgi 多线程方式启动时 Agent 报错的问题。

*OneAPM Python Agent 1.0.8
发布日期：2015/8/7
增加功能：
	1.Cyclone 框架支持
	2.Twisted 框架支持
修复问题：
	1.解决 Tornado 4 下的应用通过其他 wsgi 服务器（uwsgi，gunicorn 等）启动时导致 Agent 报错的问题；
	2.解决设定了关键事务的应用重启后无数据的问题。

*OneAPM Python Agent 1.0.7
发布日期：2015/6/30
增加功能：
	1.支持 Tornado-MySQL；
	2.支持自定义事务。
改进问题：
	1.解决 Tornado 4 下无法正常捕获 coroutine 报错信息；
	2.修复老版本（1.0.5）升级后无数据的问题。

*OneAPM Python Agent 1.0.6
发布日期：2015/6/12
修复问题：
    1.解决 Tornado 4 下 Agent 导致用户请求被挂起的问题

*OneAPM Python Agent 1.0.5
发布日期：2015/6/5
增加功能：
    1.支持到 Django 1.8 版本
    2.支持动态修改配置，无需重启应用，即可实现相关配置项的在线更新
	3.支持分布式事务，对于部署Agent产品的分布式应用，可在拓扑图查看应用间相互调用关系
    4.发布 pypi 私有源，可通过以下命令进行 Agent 安装（或更新）：
     pip install -i http://pypi.oneapm.com/simple --upgrade blueware
   （若使用较新版本 pip, 需添加 --trusted-host pypi.oneapm.com）
改进问题：
	1.针对 MongoDB, Redis, Memcached 的支持更加全面，并在 SaaS 端分开进行展示。  

*OneAPM Python Agent 1.0.4
发布日期：2015/3/10
增加功能：
	1.新增 Torndo 4.0+ 框架支持；
	2.新增 web.py 框架支持。
修复问题：
	1.解决 transaction trace 开始时间显示问题。

*OneAPM Python Agent 1.0.3
发布日期：2014/10/22
增加功能：
	1.新增 Torndo 2.0+ 框架支持；
修复问题：
	2.解决性能剖析数据显示问题。

*OneAPM Python Agent 1.0.2
发布日期：2014/9/12
增加功能：
	1.新增 Flask 框架支持；
	2.新增 MySQL 支持。
修复问题：
	1.解决浏览器没有数据问题；
	2.修复使用 proxy_user 和 proxy_pass 配置时界面无数据的 bug；
	3.修复 sql trace 显示错乱的问题。

*OneAPM Python Agent 1.0.1
发布日期：2014/8/8
第一版