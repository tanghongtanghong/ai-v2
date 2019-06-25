	
# JAVA Agent 参数配置

* OneAPM Java Agent 从 oneapm.properites  配置文件中获取配置信息。您可以在本文中了解各个参数的意义，以及对应的配置方式。
oneapm.properites 目录位置 解压oneapm的位置/OneAPM/oneapm.properites 




### license\_key
|默认值     |  这里请输入第二步生成的 License Key |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  String  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   |  OneAPM 提供的 License Key  |
| 参数说明    | 请填写 OneAPM 安装步骤提供 License Key，.配置正确的 License Key 后，OneAPM Agent 将与 OneAPM server 通信，使得 OneAPM Agent 正常工作。    |

### transaction\_sample.processor\_count
|默认值     |  默认为系统CPU核数 |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |  OneAPM 提供的 License Key  |
| 参数说明    |   默认关闭 ，开启采样后, 用于计算CPU比率的CPU核数  |
  
### agent\_enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    | 设置为 true 将启用 OneAPM Agent，设置为 false 将停用 OneAPM Agent。    |

### enable\_auto\_tier\_naming
|默认值     |  false |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    | enable_auto_tier_naming 的值设定为 true 时, 可以启用对 auto_tier_naming 的支持,会自动检测您的每一个 web app 的名字,同时将不同 Agent 的数据对应到不同的web app中.    |

### enable\_auto\_transaction\_naming
|默认值     |  true |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | true 和 false  |
| 参数说明    | 1.设置为 true，启用基于 component-based 事务命名;2.设置为 false 将按照事务请求的 URI 进行命名;   |
	
### slow\_sql.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | true 和 false  |
| 参数说明    | 1.设置为 true，启用基于 component-based 事务命名;2.设置为 false 将按照事务请求的 URI 进行命名;   |

### transaction\_tracer.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |是否开启事务追踪，需要与 collect_traces ＝ true 时，才可以是能事务追踪 |

### transaction\_tracer.explain\_enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | true 和 false  |
| 参数说明    |是否开启慢SQL的执行计划。见慢 SQL 追踪实现逻辑 |

### transaction\_tracer.explain\_threshold
|默认值     |  0.5 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Float  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | 合法浮点数  |
| 参数说明    |慢 SQL 执行时间阈值，执行时间超过该参数的 SQL 查询会被认为是慢查询。见慢 SQL 追踪实现逻辑 |

### transaction\_tracer.stack\_trace\_threshold
|默认值     |  0.5 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Float  |
|  来源（服务器下发还是配置文件）   | tps端  |
|  可选参数   | 合法浮点数  |
| 参数说明    |当 Transaction Segment 的执行时间超过该阈值时，Agent 会抓取当前线程的调用栈，以供用户分析。一般的，执行 SQL 查询也是一种 Segment，所以如果 SQL 语句的执行时间大于这个阈值，在 Transaction Tracer 页面详情也会看到执行 SQL 时的调用栈信息 |

### transaction\_tracer.transaction\_threshold
|默认值     |  apdex_f |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串 ｜Double  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | 字符串或者合法浮点数  |
| 参数说明    |用来确定是否纪录特定事务的详细踪迹，如果超过该阈值，那么就会被纪录上传。默认为所设定的apdex_f值的4倍 |

### transaction\_tracer.log\_sql
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |是否将SQL语句录入日志 |

### transaction\_tracer.top\_n
|默认值     |  50 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Integer  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | 合法整型数字  |
| 参数说明    |参数控制事务URL产生的trace数量，URL产生超过参数限制的trace将会被丢弃。当参数设置为0时，始终显示URL最慢的trace。另见TransactionSampler 的四种实现中的 TransactionTraceBucket。 |

### obfuscated\_sql\_fields
|默认值     |  credit_card, ssn, password |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |该配置在代码中并没有被处理，该功能已经失效，会自动将其变成obfuscated的方式 |

### transaction\_tracer.record\_sql
|默认值     |  obfuscated |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | off ｜ raw ｜ obfuscated |
| 参数说明    |当启用transaction_tracer功能时，该参数标记SQL记录的模式，off为不记录SQL，raw为不进行处理并记录原始的SQL语 句，obfuscated为经过处理的SQL语句，加密显示语句的字符串或数字参数（将 SQL 中的变量都替换为“?”）。 |

### transaction\_tracer.slow\_sampler\_enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |将响应时间大于transaction_tracer.transaction_threshold的事务进行收集上报 |

