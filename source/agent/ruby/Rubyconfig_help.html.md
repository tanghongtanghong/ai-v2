# Ruby Agent 参数说明
OneAPM Ruby Agent 从 oneapm.yml 配置文件中获取配置信息。您可以在本文中了解各个参数的意义，以及对应的配置方式。
## License_key

|默认值     |  这里请输入第二步生成的License Key   |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  String   |
|  可选参数   |   OneAPM 提供的 License Key  |
| 参数说明    | 请填写 OneAPM  安装步骤提供 License Key。配置正确 <br>的 License Key后，OneAPM agent 将与 OneAPM server <br>通信，使得 OneAPM agent 正常工作。    |
## agent_enabled（适用于Ruby/Rails）
|默认值     |  auto |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  Boolean|
|  可选参数   |   auto or true or false  |
| 参数说明    | 设置为 auto，由 OneAPM agent 自动判断是否启动，OneAPM<br> agent 设置为 true 将启用 OneAPM agent，设置为 false 将停用<br> OneAPM agent。    |
## app_name
|默认值     | MyApplication|
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  String|
| 参数说明    | 这个名称是在登录到 oneapm.com 中所看到的应用程序名称。<br>注意：如果修改了这个名称，一个新命名的应用会出现在 OneAPM<br>的界面里，并且旧名称的应用下将看不到新数据。    |
## monitor_mode
|默认值     |  true |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  Boolean|
|  可选参数   |  true or false  |
| 参数说明    | 设置为 true，这个 agent 会收集应用的性能数据并上传到<br>oneapm.com 上的 OneAPM 服务。每个环境下这个全局开<br>关都可以被 true 覆盖。（以前称为：enable)   |
## log_level
|默认值     |  info |
| :--- | :--- |
|   生效方式  | 立即生效    |
| 参数类型    |  String|
|  可选参数   | debug or info or warn or error or fatal  |
| 参数说明    | 将记录 OneAPM agent 的工作日志，当您需要进行<br>故障分析时，参数级别决定日志的细度。  |
## 日志输出级别

|   类型  |  无日志   | 范围    |
| :--- | :--- | :--- |
|  fatal   |  严重   |   fatal  |
| error    |  错误   |   fatal + error  |
| warn    | 警告    |   fatal + error + warn  |
|  info   |  正常   |   fatal + error + warn + info  |
|   debug  | 调试    |  fatal + error + warn + info + debug   |
## log _ file _ name
|默认值     |  oneapm_agent.log |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  String|
| 参数说明    | 指定 OneAPM agent 日志输出的名称。  |
## log _ file _ path
|默认值     |  tmp/ |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  String|
| 参数说明    | 指定 OneAPM agent 日志位置。  |
## ssl
|默认值     |  true |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  Boolean|
|  可选参数   |  true or false  |
| 参数说明    | 设置为 true，指定 OneAPM agent 使用 HTTPS <br>与 OneAPM Server 加密通信，设置为 false 则采用 <br>HTTP 方式通信。   |
## proxy_host
|   生效方式  | 重启应用服务器    |
| :--- | :--- |
| 参数类型    |  String |
|  可选参数   | IP 地址 or 域名  |
| 参数说明    | OneAPM agent 使用代理与 OneAPM server <br>通信时配置指定代理的主机地址。   |
## proxy_port
|   生效方式  | 重启应用服务器    |
| :--- | :--- |
| 参数类型    |  String |
| 参数说明    | OneAPM agent 使用代理与 OneAPM server <br>通信时配置指定代理的主机端口。   |
## proxy_user
|   生效方式  | 重启应用服务器    |
| :--- | :--- |
| 参数类型    |  String |
| 参数说明    | OneAPM agent 使用代理与 OneAPM server <br>通信时配置指定代理的用户名。   |
## proxy_password
|   生效方式  | 重启应用服务器    |
| :--- | :--- |
| 参数类型    |  String |
| 参数说明    | OneAPM agent 使用代理与 OneAPM server <br>通信时配置指定代理的密码。   |
## capture_params
|默认值     | false |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  Boolean|
|  可选参数   |  true or false  |
| 参数说明    | 告诉事务追踪器及错误收集器是否捕捉 HTTP 参数，<br>设置为 true，框架被捕捉时并不包括 HTTP 的参数，<br>设置为 false 将忽略 HTTP 参数。对于 Rails，RoR 的<br>`filter_parameter_logging`可设置过滤参数，会影响<br>HTTP 参数的捕获结果   |
## transaction_tracer

