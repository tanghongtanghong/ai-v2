# Node.js Agent 参数配置
OneAPM Node.js Agent 从 config.default.js 配置文件中获取配置信息。您可以在本文了解各个参数的意义，以及对应的配置方式。

你可以在该位置找到配置文件：

  ![](/images/js1.png)

## config.default.js 配置文件
**APP_Name**

|  默认值   |  My Application   |
| :--- | :--- |
|  参数类型  |   字符串数组或者字符串  |
|   生效方式  |   重启应用服务器  |
|   参数说明  |   这个名称是登陆到 OneAPM.com 中所看到的应用程序的名称   |

**License Key**

|  默认值   |  请在此处输入安装步骤中第二步生成的 License Key   |
| :--- | :--- |
|  生效方式   |  重启应用服务器   |
|   参数类型  |  String   |
|  可选参数   | OneAPM 提供的 License Key    |
| 参数说明    |  请填写安装步骤中提供的正确的 License Key。配置正<br>确的 license Key 后 OneAPM Agent 将与 OneAPM server<br> 通信，使得 OneAPM Agent 正确工作    |

**Host**

| 默认值    |  'tpm.OneAPM.com'   |
| :--- | :--- |
|  生效方式   | 重启应用服务器    |
|   参数说明  |  OneAPM Agent 默认主机号，如果不使用代理服务器，参数不可修改   |

**Port**

|  默认值   |  443   |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  |  TCP 端口   |
|   参数说明  | 指定 OneAPM Agent 与 OneAPM server 通信的端口       |

**SSl**

|   默认值  |  true   |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    设置为 true，指定 OneAPM Agent 使用 HTTPS 协议与<br> OneAPM server通信，false 则使用 HTTP 协议。 |

使用代理服务器上网时，需要配置 Proxy 节点

**Proxy Host**

| 生效方式    |   重启应用服务器  |
| :--- | :--- |
|  参数类型   |  String   |
|  可选参数   |  IP地址 or 域名   |
| 参数说明    |  OneAPM Agent 使用代理与 OneAPM server 通信时配置指定<br>代理主机地址。   |

**Proxy Port**

|  方式生效   |  重启应用服务器   |
| :--- | :--- |
| 参数类型    |   String  |
|  参数说明  |  OneAPM Agent 使用代理与 OneAPM server 通信时配置指定<br>代理的主机端口   |

**Proxy user**

|  方式生效   |  重启应用服务器   |
| :--- | :--- |
| 参数类型    |   String  |
|  参数说明  |  OneAPM Agent 使用代理与 OneAPM server 通信时配置指定<br>代理的用户名   |

**Proxy Pass**

|  方式生效   |  重启应用服务器   |
| :--- | :--- |
| 参数类型    |   String  |
|  参数说明  |  OneAPM Agent 使用代理与 OneAPM server 通信时配置指定<br>代理的密码   |

**Certificates**

参数说明：如果你的代理使用自定义的 SSL 证书，你可以添加文字 CA 这个数组
到每个证书的一个条目。 

**ignore\_server_configuration**

|   默认值  | false |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    需要更多的控制模块配置，并禁用 OneAPM 服务端的配置<br>，设置此参数设为 true，设置 false 默认 OneAPM 服务端的配置 |

**Agent_enabled**

|   默认值  | true |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    设置为 true 将启动 OneAPM Agent，设置为 false 将关闭 OneAPMAgent |

**apdex_t**

|   默认值  |0.100 |
| :--- | :--- |
| 参数说明   |   对于应用程序默认的 Apdex 阀值，单位为秒 |

**capture_params**

|   默认值  | false |
| :--- | :--- |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    捕捉在缓慢的交易痕迹和错误的痕迹请求的 URL 参数 |

**ignored_params**

参数说明:参数数组不希望捕获过慢的事务跟踪和错误的痕迹请求的 URL 


##日志输出

**Log_level**

|   默认值  | info |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | String  |
|  可选参数   | fatal or error or warn or info or debug or trace    |
| 参数说明   |  记录 OneAPM Agent 的工作日志，当需要进行故障分析时<br>，参数可决定日志的程度 |

**Error collector**

功能说明:捕捉业务使用过程中抛出的异常信息，发送到 OneAPM 中以便查看

**error_collector enable**

|   默认值  | true |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    参数为用于控制是否启用 error 收集功能|

**ignore\_status_codes**

|   默认值  | 404|
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   可选参数  | 错误代码    |
| 参数说明   | 该参数用于忽略指定业务 HTTP 的错误代码，多个代码以<br> `<code></code>`分隔，例如 404,405|

**Transaction tracer**

功能说明：深度捕捉缓慢事物，每分钟将数据发送给 OneAPM server，包含事物中包括的 SQL 信息。

**transaction_tracer enable**

|   默认值  | true |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    慢 web 事物，参数 transaction_tracer 的子参数，用于控制<br>是否启用其功能 |

**transaction_threshold**

|   默认值  | apdex_f|
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | String（Float）   |
|  参数说明    | 慢 web 事物，当事物执行时间超过该值时，事物将生成<br> Trace。该参数以秒为单位可以设置为整数或者浮点数    |
| 注意   |    参数为 apdex\_f 时，OneAPM 将使用 apdex_t 的 4 倍参数值 |

**top_n**

|   默认值  | 20|
| :--- | :--- |
|   参数类型  | Int   |
|  参数说明    | 抓取慢事物中最慢的前20个事物    |

**Rules**

功能说明:命名规则或忽略交易

**Name**

功能说明:用于匹配传入的请求的URL和命名相关 OneAPM 交易的格式规则列表

**Ignore**

|可选参数 | String or RE|
| :--- | :--- |
|  功能说明    | 由代理忽略模式匹配传入请求的 URL 列表     |

**enforce_backstop**

|   默认值  | true |
| :--- | :--- |
| 生效方式    |  重启应用服务器   |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |    默认情况下，不会受到命名逻辑的其它位的任何交易将有自<br>己的名字设置成 NormalizedUri ，将此值设置为 false 将它<br>们设置改为统一资源标示符/路径 |

配置浏览器监控：

功能说明：启用真实的用户体验，OneAPM Agent 能够记录用户浏览器下载和加
载应用系统的时间

**browser monitoring enable**

|   默认值  | true |
| :--- | :--- |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |   参数为 browser monitoring 子参数，用于控制是否启用 JavaScript 功能 |

**Debug**

|   默认值  | false|
| :--- | :--- |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |   从服务器请求未缩小的来源      |

**transaction_events enable**

|   默认值  | false|
| :--- | :--- |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   |  用于控制是否启用 transaction_events 功能        |

**max\_samples\_per_minute**

|   默认值  | 10000|
| :--- | :--- |
| 参数说明   |  代理每分钟收集的所有事件的最高次数         |

**max\_samples_stored**

|   默认值  | 20000|
| :--- | :--- |
| 参数说明   |  这是用来当代理无法将事件发送到收集器。从以前的收获<br>周期的值将被合并到下一个使用此选项为限        |

**High security** 

|   默认值  | false|
| :--- | :--- |
|   参数类型  | Boolean    |
|  可选参数   | true or false    |
| 参数说明   | 高安全性模式防止任何敏感数据被发送到 OneAPM 设置。<br>设置为 false 确保本地设置必须与服务器设置相匹配      |