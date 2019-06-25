# Python Agent 兼容环境和功能列表
本文主要说明 OneAPM 的 Python Agent 的兼容性，安装方法，配置。
## 兼容性和安装要求
我们支持的应用服务器和应用框架如下表所示：

|  平台类型   |    支持列表 |
| --- | --- |
|   操作系统  |   Linux、Solaris、FreeBSD、MacOS X  |
| Python 版本    |   2.6、2.7、3.3  |
|   解释器  |   CPython、PyPy  |
|    WSGI/ 中间件 |  uWSGI、mod_wsgi、FastCGI、Gevent、AJP、<br>CherryPy、Gunicorn、SCGI、Paste、Waitress、<br>Flask-Compress、WebError   |
|  Web框架   | Django、Flask、Tornado、Bottle、Pylons、<br>Pyramid、CherryPy、Web2Py|
|   Web Service  |  Django REST Framework、Django Piston、<br>Tastypie for Django、Cornice for Pyramid   |
| 模板引擎    |  Jinja2、Mako、Genshi   |
|   SQL 数据库  |   MySQL、Oracle、SQLServer、PostgreSQL  |
|  NoSQL 数据库   |  Redis、Mongodb、Memcached   |
|  分布式   |   Celery、Gearman  |
|   其他  |  Pysolr、Facepy、Dropbox、feedparser、httplib、<br>httplib2、request、thirft、urllib、urllib2、urllib3、<br>xmlrpclib   |

我们同时为一系列其他 Python 包和模块提供 Instrumentation 。Instrumentation 覆盖区域包括：数据库查询、缓存请求和外部服务请求。这些结果会自动在 web 事务宕机和缓慢事务的事务 Trace 中出现。

