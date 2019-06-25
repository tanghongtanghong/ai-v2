# .NET Agent 参数配置

* OneAPM .NET Agent 从 oneapm.config 配置文件中获取配置信息。你可以在这些位置找到该配置文件：
Agent 版本为 .NET Agent v1.2.0.0及以上：

* 开始菜单\所有程序\OneAPM\.Net.Agent\OneAPM.config

![](/images/net01.png)

* OneAPM Agent 安装后的目录：

```
Default： %ALLUSERSPROFILE%\OneAPM\.NET Agent
Windows 2003 only： %ALLUSEQinRSPROFILE%\Application Data\OneAPM\.NET.Agent
```
**注：** %ALLUSERSPROFILE% 是指列出所有用户 Profile 文件位置。
 * * * * *
## 探针生效配置

```
<configuration xmlns="urn:blueware-config" agentEnabled="true" apdex_t="0.5" identifierFormat="{AppPoolAndPath}_{ShortAppId}">
```
### agentEnabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   |   true &#124; false  |
| 参数说明    | 设置为 true 将启用 OneAPM Agent，设置为 false 将停用 OneAPM Agent。    |

### apdex_t
|默认值     |  0.5 |
| :--- | :--- |
|  生效方式  | 首次生效    |
| 参数说明    | 用户体验满意度。apdex\_f（即 4 倍 apdex_t）以上时间为不可容忍时间。如默认 0.5<br>即请求响应时间小于 0.5s 时为满意，0.5s~2s 为可容忍，2s 以上为不可容忍。|

### eventPublishAsync
|默认值     |  true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数  | true &#124; false    |
| 参数说明    | 当Transaction开始/结束/改名等发生时，若此值为 true则启动一个新线程<br>处理，为 false 则在本线程处理。|




