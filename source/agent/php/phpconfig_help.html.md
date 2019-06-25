# PHP Agent 参数配置

**PHP Agent 参数配置**

* OneAPM PHP Agent 从 oneapm.cfg 和 php.ini 两个配置文件中获取配置信息。您可以在本文中了解各个参数的意义，以及对应的配置方式。

* 你可以在这些位置找到该配置文件：

```
oneapm.cfg 的位置：/etc/oneapm/oneapm.cfg

php.ini 的位置: 自定义路径

oneapm.cfg 配置文件

```

#### 打开配置文件
![](/images/php01.png)


<br>

###  logfile

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">var/log/oneapm/oneapm-daemon.log</td>
</tr>
<tr>
<td width="200">生效方式</td>
<td width="200">重启 daemon</td>
</tr>
<tr>
<td width="200">参数类型</td>
<td width="200">String</td>
</tr>
<tr>
<td width="200">参数说明</td>
<td width="200">log 文件所在路径</td>
</tr>
</table>

<br>

### loglevel

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">info</td>
</tr>
<tr>
<td width="200">生效方式</td>
<td width="200">重启 daemon</td>
</tr>
<tr>
<td width="200">参数类型</td>
<td width="200">String</td>
</tr>
<tr>
<td width="200">参数说明</td>
<td width="200">deamon 程序的日志输出级别，可选值 （error、warning、info、debug、verbosedebug）</td>
</tr>
</table>

<br>

### collector_host

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">tpm.oneapm.com</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启 daemon</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>指定 OneAPM daemon 与 OneAPM server 的通信地址</td>
</tr>
</table>

<br>

### port

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">80</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启 daemon</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>指定 OneAPM daemon 与 OneAPM server 的通信端口</td>
</tr>
</table>

<br>

### ssl_connect

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">0</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启 daemon</td>
</tr>
<tr>
<td>参数类型</td>
<td>Number</td>
</tr>
<tr>
<td>参数说明</td>
<td>是否开启 ssl 协议传输。默认值：0，设置为1开启</td>
</tr>
</table>

<br>

### proxy

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">null</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启 daemon</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>代理参数，有效格式为：user:password@host[:port]或者 host[:port]</td>
</tr>
</table>

<br>

* 修改 oneapm.cfg 文件后，需要重启 oneapm-daemon 进程后才能生效。

重启命令：service oneapm-daemon-service restart

<br>
<br>

php.ini 配置文件
![](/images/php02.png)


<br>

### oneapm.appname

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">your hostname</td>
</tr>
<tr>
<td>生效方式</td>
<td>1、停止 daemon  2、重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>可以根据自身需要对应用程序进行命名</td>
</tr>
</table>

<br>

### oneapm.tier_name

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">PHP_TIER</td>
</tr>
<tr>
<td>生效方式</td>
<td>1、停止 daemon  2、重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>可以根据自身需要对tier应用进行命名,不可以重复命名</td>
</tr>
</table>

<br>

### oneapm.key

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">your oneapm key</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>请输入 OneAPM PHP Agent 安装步骤中第一步生成的授权编号。License 默认为空，填写正确的 License 才能正常上传数据</td>
</tr>
</table>

<br>

### oneapm.record_sql

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">obfuscated 模糊字段，不显示数据信息</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>该参数控制抓取的 sql 字段信息。可将其设置为 raw，抓取完整的 sql 信息；也可以设置为 off，不抓取 sql 信息；设置为 obfuscated 抓取的是混淆模式的 sql，sql 中重要的数据信息不显示</td>
</tr>
</table>

<br>

### oneapm.transaction_threshold

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">0.5 s</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>Duration</td>
</tr>
<tr>
<td>参数说明</td>
<td>判断是否记录分析慢事务的阀值。超过这个值 Agent 开始记录分析慢事务的详细信息（trace）。单位：秒</td>
</tr>
</table>

<br>

### oneapm.explain_threshold

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">0.5 s</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>Duration</td>
</tr>
<tr>
<td>参数说明</td>
<td>判断是否记录分析慢 SQL 的阀值。超过这个值 Agent 开始记录分析慢 SQL 的详细信息。单位：秒</td>
</tr>
</table>

<br>

### oneapm.errorlevel

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">ERROR</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>配置错误信息中记录的 PHP 错误级别，可选项（NOTICE， WARNING， ERROR， CLOSE）</td>
</tr>
</table>

<br>

### oneapm.loglevel

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">WARN</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>探针的日志输出级别。可选值（ERROR， WARN， INFO， TRACE， DEBUG ）</td>
</tr>
</table>

<br>

### oneapm.auto\_transaction_get

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">空</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>设置用 get 参数传递的事务名称，比如 URL 为 http://url/index.php?s=/home/index/index.html，如果设置此配置项的值为"s"，则 Web 事务名就会变成 WebTransaction/Uri/home/index/index.html，而不是默认的 WebTransaction/Uri/home/index/index.html</td>
</tr>
</table>

<br>

