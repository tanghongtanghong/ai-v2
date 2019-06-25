# Ruby Agent 安装常见问题及解决办法
## 一、Ruby Agent 安装成功，没有数据
### 故障说明
应用启动后无法在后台看到数据。
### 解决方案

 1. 确定网络环境是通的ping/telnet tpm.oneapm.com 443端口试试。
 2. 确定 license_key 复制粘贴无误一般最后有个=确定 oneapm.yml 配置文件在 config 目录下。
 3. 探针回传数据周期是 1min 可以稍等一下刷新看看。
 4. 确定 bundle install 成功正确安装了 oneapm_rpm。
 5. 确定重启了应用。

如果无法访问 tpm.oneapm.com:443，则需要在防火墙配置规则。
### 排查过问题后仍无法在后台看到数据
这种情况下请查看应用目录下 log/oneapm\_agent.log日志中会提示相应的错误信息如果不能根据日志提示的错误信息进行修正请建立工单描述遇到的问题贴上 oneapm_agent.log 日志我们的 support team 会及时响应。
## 二、Web 事务中 Redis Brpop 是什么
Web 事务中 Redis Brpop 是例如 sidekiq、resque 的后台任务框架，在调用 redis brpop 查询后台任务，其实并不是 Web 事务。
## 三、无法抓取事务
如果无法抓取事务请直接联系我们support@oneapm.com很可能是某些库与 Ruby Agent 冲突导致的。
## 四、无法抓取慢事务
默认情况下 Ruby Agent 只会抓取响应时间超过 0.5 秒的事务如果您有更高的要求请在 OneAPM 应用设置或者配置文件中修改阀值 transaction_threshold。详情请参见[Ruby Agent 参数说明][1]。
## 五、无法抓取数据库信息
当前 Ruby Agent 支持 active\_recordsequeldata_mappermongomongoid 四种数据库映射模型如果您有其他需求请建立工单。
## 六、无法抓取慢查询
默认情况下 Ruby Agent 只会抓取响应时间超过 0.5 秒的数据库查询如果您有更高的要求请在 OneAPM 后台或者配置文件中修阀值 explain_threshold。详情请参见[Ruby Agent 参数说明][2]。
## 七、无法抓取后台任务信息
当前 Ruby Agent 支持 delayed\_job, sidekiq, resque 三种后台队列框架如果您有其他需求请建立工单。
## 八、无法抓取外部服务
当前 Ruby Agent 支持基于 net/http 的 httpclientTyphoeusHTTPClientExconCurl 如果您有其他需求请建立工单。
## 九、部分数据丢失
OneAPM Ruby Agent 进行了兼容性的处理与其它类似原理的工具的 Agent 共存不会存在冲突。但是会存在数据丢失的情况所以不建议共同使用。
## 十、其他问题
请联系 OneAPM并注明

 - 用户信息
 - 操作系统及版本
 - Ruby 版本
 - 使用的框架及版本
 - 使用的 Ruby Agent 版本

  [1]: https://oneapm.kf5.com/posts/view/41853/
  [2]: https://oneapm.kf5.com/posts/view/41853/