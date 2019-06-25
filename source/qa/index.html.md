# 常见问题
## 1. 为什么探针部署后登录 OneAPM 看不到数据？

* 请确认网络是否通  在终端输入命令：telnet appcollector.oneapm.com 80。
* 请检查配置的 licensekey 是否正确, license_key 复制粘贴无误一般最后有个  =。
* 请检查 agent 所在的服务器的时间和时区，是否为北京时间。
* 探针回传数据周期是 1min 可以稍等一下刷新看看。
* 应用有没有访问。
* 确定重启了应用。

## 2. 请问 Ai 产品支持哪些环境下部署？

<ul>
      <li><a href="/agent/java/javaSupport_help.html">Java 兼容环境支持</a></li>
      <li><a href="/agent/php/phpSupport_help.html">PHP 兼容环境支持</a></li>
      <li><a href="/agent/net/netSupport_help.html">.NET 兼容环境支持</a></li>
       <li><a href="/agent/python/PythonSupport_help.html">Python 兼容环境支持</a></li>
       <li><a href="/agent/nodejs/NodejsSupport_help.html">Node.js 兼容环境支持</a></li>
       <li><a href="/agent/ruby/RubySupport_help.html">Ruby 兼容环境支持</a></li>
</ul>

## 3. 如何通过 Ai 自动开启浏览器（Bi）监控？

部署好 Ai 探针后可以在“应用设置”界面勾选“是否启用浏览器监控？”，然后重启 Ai 应用，对应的页面有访问量后，过几分钟则可以在 Bi 应用界面看到数据。

## 4. 如何升级探针版本？
<ul>
      <li><a href="/agent/java/updateAgent.html">Java Agent 更新</a></li>
      <li><a href="/agent/php/phpupdate.html">PHP Agent 更新</a></li>
      <li><a href="/agent/net/netupdate.html">.NET Agent 更新</a></li>
       <li><a href="/agent/python/PythonAgentupdate.html">Python Agent 更新</a></li>
      <li><a href="/agent/nodejs/Nodejsupdate.html">Node.js Agent 更新</a></li>
       <li><a href="/agent/ruby/Rubyupdate.html">Ruby Agent 更新</a></li>
</ul>

## 5. 如何修改应用名称？
* 方法一：在配置文件里修改应用名称，例如 python 探针在 blueware.ini 里修改 app_name=应用名，php 探针在 php.ini 里修改 oneapm.appname=应用名

* 方法二：应用程序列表处直接修改应用名称
   ![](/images/rename01.png)  
   ![](/images/rename02.png)
* 方法三：设置－应用设置里修改应用名称
   ![](/images/rename03.png) 

## 6. 如何收集探针的日志？
探针配置文件中 log\_file 文件打开， log_level 设置成 debug 模式，再重新生成 log 文件  

## 7. 如何开启或关闭snapshot功能？
探针配置文件中将auto_profiler.enable修改为true, 然后重启应用，即可使用snapshot功能。如您想关闭snapshot功能，将auto_profiler.enable参数修改为false，重启应用即生效。（注：snapshot功能在100TPS下使用较好）
   
  ![](/images/snapshot.png)




 
