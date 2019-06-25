# Go Agent 安装配置
注意：不同版本探针blueware-agent.ini中配置项不完全相同。以下格式仅供手动配置参考，根据需求按后面各项配置项说明进行配置即可。

##Agent参数说明 

**连接服务器配置**  
license_key = *** REPLACE ME ***  
collector_host = 127.0.0.1  
collector_port = 5888  
ssl = false  

**collector_host**

|默认值|127.0.0.1 
|:---|:--- 
|生效方式|重启应用  
|可选参数|IP地址和域名   
|参数说明|指定 OneAPM Go-agent 与 Go-collector的通信地址，默认为本机地址。如Go-collector部署在其他机器请修改该地址为对应服务器地址。

**collector_port**  

|默认值|5888    
|:---|:--
|生效方式|重启应用  
|参数类型|TCP端口  
|参数说明|指定OneAPM Go-agent与Go-collector的通信端口。注意与blueware-collector.ini文件中对应参数保持一致。

**license_key**
  
|生效方式|重启应用 
|:---|:--
|可选参数|OneAPM 提供的 license 许可 
|参数说明|配置正确的 License 许可后，OneAPM Go-collector 将与 OneAPM server 通信，使得 OneAPM 探针正常工作

**ssl** 
 
|默认值|false 
|:---|:--
|生效方式|重启应用 
|可选参数|true或false  
|参数说明|设置为 true，指定 OneAPM Go-collector使用 HTTPS 与OneAPM Server加密通信，另需要将collector_port设为443 。设置为 false 则采用 HTTP 方式通信。

##应用名称配置
app_name = Example App  
tier_name = Example Tier

**app_name**  
 
|默认值|Example App    
|:---|:-- 
|生效方式|重启应用   
|参数说明|可以根据自己的需要对应用程序进行命名。描述一整套应用运行环境的逻辑概念，包括多个服务端，多个存储，组件等，例如OneAPM SaaS 环境，包含用户系统，AI，BI，MI，Redis，Kafka等。|

**tier_name**  
 
|默认值|Example Tier    
|:---|:-- 
|生效方式|重启应用   
|参数说明|可以根据自己的需要对应用程序进行命名。处理相同业务的一个集群

###日志状态及位置配置

log_file = /tmp/go_agent.log  
log_level = debug

**log_level**

|默认值|debug  
|:---|:--
|生效方式|重启应用  
|参数类型|［off｜error｜warn｜info｜debug］ 
|参数说明|设置非 off 值将记录 OneAPM Agent 的工作日志，当您需要进行故障分析时，参数级别决定日志的细度。开启该开关同时需要开启log_file配置 

**日志输出级别**


|off|关闭|  
|:---|:--|:---|  
|error|错误|error    
|warm|警告|error+warn   
|info|信息|error+warn+debug
|debug|调试|error+warn+debug+info

###探针生效配置

enabled=true  
apdex_t=0.5

**enabled**  
 
|默认值|true  
|:---|:--
|生效方式|重启应用 
|参数类型|true和false 
|参数说明|设置为 true 将启用 OneAPM Agent，设置为 false 将停用 OneAPM Agent

**apdex_t**  
 
|默认值|0.5  
|:---|:--
|生效方式|重启应用 
|参数说明|用户体验满意度。apdex_f（即4倍apdex_t）以上时间为不可容忍时间。如默认0.5即请求响应时间小于0.5s时为满意，0.5s~2s为可容忍，2s以上为不可容忍

###追踪阈值配置
transaction_tracer.enabled = true  
transaction_tracer.transaction_threshold = apdex_f  
transaction_tracer.explain_threshold = 0.5  
transaction_tracer.stack_trace_threshold = 0.5  

**transaction_tracer.enabled**  

|默认值|true  
|:---|:--
|生效方式|重启应用  
|参数类型|true和false 
|参数说明|参数为 transaction tracer 的子参数，用于控制是否启用 transaction tracer 功能

**transaction_tracer.transaction_threshold**  

|默认值|apdex_f  
|:---|:--
|生效方式|重启应用  
|参数说明|当事务执行时间超过该值时，事务将生成 Trace。该参数以秒为单位可以设置整数或浮点数
|注意|参数为 apdex_f 时，OneAPM 将使用 apdex_t 的 4 倍参数值。


**transaction_tracer.explain_threshold**  

|默认值|0.5  
|:---|:--
|生效方式|重启应用  
|参数说明|参数以秒为单位，当 explain_enabled 为 true 时，OneAPM agent 捕捉 SQL 执行时间超过该值的 SQL 并生成执行计划


**transaction_tracer.stack_trace_threshold**  

|默认值|0.5  
|:---|:--
|生效方式|重启应用  
|参数说明|参数以秒为单位，当 Web 事务或 SQL 响应时间超过该值时，OneAPM 将收集并展示相应 stackTrace

###错误收集功能配置
error_collector.enabled = true  
error_collector.ignore_status_codes = 404

**error_collector.enabled**  

|默认值|true 
|:---|:--
|生效方式|重启应用  
|可选参数|true或false
|参数说明|参数为用于控制是否启用 error 收集功能

**error_collector.ignore_status_codes**  

|默认值|404 
|:---|:--
|生效方式|重启应用  
|可选参数|错误代码
|参数说明|该参数用于忽略指定业务 HTTP 的错误代码，多个代码以逗号分隔，例如 404，505

###跨应用调用配置（该功能暂不支持）

cross_application_tracer.enabled = true

**cross_application_tracer.enabled**


|功能说明| 跨越应用程序记录外部调用次数与响应时间
|:---|:--
|默认值|true
|生效方式|重启应用  
|可选参数|true或false
|参数说明|设置为 true，将记录跨越应用程序记录外部调用次数与响应时间