### identifierFormat
|默认值     |  {AppPath} |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   |   [ {AppPoolAndPath}_{ShortAppId} &#124; {AppPath} ] |
| 参数说明    | 设置为 {AppPoolAndPath}\_{ShortAppId} 则实例名为应用程序池名<br>称\_应用名\_应用程序池 ID（如应用池名和应用名一致，则为应用名_应用<br>程序池 ID），设置为 {AppPath} 则实例名为应用名。  |
 * * * * *

##连接服务器配置

```
<service ssl="false" host="tpm.oneapm.com" port="80" licenseKey="OneAPM 提供的 LICENSE"/>
```
### ssl
|默认值     |  false |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   |  true &#124; false |
| 参数说明    | 设置为 true，指定 OneAPM Agent 使用 HTTPS 与 OneAPM <br>Server 加密通信，设置为 false 则采用 HTTP 方式通信。|

### host
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   |  [ IP地址 &#124; 域名 ] |
| 参数说明    | 指定 OneAPM agent 与 OneAPM server 的通信地址。|

### port
|默认值     |  80 |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   |  TCP 端口|
| 参数说明    | 指定 OneAPM Agent 与 OneAPM server 的通信端口。|

### licenseKey
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   |  OneAPM 提供的 license 许可|
| 参数说明    | 配置正确的 License 许可后，OneAPM Agent 将与 OneAPM <br>server 通信，使得 OneAPM 探针正常工作。|
 * * * * *

## 配置代理服务器（可选）
```
<proxy host="hostname"  port="81"  domain="mydomain.com"  user="oneapm"  password="xyz"/>
```
使用代理服务器上网时，需要配置 Proxy 节点。它是 Service 节点的子节点。
### host
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   |  IP 地址|
| 参数说明    | 代理服务器 IP|

### port
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   | 端口|
| 参数说明    | 代理服务器通信端口|

### domain
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   | 域名|
| 参数说明    | 代理服务器域名|

### user
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   | 用户名|
| 参数说明    | 代理服务器用户名|

### password
|生效方式     |  重新加载 Agent |
| :--- | :--- |
|  可选参数   | 密码|
| 参数说明    | 代理服务器密码|
 * * * * *

## 配置IIS站点显示名称
```
<application appName="MyApplication" enableAutoAppNaming="false">
  <name>MyTier</name>
</application>
```
### enableAutoAppNaming
|默认值     |  false |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   |  true &#124; false|
| 参数说明    | 设置为 false，按指定应用名称显示站点；设置为 true，以站点<br>所在 IIS 应用程序池名称作为应用程序显示。|

### name
|默认值     |  My Application |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
| 参数说明    | 初始化应用程序名称，当中间件部署多个应用时，OneAPM Agent <br>将所有应用程序数据统一记录到初始化应用程序中。|
 * * * * *
## 配置Non-IIS站点名称（可选）
```
<instrumentation>
  <applications>
    <application name="NonIIS_App1" />
    <application name="NonIIS_App2" />  
  </applications>
</instrumentation>
```
### application name
| 生效方式    |  重新加载 Agent |
| :--- | :--- |
| 参数说明    | 应用名称设置为要监控的 Non-IIS 应用名即可进行监控。|

## analytic_data开关配置
```
<analyticsEvents enabled="true"><transactions enabled="true"/></analyticsEvents>
```
### analyticsEvents enabled
| 默认值    |  true |
| :--- | :--- |
| 生效方式   | 重新加载 Agent|
| 参数类型  | true &#124; false|
| 参数说明  | 开启后可在对应AI4.0.x版本总览、业务中看见系统所有业务访问信息，拓扑图更为详细。|

### transactions enabled
| 默认值    |  true |
| :--- | :--- |
| 生效方式   | 重新加载 Agent|
| 参数类型  | true &#124; false|
| 参数说明  | 参数用于控制是否启用请求 HTTP 参数过滤的功能。|
 * * * * *
## 日志状态及大小配置
```
<log level="off" singleFileSize="50000000"/>
```
### log level
|默认值     |  off |
| :--- | :--- |
|  生效方式  | 立即生效    |
|  参数类型   |  ［off &#124;fatal &#124; error &#124;warn &#124;trace &#124;debug &#124; info &#124; finest（all）］|
| 参数说明    | 设置非 off 值将记录 OneAPM Agent 的工作日志，当您需要进行故障分析时，<br>参数级别决定日志的细度。|

### 日志输出级别
| off   | 关闭 |   |
| :--- | :--- |:--- |
| fatal   | 严重 | fatal |
| error   | 错误 | fatal＋error |
| warn   | 警告 | fatal＋error＋warn |
| trace   | 粗粒度调试 | fatal＋error＋warn＋trace |
| debug   | 调试 |  fatal＋error＋warn＋trace＋debug |
| info   | 信息 | fatal＋error＋warn＋trace＋debug＋info |
| finest（all）   | 最好 | fatal＋error＋warn＋trace＋debug＋info+finest（all） |

### singleFileSize（可选）
|默认值     | 50000000 |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   |  任意正整数 |
| 参数说明    | 设置任意正整数定义单个 log 文件大小，单位为 Byte。默认 log 件大小为 50MB，<br>建议至少设置为 10 000 000。|
 * * * * *
## 配置请求参数
```
<requestParameters enabled="false">   
  <ignore>credit_card</ignore>
</requestParameters>
```
### requestParameters enabled
|默认值     | false |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   |  [ true &#124; false ] |
| 参数说明    | 参数用于控制是否启用请求 HTTP 参数过滤的功能。|

### ignore
| 生效方式   | 重新加载 Agent |
| :--- | :--- |
| 参数说明    | 过滤业务 HTTP 请求参数，例：credit_card，多个参数以逗号分隔。|
 * * * * *
## 追踪阈值配置
```
<transactionTracer enabled="true" transactionThreshold="apdex_f" stackTraceThreshold="500" recordSql="obfuscated" explainEnabled="true" explainThreshold="500" />
```
### transactionTracer enabled
|默认值     | true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   |  [ true  &#124; false ] |
| 参数说明    | 参数为 transaction tracer 的子参数，用于控制是否启用 transaction tracer 功能。|

### transactionThreshold
|默认值     | apdex_f |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数说明   | 当事务执行时间超过该值时，事务将生成 Trace。该参数以秒为单位可以设置整数<br>或浮点数。 |
| 注意   | 参数为 apdex\_f 时，OneAPM 将使用 apdex_t 的 4 倍参数值。|

### stackTraceThreshold
|默认值     | 500 |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
| 参数说明    | 参数以毫秒为单位，当 Web 事务或 SQL 响应时间超过该值时，<br>OneAPM 将收集并展示相应 stackTrace。|

### recordSql
|默认值     | obfuscated |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   | [ off &#124; raw &#124; obfuscated ]|
|  参数说明   | 当启用 transaction_tracer 功能时，该参数标记 SQL 记录的模式，<br>off 为不记录 SQL，raw 为不进行处理并记录原始的 SQL 语句，<br>obfuscated 为经过处理的 SQL 语句，加密显示语句的字符串或数字参数。|

### explainEnabled
|默认值     | true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数类型   |  [ true  &#124; false ] |
| 参数说明    | 设置为 true，将在 SQL 语句的 TRACE 中生成缓慢 SQL 语句的执行计划。|

### explainThreshold
|默认值     | 500 |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
| 参数说明    | 参数以毫秒为单位，当 explain_enabled 为 true 时，<br>OneAPM agent 捕捉 SQL 执行时间超过该值的 SQL 并生成执行计划。|
 * * * * *
## 跨应用调用配置
```
<crossApplicationTracer enabled="true" />
```
### crossApplicationTracer enabled
| 功能说明    | 跨越应用程序记录外部调用次数与响应时间。 |
| :--- | :--- |
|  默认值     | true |
|  生效方式  | 重新加载 Agent    |
|  可选参数   |  [ true  &#124; false ] |
|  参数说明    | 设置为 true，将记录跨越应用程序记录外部调用次数与响应时间。|
 * * * * *
## 错误收集功能配置
```
<errorCollector enabled="true" exceptionEnhancer="Inline">
  <ignoreErrors>
    <exception>System.IO.FileNotFoundException</exception>  
    <exception>System.Threading.ThreadAbortException</exception>   
  </ignoreErrors>
  <ignoreStatusCodes>
    <code>401</code>
    <code>404</code>
  </ignoreStatusCodes>
</errorCollector>
```
### errorCollector enabled
|默认值     | true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   |  [ true  &#124; false ] |
| 参数说明    | 参数为用于控制是否启用 error 收集功能。|

### exceptionEnhancer（可选）
|默认值     | Inline |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   |  [ Inline &#124; Head &#124; Origin ] |
|  参数说明    | 设置参数可丰富异常信息的信息量，会显示出异常的函数中相关的两条<br>il 代码。Inline 表示每一行都显示 il，Head 表示只在头部显示，Origin 表示不显示。|

### ignoreErrors
|默认值     | System.IO.FileNotFoundException，<br>System.Threading.ThreadAbortException |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  参数说明    | 当启用 error 收集功能后，该参数用于忽略指定业务代码中<br>类引发的错误信息。多个类名称以 `<exception></exception>`分隔。|

### ignoreStatusCodes
|默认值     | 401，404 |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   | 错误代码 |
|  参数说明    | 该参数用于忽略指定业务 HTTP 的错误代码，多个代码以`<code></code>`<br>分隔，例如 404，505|
 * * * * *
## 浏览器监控配置
```
<browserMonitoring autoInstrument="false" sslForHttp="false" isJsText="false" byteMode="true">
  <request>
    <ip>all</ip>
    <url>all</url>
    <params>all</params>
  </request>
</browserMonitoring>
```
### autoInstrument
|默认值     | false |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   | [ true &#124; false ] |
|  参数说明    | 启用真实用户体验，OneAPM Agent 能够记录用户浏览器下载和加载应用系统<br>的时间。设置为 true，OneAPM Agent 自动在 ASP 中插入 API 指令，注入<br>JavaScript 语句进行监控。|

### isJsText
|默认值     | false |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   | [ true &#124; false ] |
|  参数说明   | 参数为 browser_monitoring 的子参数，用于控制是否启用监控 JavaScript 功能。|


### sslForHttp
|默认值     | false |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   | [ true &#124; false ] |
|  参数说明   | 设置为 true，指定 OneAPM Agent 使用 HTTPS 与 OneAPM Server <br>加密通信，设置为 false 则采用 HTTP 方式通信。|

### byteMode
|默认值     | true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   | [ true &#124; false ] |
|  参数说明   | 设置为 true，浏览器监控会采用字节流方式插入探针；设置为 false，则采用字符流方式。|

### ip
|生效方式     | 重新加载 Agent |
| :--- | :--- |
|  参数说明   | 浏览器自动插码过滤 ip 校验，autoInstument 设置为 true 才能生效。<br>不设置或设置为空或设置为 all，关闭 ip 校验，对所有页面都进行 js 插码；<br>设置为具体 ip，对指定 ip 的页面进行插码。|

### url
|生效方式     | 重新加载 Agent |
| :--- | :--- |
|  参数说明   | 浏览器自动插码过滤 url 校验，autoInstument 设置为 true 才能生效。不设置<br>或设置为空或设置为 all，关闭 url 校验，对所有页面都进行 js 插码；设置为具体 url，<br>对包含指定 url 的页面进行插码。|

### params
|生效方式     | 重新加载 Agent |
| :--- | :--- |
|  参数说明   | 浏览器自动插码过滤 params 参数校验，autoInstument 设置为 true 才能生效。<br>不设置或设置为空或设置为 all，关闭 params 校验，对所有页面都进行 js 插码。<br>设置为具体 params，对包含指定参数的页面进行插码。|
* * * * *
## 应用程序池监控配置（可选）
```
<applicationPools>
   <defaultBehavior instrument="true"/>
   <applicationPool name="appPoolName1" instrument="false"/>
   <applicationPool name="appPoolName1" instrument="false"/>
</applicationPools>
```
### defaultBehavior instrument
|默认值     | true |
| :--- | :--- |
|  生效方式  | 重新加载 Agent    |
|  可选参数   | [ true &#124; false ] |
|  参数说明   | 设置为 true，对所有应用开启探针监控。设置为 false，对所有应用<br>关闭探针监控。需与 applicationPool 配合使用。|

### applicationPool
|生效方式     | 重新加载 Agent  |
| :--- | :--- |
|  可选参数   | [ true &#124; false ] |
|  参数说明   | name 配置为应用程序池名称，defaultBehavior 设置为 true 时本参数应为 false，<br>用于关闭指定应用程序池的监控。反之则为开启指定应用程序池的监控。|
* * * * *
## 忽略assembly配置
```
<assembles>
 <ignore name="PllC.Comm.Trace"/>
 <ignore name="PllC.Runtime.Protect"/>
 <ignore name="PllC.Runtime.Protect64"/>
</assembles>
```
### assembles
|生效方式     | 重新加载 Agent  |
| :--- | :--- |
|  参数说明   | 忽略某些 assembly 的配置，用户可以自己配置和添加忽略这些加密的 assembly 。|  
