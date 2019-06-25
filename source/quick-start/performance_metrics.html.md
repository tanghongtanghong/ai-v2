---
title: " Ai - 快速入门 - 性能指标"
---

## Apdex
Apdex (Application Performance Index) 是由 Apdex 联盟制定的国际应用性能指数标准，用来量化用户对应用性能的满意程度。

 - Apdex 定义了 3 个用户的满意度区间，即

<table>
	<thead>
		<tr>
			<th>满意程度</th>
			<th>阈值</th>
			<th>评分</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td> 满意 </td>
			<td> < T </td>
			<td> 1.0 </td>
		</tr>
		<tr>
			<td>容忍</td>
			<td>T~4T</td>
			<td> 0.5</td>
		</tr>
		<tr>
			<td>失望</td>
			<td> > 4T</td>
			<td> 0 </td>
		</tr>
	</tbody>
</table>

其中，T 为用户自定义的响应时间阈值。	<br>
Apdex 指数 = (1.0 * 满意样本数 + 0.5 * 容忍样本数)/样本总数。这样，抽象的应用性能满意度被量化为 0、1 之间的数值（0 代表没有满意用户，1 则代表所有用户 都满意）。
  
##吞吐量（cpm）
应用程序每分钟被调用的次数（cpm，即Calls Per Minute），反映应用系统对于用户请求的响应能力。

##响应时间
在单次事务中，从用户发出该事务的请求到该事务得到响应所用的时间。

##执行时间
系统接受请求、处理请求、向请求者回传响应的总耗时。

##错误率
应用服务器端每分钟发生的错误或异常数量占总请求数量的百分比。epm(Error Per Minute)表示每分钟错误数。

##调用者时间占比
数据库SQL被调用的总耗时过程中，各个事务调用当前SQL的耗时在总耗时中所占的百分比。

##调用次数
事务在应用的运行过程中的调用次数。  


###如果您对AI感兴趣，可以[立即试用](https://user.oneapm.com/pages/v2/signup?ref=https://www.oneapm.com&amp;from=ai-docs)我们的产品  

###如果您想了解更多，我们建议：  
* 进入[使用说明](http://docs-ai.oneapm.com/book/)，查看更多详情    
* 在[OneAPM社区](http://club.oneapm.com/)与我们进行讨论  
* 在[OneAPM博客](http://blog.oneapm.com/)或[OneAPM大学](https://www.oneapm.com/openclass/index.html)，学习更多相关内容