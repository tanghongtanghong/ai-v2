# Go Collector 安装配置
注意：不同版本探针blueware-collector.ini中配置项不完全相同。以下格式仅供手动配置参考，根据需求按后面各项配置项说明进行配置即可。

##Collector参数说明 

**连接服务器配置**  

host = appcollector.oneapm.com  
port = 80  
collector_port = 5888  


**host**

|默认值|appcollector.oneapm.com 
|:---|:--- 
|生效方式|重启collector
|可选参数|IP地址和域名   
|参数说明|指定 OneAPM Go-collector 与 Oneapm Server的通信地址.

**port**  

|默认值|80
|:---|:--
|生效方式|重启collector
|参数类型|TCP端口  
|参数说明|指定OneAPM Go-collector与Oneapm server的通信端口。


###日志状态及位置配置

log_file = /tmp/go_collector.log  
log_level = debug

**log_level**

|默认值|debug  
|:---|:--
|生效方式|重启collector  
|参数类型|［off｜error｜warn｜info｜debug］ 
|参数说明|设置非 off 值将记录 OneAPM Collector 的工作日志，当您需要进行故障分析时，参数级别决定日志的细度。开启该开关同时需要开启log_file配置 

**日志输出级别**


|off|关闭|  
|:---|:--|:---|  
|error|错误|error    
|warm|警告|error+warn   
|info|信息|error+warn+debug
|debug|调试|error+warn+debug+info



**log_file**


|默认值|/tmp/go_collector.log  
|:---|:--|  
|生效方式| 重启collector   
|参数类型|任意目录下文件名   
|参数说明|设置任意目录下文件名即可