### transaction\_sample.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |默认为 true, 表示开启，是否开启事务采样, 开启后将按照规则采样事务 | 

### transaction\_sample.crontab
|默认值     |  none |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   |   |
| 参数说明    |事务采样定时修改任务，任务配置使用 crontab 格式，后跟采样时长和固定采样比 ，例如transaction_sample.crontab = 30 12 * * * 300 1，表示每天 12 点 30 分，在 5 分钟内，事务采样比是 1%。默认为 none，表示不使用此配置，修改后可动态生效。|

### transaction\_tracer.min\_sql\_time
|默认值     |  0 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |探针会对执行时间小于min_sql_time的 sql 合并到other中，默认值为 0 毫秒, 即不进行合并 |

### error\_collector.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | true 和 false  |
| 参数说明    |是否开启错误收集 |

### error\_collector.ignore\_errors
|默认值     |  空 |
| :--- | :--- |
|  生效方式  | 	   |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |  tps端	  |
|  可选参数   |   |
| 参数说明    |过滤事务中的信息，现在一般用来过滤静态文件，不让其上传 |

### error\_collector.ignore\_status_codes
|默认值     |  404 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  整型数字	  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   |	  错误代码	  |
| 参数说明    |需要过滤的特定状态码错误信息 |

### ignore\_transaction
|默认值     |  .js,.css,.jpg,.jpeg,.gif,.png,.bmp,.ico	 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   |   |
| 参数说明    |过滤事务中的信息，现在一般用来过滤静态文件，不让其上传 | 

### cross\_application\_tracer.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |是否开启跨应用追踪

### cross\_application\_tracer.internal\_host
|默认值     |  none |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   |   |
| 参数说明    |在cross_application_tracer.enabled=true条件下,此配置才有用.配置所要调用内部应用服务的host, 多个host直接用逗号分隔.|

### capture\_params
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  tps端	  |
|  可选参数   | true 和 false  |
| 参数说明    |是否捕捉事务的http参数 |

### ignored\_params
|默认值     |  credit_card, ssn, password |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   | true 和 false  |
| 参数说明    |过滤http参数配置 |

### transaction\_tracer.stack\_details\_enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  	  |
|  可选参数   | true 和 false  |
| 参数说明    |设置是否记录慢事务以及慢SQL中的详细栈信息,"false" 不记录栈详情 "true" 记录栈详情 |

### apdex\_t
|默认值     |  0.5 |
| :--- | :--- |
|  生效方式  | 热部署   |
|  参数类型   |  Float  |
|  来源（服务器下发还是配置文件）   |  tps端  |
|  可选参数   |  合法浮点数  |
| 参数说明    |agent衡量阈值 |

### thread\_profiler.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |是否开启线程分析 | 

### app\_name
|默认值     |  MyApplication |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   |   |
| 参数说明    |用户自行命名应用 |

### tier\_name
|默认值     |  MyTier |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   |   |
| 参数说明    |tier_name 是为应用指定 tierName,相同 app_name 的所有 tier(应用) 被视为同一个业务, 但不同的 tier 是不同的应用.如果 enable_auto_tier_naming 设定为 false, agent 将发送所有数据给这里配置的 tier.如果 enable_auto_tier_naming 设定为 true, agent 将非 Web 的事务数据(即后台任务的数据)发送给这里配置的 tier, 并且 agent 会将 Web 事务数据,数据库的数据等发送给探针自动命名的 tier |

### log\_level
|默认值     |  off |
| :--- | :--- |
|  生效方式  | 热部署   |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | off ｜severe ｜ waring ｜ info ｜ fine ｜ finer ｜ finest  |
| 参数说明    |日志等级，severe 严重 severewaring 警告 severe + warninginfo 正常 severe + warning + infofine 精度 severe + warning + info+ fine finer 细度 severe + warning + info+ fine + finer finest 最好 severe + warning + info + fine + finer + finest |

### audit\_mode
|默认值     |  false |
| :--- | :--- |
|  生效方式  | 热部署   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |将上传以及接收的数据以json的形式写入到日志，方便调试 |

### log\_file\_count
|默认值     |  1 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  int  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |The number of log files to use |

### log\_limit\_in\_kbytes
|默认值     | 0 |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |写入 log 文件的最大字节数. |

### log\_file\_name
|默认值     |  oneapm.log |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |探针日志名称 |

### log\_file\_path	
|默认值     | application server path/OneAPM/logs |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |日志目录地址 |
  
### appserver\_port	
|默认值     |  |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |客户服务器端口,设置后是agent名称一部分. |
  
