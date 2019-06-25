---
title: " Ai - 快速入门 - 开始使用"
---

# 开始使用

##### 开始使用 OneAPM Ai


* OneAPM Ai，全名为 OneAPM Application Insight，是 OneAPM 为企业用户精心打造的应用性能管理（Application Performance Management）产品，提供有关 Web 应用程序性能的实时、趋势数据和用户体验的满意度。通过端到端事务跟踪、各种丰富的图表和报告，可视化您的数据，深入到应用的源代码级别。
您的开发、运维团队（DevOps）不需要猜测程序性能瓶颈是来自应用程序本身，CPU 可用性，数据库加载，还是其它完全没有想到的情况。使用 OneAPM，您可以在最终用户受到影响之前快速识别潜在的问题。
![](/images/ai_index.png)

**登陆**<br>

* 访问 [OneAPM 登录页面](https://www.oneapm.com) ，输入已注册的 OneAPM 账号，进入 OneAPM 主页面。<br>

* 若尚未注册 OneAPM 账号，请[注册 OneAPM 账号](https://user.oneapm.com/pages/v2/signup?from=ai-docs)后，开始使用。<br>
默认进入控制台页面，点击 Application Insight 进入操作页面。
![](/images/ai_index02.png)

**初次使用**<br>

* 初次使用 Application Insight 时，由于您尚未在您的AI产品中添加应用，首先会让您选择需要监控的对应平台应用，这里以 Java 应用为例，如图所示：<br>
![](/images/ai_index03.png)

* 当我们选中 Java 的图标后会看到，如图：
![](/images/ai_index04.png)

* 通过上面图中指示方式，（以 Tomcat 为例）下载 Agent 后放置到并成功部署在应用服务器根目录后如图：
![](/images/ai_index06.png)

*  以上操作后，必须配置license key到应用服务器根目录下的 /OneAPM/oneapm.properties 文件中（如上述截图所示的OneAPM文件夹），然后重启应用服务器； 2 分钟后，再次登陆 OneAPM 后会看到如图:<br>
![](/images/ai_index05.png)

* 看到上图，就说明您已经成功监控到应用的性能数据，接下来开始您的 OneAPM 性能优化之旅吧！！！
