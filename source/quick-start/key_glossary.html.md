---
title: " Ai - 快速入门 - 术语解释"
---

## 应用（Application）



在OneAPM AI中,应用是最顶级的概念，它由一台主机或多台主机组成，描述一整套应用运行环境的逻辑概念，包括多个服务端、多个存储、组件等。例如机票订购应用 AcmeAir中包含三层技术架构 zuul，webapp，auth 等，其中不同的组件处理不同的业务，如webapp处理业务逻辑（查询、预订等）、auth处理用户身份认证问题。  
在配置Ai Agent时，需要指定应用和层的名字，Agent将根据此向Ai Server报告数据，并且在应用拓扑图中显示调用关系。

## web事务入口
web事务入口的定义来源于真实用户使用体验，一般表现为一个从“用户请求->webserver->DB->webserver->用户请求”的过程，例如在机票订购应用AcmeAir中用户发起的查询机票、下订单等操作，在AI中分别定义为查询机票（web事务入口）、下订单（web事务入口）。一个web事务入口包括多个web事务。

##web事务
web事务表示web应用程序中处理一次独立的web访问请求的过程，从web应用接受请求开始到web应用输出响应结束，即一次http请求。

##trace
针对缓慢或错误web事务的全过程记录，即为trace。trace内容包括调用详情、调用SQL语句、调用拓扑关系图等，用于**定位具体的web事务问题**。

##调用链
针对缓慢web事务入口的调用详情，即为调用链。调用链记录缓慢请求在整个调用链路中的调用详情，对于具体的节点可进行钻取，获取节点的代码执行情况、数据库性能等。   
在OneAPM AI中，调用链追踪模块用于显示如下情况的数据：1）调用链中的任意节点生成trace时抓取数据; 2）每分钟每个探针从当前web事务入口请求中随机抓取5条。

##集群（Tier）
在OneAPM AI中，集群用于将应用中的不同技术架构进行分类，每个集群包括一个或多个运行同样服务的实例。例如在机票订购应用AcmeAir中有Zuul Tier、Webapp Tier、Auth Tier。不过集群的组织方式也取决于环境，任何一组实例，只要希望将它们作为一个整体来监控性能，就可以划分到一个集群（Tier）中。建议如下：  
1）同一层的节点之间最好没有互动  
2）一个Agent节点最好不要属于多个层

##后台任务
后台任务是指应用在运行时不需要与用户产生交互的任务，一般在不打扰用户其它工作的时候执行，
即以非http请求开始的任务。

##远程服务
在应用内部的不同服务之间产生的http请求调用或对外部服务的http请求调用统一定义为远程服务。

###如果您对AI感兴趣，可以[立即试用](https://user.oneapm.com/pages/v2/signup?ref=https://www.oneapm.com&amp;from=ai-docs)我们的产品  

###如果您想了解更多，我们建议：  
* 进入[使用说明](http://docs-ai.oneapm.com/book/)，查看更多详情    
* 在[OneAPM社区](http://club.oneapm.com/)与我们进行讨论  
* 在[OneAPM博客](http://blog.oneapm.com/)或[OneAPM大学](https://www.oneapm.com/openclass/index.html)，学习更多相关内容


