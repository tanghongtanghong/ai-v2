# Node.js Agent 兼容环境和功能列表
很多 Node 请求是基于原始 URL 的，但是 OneAPM Node.js 处理请求的方式有所不同，OneAPM Node.js 会自动将请求归类为事务而不是 http 请求。事务是通过将一个或多个路径命名定义的，这些名称用于：<br>

 - 群组参数（Group metrics）
 
 - 您应用的哪一个部分正在经历缓慢数据库的问题

## 兼容和需求
在您安装 Node.js agent 之前，请确保您的应用程序符合兼容性要求。

|资源     |   支持列表  |
| --- | --- |
| 操作系统    | Linux、SmartOS、Mac OSX 10.7 以上、Windows Server 2008<br>、Windows Azure    |
|  Node.js   | 0.8 或以上版本、我们推荐您使用 0.10 版本    |
|  框架   | Express2、Express3、Express4.x、Restify、Connect 1 和 Connect 2 <br>(不支持 router)、Hapi<br>注意：如果您在使用 Express 或者 Restify 及他们的默认路由，OneAPM<br> 的 Node.js 可以按照现有状态读取这些框架工作的路由名称。    |
|   数据库  |  Memcached、MongoDB、MySQL 0.9 and 2.0、Redis   |