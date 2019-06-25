# 安装 Node.js Agent 时常见问题及解决办法
## 一、安装 Node.js Agent 时报错 Error：connect ETIMEOUT
### 故障说明
安装 OneAPM Node.js Agent 过程中，OneAPM 提示报错，信息如下：

 ![](/images/js2.jpg)
### 故障原因

  OneAPM Node.js Agent 启动被内部网络代理服务器阻挡。
### 解决方案
  

 1.  第一步: 编辑 oneapm.js 文件，并加入代理参数项。
 
 方法 1：加入以下配置参数
 
``` undefined
proxy_host : 'http://用户名:密码@主机:端口/'
```
   方法 2：加入以下配置参数
   

``` stylus
proxy_host: '主机',
proxy_port: '端口',
proxy_user: '用户名',
proxy_pass: '密码',
```

 2. 第二步：保存并重启您的应用。

## 二、事务列表只显示 NormalizedUri/*
### 故障说明
这是 Node.js 探针对于无法获得更多信息的事务所显示的默认名字。<br>
 ![](/images/js3.jpg)

    


### 故障原因
没用使用框架或者使用了暂时不支持的框架版本。
### 解决方案
如果未使用任何框架，开发者可自己根据实际需要，重命名事务（一般不推荐直接用 URL ，因为这样会造成大量无法归类合并的事务）。具体做法是调用 OneAPM API 里的 setTransactionName 方法，并传递新的事务名。

如果使用了框架，可将框架名和版本号以及出现问题的最简代码发送给 OneAPM ，寻求技术支持。<br>
 ![](/images/js4.png)