功能说明:深度捕捉缓慢事务，每分钟将数据发送至 OneAPM server，包括事务中包含的 SQL 语句信息。  |

## transaction_tracer.enabled
|默认值     |  true |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  Boolean|
|  可选参数   |  true or false  |
| 参数说明    | 慢 Web 事务。参数为 transaction\_tracer 的子参数<br>，用于控制是否启用 transaction_tracer 功能。   |
## transaction _ tracer.transaction _ threshold
|默认值     |  apdex_f |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  String (Float)|
| 参数说明   |  慢 Web 事务。当事务执行时间超过该值时，事务将<br>生成 Trace。该参数以秒为单位可以设置整数或浮点数。 |
| 注意    | 参数为 apdex\_f 时，OneAPM 将使用 apdex_t 的 4 倍参数值。   |
## transaction _ tracer.record _ sql
|默认值     |  obfuscated |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  String|
|  可选参数   |  off or raw or obfuscated  |
| 参数说明    | 当启用 transaction_tracer 功能时，该参数标记 SQL<br> 记录的模式，off 为不记录 SQL，raw 为不进行处理并<br>记录原始的 SQL 语句，obfuscated 为经过处理的 SQL<br> 语句，加密显示语句的 String 串或数字参数。   |
## transaction _ tracer.stack _ trace _ threshold
|默认值     |  0.5 |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    |  Float|
| 参数说明    | 慢 SQL 调用。参数以秒为单位，当 SQL 响应时间超过该值<br>时，事务将生成 SQL 语句 Trace，解析运行时间较长的 SQL。   |
## transaction _ tracer.explain _ enabled
|默认值     | true |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | Boolean|
|  可选参数   | true or false   |
| 参数说明    | 设置为 true，将在 SQL 语句的 Trace 中生成缓慢 SQL<br> 语句的执行计划，仅支持 MySQL 和 PostgreSQL，使<br>用其它数据库时请设置为 false。   |
## transaction _ tracer.explain _ threshold
|默认值     |0.5 |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | Float|
| 参数说明    | 当启用 explain_enabled 功能时，OneAPM agent <br>捕捉 SQL 执行时间超过该值的 SQL 并生成执行计划。   |
## error_collector

功能说明:捕捉业务使用过程中抛出的异常信息，发送到 OneAPM 中以便查看。 

## error_collector.enabled
|默认值     | true |
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | Boolean|
|  可选参数   | true or false   |
| 参数说明    | 参数为 error\_collector 的子参数，用于控制是否启用<br> error_collector 功能。   |
## error _ collector.ignore _ errors

|默认值     | ActionController::RoutingError,Sinatra::NotFound|
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | String|
| 参数说明    | 当启用 error_collector 功能后，该参数用于忽略指定<br>业务代码中类引发的错误信息。多个类名称以逗号分隔。   |


# 配置浏览器监控

## browser_monitoring

功能说明:启用真实用户体验，OneAPM agent 能够记录用户浏览器下载和加载应用系统的时间。

## browser _ monitoring.auto _ instrument
|默认值     | true|
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | Boolean|
|  可选参数   | true or false   |
| 参数说明    | 设置为 true，OneAPM agent 自动在 Web 页面中插入监<br>控 JavaScript 代码。设置为 false 关闭这个特性。  |
## browser _ monitoring.whitelist _ ips
|生效方式     | 重启应用服务器|
| :--- | :--- |
| 参数类型    | String|
| 参数说明    | 当启用 auto_instrument 功能后，该参数用于指定 ip<br>和 ip 段的用户在 Web 页面插入监控 JavaScript 代码，<br>多个 ip 用逗号分隔。  |
## browser_monitoring.position
|默认值     |空|
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | String|
| 参数说明    | 可配置插码位置，默认情况下插码在 head 部分，<br>修改为 'footer' 则在页尾插码。  |
## redis.ignore_commands
|默认值     |[ ]|
| :--- | :--- |
|   生效方式  | 重启应用服务器    |
| 参数类型    | Array|
| 参数说明    | 设置不需要监控的 redis 指令字符串。  |