### delay\_time\_for\_gather_port	
|默认值     | 5 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |配置启动探针后等待获取接口的时间，如果在delay_time_for_gather_port时间内获取到了port,则不再获取如果在delay_time_for_gather_port时间内没有获取到port,则会根据中间件信息设置一个默认的port |

### weblogicejb2.enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |  配置文件  |
|  可选参数   | true 和 false  |
| 参数说明    |启动weblogic下EJB关系抓取 |

###weblogicejb2.ignore\_method
|默认值     |  lookup,create |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |weblogic下EJB系统方法忽略 |

### is\_osb\_enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  | 重启应用服务器   |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   | 配置文件   |
|  可选参数   | true 和 false  |
| 参数说明    |启动OSB监控 |

### custom\_namer.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   | true 和 false  |
| 参数说明    |自定义事务统一命名.注意在ejb关系抓取时需要关闭,即把值设定为false. |

### instrumentation\_ejb2.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   | true 和 false  |
| 参数说明    |ejb2监控.需要ejb关系抓取时，要关闭该监控, 即把值设定为false. |

### instrumentation\_ejb3.enabled
|默认值     |  true |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   | true 和 false  |
| 参数说明    |ejb3监控.需要ejb关系抓取时，要关闭该监控, 即把值设定为false. |

### uri\_encoding\_enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   | true 和 false  |
| 参数说明    |是否在 agent 端开启对 URL 中非 ISO-8859-1 字符的处理.例如在 tomcat 应用中, URL 中包含的中文参数无法在 TPS 服务端正确显示时, 而又不想在 tomcat 的 server.xml 中设置 URIEncoding 参数, 则需要开启 uri_encoding_enable 选项, 同时配置 original_uri_encoding 和 target_uri_encoding.默认值为 false, 表示不开启 agent 端对 非 ISO-8859-1 字符的处理,另外，此项配置不能支持post中数据编码解码处理，如果遇到post中乱码情况，请在中间件中加入 URIEncoding 字段，该字段值应与 post 数据编码方式相同，该值设置为 true 后，original_uri_encoding与target_uri_encoding 的值也应与post数据编码方式相同 |

### original\_uri\_encoding
|默认值     |  ISO-8859-1 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |Java 运行时字符集设置.例如当 tomcat 未设置 URIEncoding 时, 默认字符集为 ISO-8859-1, 这个配置项通常不需要修改.仅当 uri_encoding_enabled = true 时, 该配置项才生效. |

### target\_uri\_encoding
|默认值     |  UTF-8 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |需要将 URL 字符串转换成的编码, 例如在 tomcat 应用中 URL 参数含有中文, 而又不想在 tomcat 的server.xml 中设置 URIEncoding 参数可以设置该配置项为 UTF-8.仅当 uri_encoding_enabled = true 时, 该配置项才生效.|

### tcross\_sampler\_enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |  boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   | true 和 false  |
| 参数说明    |分布式tracer规则，上传整条链路的tracer|

### cross\_sampler\_count
|默认值     |  5 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |分布式tracer一个周期内最多采集数量|
  
### cross\_sampler\_minduration
|默认值     |  0 |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |分布式tracer最小响应时间阈值，大于0ms的tracer才会捕获|

### trouble\_sampler\_enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |有问题的tracer规则，上传存在错误、慢sql的事务tracer|

### cross\_process\_key
|默认值     |  _oneapmHeader |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |用于配置需要客户修报文做分布式的字段|
  
### was\_permission\_enabled
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |用于配置是否开启安全策略 (注:只针对IBM的websphere即was环境)，在was环境下,该参数要设置true|

### allow\_permissions
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |当was_permission_enabled为true时，探针还出现权限问题，把探针所需的权限配置到该参数。只有was_permission_enabled 为true时,该参数才生效|

### header\_to\_next\_node
|默认值     |  X-BlueWare-Transaction-Orgion |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |需要转发到下一个节点的头信息名|

### is\_old\_server
|默认值     |  false |
| :--- | :--- |
|  生效方式  |    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |   |
| 参数说明    |标识使用的server版本为新版还是旧版，旧版server为4.0.x版本，不支持4.0.x以下版本，新版server为4.1.x版本，默认为false，表示使用的server为新版，如果server为旧版，则需要改为true，此配置针对企业级server配置|

### collector.ip	
|默认值     | 127.0.0.1	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	ip |
|  参数说明    | collector client的配置信息配置 collector server的ip地址 若部署模式为LOCAL(本机部署),建议配置为当前主机ip地址	|