### oneapm.auto\_transaction_post

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">空</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>设置用 post 参数传递事务名称，例如 URL 为 http：//url/index.PHP，post 表单参数 name=admin， password=zabbix，设置 oneapm.auto\_transaction_post = name，事务名称就更改为：WebTransaction/Uri/admin，默认事务名称是：WebTransaction/Uri/index.php</td>
</tr>
</table>

<br>

### oneapm.auto\_transaction_naming

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">true</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>是否抓取单一入口框架。默认抓取</td>
</tr>
</table>

<br>

### oneapm.usesitename

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">false</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>设置用 $\_SERVER[‘HTTP_HOST’] 变量值来命名实例，而不是默认的 hostname 来命名。适用于多个子域名的情景。可选值（true）</td>
</tr>
</table>

<br>

### oneapm.http\_capture_params

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">true</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>设置是否捕捉 get 和 post 参数。可选值（false）</td>
</tr>
</table>

<br>

### oneapm.is_pathinfo

<table>
<tr >
<td width="200">默认值</td>
<td width="200">false</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>是否启用 pathinfo 模式，如果开启，PHP 探针抓取的事务展示模式是：http：//www.xxx.com/index.PHP/key1/key2/key3，如果不开启，PHP 探针抓取的事务展示模式是：http：//www.xxx.com/index.php</td>
</tr>
</table>

<br>

### oneapm.num_pathinfo

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">0</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>Number</td>
</tr>
<tr>
<td>参数说明</td>
<td>抓取的 pathinfo 展示个数，只有在 oneapm.is\_pathinfo 设置为 true 时有效，设置 oneapm.num_pathinfo=0，抓取的 http：//www.xxx.com/index.PHP/key1/key2/key3 后面参数个数不限，例如设置为1，抓取的 web 事务展示为：http：//www.xxx.com/index.PHP/key1 </td>
</tr>
</table>

<br>

### oneapm.browser_monitoring

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">false</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>是否开启自动注入 Bi Agent 脚本，默认值： false，设置为 true 开启 </td>
</tr>
</table>

<br>

### oneapm.browser\_monitoring.is\_js_text

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">false</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>切换 Bi Agent 脚本注入方式，url 注入加载链接；text 注入脚本内容，默认值：false；可选值 url，text</td>
</tr>
</table>

<br>

### oneapm.browser_monitoring.request.ip

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">all</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>在开启插码功能下，对指定 ip 进行插码。对用户 IP 过滤（即浏览器端IP），默认值：是 all，表示对所有用户 IP 插码。如果只允许对特定 IP 请求进行插码，则配置用户 IP 即可，多个 IP 之间用英文逗号进行分割</td>
</tr>
</table>

* ex：只对 10.0.0.1 和 10.0.0.2 用户进行插码，则配置为：browser_monitoring.request.ip = 10.0.0.1，10.0.0.2

<br>

### oneapm.browser_monitoring.request.url

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">all</td>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>在开启插码功能下，对指定 url 进行插码。对请求的 url 进行过滤，默认值：是all，表示对所有 url 插码。如果对特定请求进行插码，配置其 url 即可</td>
</tr>
</table>

* ex：对 http://www.example.com/index.php 请求进行插码，则配置为：browser_monitoring.request.url = http://www.example.com/index.php


<br>

### oneapm.browser_monitoring.request.param

<table width="400">
<tr>
<td width="200">默认值</td>
<td width="200">all</td>
</tr>
<tr>
<td>生效方式</td>
<td>重启应用服务器</td>
</tr>
<tr>
<td>参数类型</td>
<td>String</td>
</tr>
<tr>
<td>参数说明</td>
<td>在开启插码功能下，对指定请求参数进行插码。对请求的参数进行过滤，默认是 all，表示对所有参数插码。参数配置格式是： 参数名:参数值 ，多个参数用英文逗号分隔开。对参数顺序没有要求，满足 POST、GET 请求，一般结合 browser_monitoring.request.url 进行使用</td>
</tr>
</table>

* ex：只对http://www.example.com/index.php?service=login&name=bob 进行插码，则配置如下

  * browser_monitoring.request.url =  http://www.example.com/index.php

  * browser_monitoring.request.param = service:login，name:bob

* ex2：对http://www.example.com/forum.php?mod=forumdisplay&fid=2&page=1

  * browser\_monitoring.request.param = page:1，mod:forumdisplay，fid:2 顺序不同，可以插码
  * browser\_monitoring.request.param = mod:forumdisplay，fid:2 配置参数少于实际参数，可以插码
  * browser\_monitoring.request.param = mod:forumdisplay，fid:2，page:1，uid:6 配置参数多于实际参数，被过滤，不能插码

```
Qi
<br>
备注：以下参数的优先级顺序为（按从高到低排列）
```
    btm

    oneapm.usesitename

    oneapm.auto_transaction_naming

    oneapm.auto_transaction_get

    oneapm.auto_transaction_post

    oneapm.is_pathinfo

    default

<br>

修改 php.ini 文件后，需要重启 PHP 服务器（例如 Apache、PHP-FPM）才能生效。
