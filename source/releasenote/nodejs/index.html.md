#Node.js Agent更新日志


###OneAPM Node.js V1.2.16 
####更新内容：  
1.支持thrift库  
2.修复错误率统计不正确  
3.修复错误信息中url和堆栈不匹配问题
 
***

###OneAPM Node.js V1.2.15
####更新内容：  
1.恢复了Windows下cpu的采样   
2.恢复了某种特殊情况下读取依赖导致cpu占用过高
 
***


###OneAPM Node.js V1.2.14
####更新内容：  
1.修复json包解析问题  
 
***

###OneAPM Node.js V1.2.13
####更新内容：  
1.慢事务详情页展示trace信息
 
***

###OneAPM Node.js V1.2.12
####更新内容：  
1.添加数据库追踪的慢SQL追踪  
2.慢事务详情页面展示抓取到的SQL语句  
 
***


###OneAPM Node.js V1.2.11
####更新内容：  
1.缩小oneapm安装包大小
 
***
###OneAPM Node.js V1.2.10
####更新内容：  
1.修复mysql query参数解析问题
 
***
###OneAPM Node.js V1.2.9
####更新内容：  
1.解决了与node.js4.1.1的兼容性问题
 
***
###OneAPM Node.js V1.2.8
####更新内容：  
1.增加通过npm install oneapm安装方法
 
***
###OneAPM Node.js V1.2.6
####更新内容：  
1.禁用Windows下cpu的采集
 
***
###OneAPM Node.js V1.2.5
####更新内容：  
1.支持mysql连接池  
2.Bi的慢加载可以下载Ai的慢事务
 
***
###OneAPM Node.js V1.2.4
####更新内容：  
1.支持对docker运行环境的坚持  
2.支持对mongodb若干方法的捕获  
3.修复了krakenjs兼容性问题  
4.增强了browser insight探针报错信息
 
***
###OneAPM Node.js V1.2.3
####更新内容：  
1.支持从npm.oneapm.con下载和更新探针  
2.cpu使用率上报支持Windows和macOS  
3.修复了在io.js下无法启动探针的问题
 
***

###OneAPM Node.js V1.2.2
####更新内容：  
1.错误采集支持自定义属性 
2.支持内存上报  
3.cpu使用率上报（只支持linux）  
4.改进了对nosql数据的展示（mongodb、redis、memcached）
 
***

###OneAPM Node.js V1.2.1
####更新内容：  
1.解决express中间件导致事务名中有重复路径问题 
 
***

###OneAPM Node.js V1.1.1
####更新内容：  
1.express 4.x模块化router的支持  
2.支持查看错误trace中外部请求的具体url  
3.错误率支持web和非web的分类  
 
***

###OneAPM Node.js V1.1.0
####更新内容：  
1.全新上线node js探针  
2.修复配置文件里app名称使用汉字导致agent启动失败问题   
3.支持thinkjs框架    
 
***