### collector.port	
|默认值     | 19876	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	 |
|  参数说明    | collector server的监听端口	|

### collector.buffer\_pool\_size	
|默认值     | 5	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	 |
|  参数说明    | 向collector发送的事务数据会在JAVAGENT被预先缓存，缓存池总容量为: buffer_pool_size * single_buffer_size 向collector发送的事务数据,在JAVAAGENT端的缓冲池数量,提高数量有利于减少对于高TPS应用的同步阻塞	|

### collector.single\_buffer\_size	
|默认值     | 128	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	 |
|  参数说明    | 向collector发送的事务数据,在JAVAAGENT端的缓冲池容量。缓冲池内为循环写入,过小的缓冲池大小,容易造成transaction数据在发送前被覆盖。	|

### collector\_deployment\_mode
|默认值     | LOCAL	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	LOCAL ｜REMOTE |
|  参数说明    | Collector 部署模式:LOCAL(本机部署) REMOTE(远程部署)	|

### auto\_profiler.enable
|默认值     | false	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	false ｜true |
|  参数说明    | 自动性能剖析开关，默认为false，如果需要打开，则修改为true，重启后生效	|

### auto\_profiler.max\_thread\_count
|默认值     | 2	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	数值 |
|  参数说明    | 自动性能剖析最大剖析线程数，默认为2, 重启后生效	|

### auto\_profiler.sample\_period
|默认值     | 10 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	数值|
|  参数说明    | 自动性能剖析默认采样周期，单位 ms, 默认10ms	|

### auto\_profiler.interrupt\_period
|默认值     | 2 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	数值 |
|  参数说明    | 自动剖析时采样线程超时阀值，单位 min 默认 2 min	|

### connection\_cache\_enable
|默认值     | true |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |    |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	false ｜true |
|  参数说明    | 针对数据库使用连接池或缓存Connection时,配置全局Connection缓存	|

## 浏览器参数配置

### browser\_monitoring.is\_oneapm\_ai
|默认值     | false |
| :--- | :--- |
|  生效方式  |     |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	true ｜false |
|  参数说明    | 是否在在cookie或者header中写入ONEAPM_AI,用于AI和BI关联.|

### browser\_monitoring.is\_js\_text
|默认值     | true |
| :--- | :--- |
|  生效方式  |     |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	true ｜false |
|  参数说明    | 赋值 true js以纯文本方式插入到页面中|

### browser\_monitoring.transform
|默认值     | false |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |  Boolean  |
|  来源（服务器下发还是配置文件）   | tps端   |
|  可选参数   |	true ｜false |
|  参数说明    | 赋值为 false 可以关闭在页面中Javascript 语句的插入.|

### browser\_monitoring.content\_type
|默认值     | text/html |
| :--- | :--- |
|  生效方式  | 动态    |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   |    |
|  可选参数   |	 |
|  参数说明    |  配置可以插码的contentType,可动态配置.当配置多个contentType时,请用","分隔 如: text/html,text/plain|

### browser\_monitoring.ignore
|默认值     | .js,.css,.jpg,.jpeg,.gif,.png,.bmp |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   | 配置文件	   |
|  可选参数   | |
|  参数说明    | 浏览器js插入时要忽略的静态文件，如果插入的js导致部分页面工作不正常|

### browser\_monitoring.request.ip
|默认值     | all |
| :--- | :--- |
|  生效方式  |     |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   | |
|  可选参数   | |
|  参数说明    | 浏览器js插入时ip校验, 配置后, 在开启js插入功能下, 只对以下指定的ip进行js插入.多个ip通过逗号进行分隔, 若要关闭ip校验, 请将其值设为all|

### browser\_monitoring.request.url 
|默认值     | all |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   | 配置文件	   |
|  可选参数   | |
|  参数说明    | 浏览器js插入时request校验, 只对指定的url及特定参数的参数值进行js插入. 若要关闭url校验, 请将其值设为all.|

### browser\_monitoring.request.param
|默认值     | all |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |  字符串	  |
|  来源（服务器下发还是配置文件）   | 配置文件	   |
|  可选参数   | |
|  参数说明    | url请求参数配置: 参数名:参数值, 多个参数用","分隔开. 若要关闭参数校验, 请将其配置设为all.|

### environment.encoding	
|默认值     | utf-8	 |
| :--- | :--- |
|  生效方式  | 重启    |
|  参数类型   |  字符串  |
|  来源（服务器下发还是配置文件）   | tps端   |
|  可选参数   |编码方式	 |
|  参数说明    | 设置浏览器页面编码方式	|