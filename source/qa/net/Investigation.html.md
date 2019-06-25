# .NET Agent 常见故障排查方法

尊敬的 .NET Agent 用户，如您在使用过程中遇见问题，可以尝试通过如下方法进行故障排查。

### 步骤一：确认 .NET Agent 是否为最新版本

您可以通过「安装步骤」页面来下载最新版探针。或者，直接登录[官网](http://www.oneapm.com/)下载。

对于 Window 用户，可以通过“控制面板”来查询  Agent 版本，如果版本不是最新，请您进行更新。更新方法：

* 前往「安装步骤」页面下载 32 位或 64 位安装文件。

* 双击后直接安装。

* 重启 IIS。

### 步骤二：确认系统环境和应用场景是否满足

请您确认系统环境和应用场景是否满足，您可以前往“安装指南－>.NET －>兼容环境支持”进行查看。

### 步骤三：确认安装文件是否齐全

以默认安装路径 C 盘（系统为 64）为例，当您正确完成安装后，可以通过查询如下路径来确认安装文件是否齐全：

Agent 版本为 .NET Agent v1.0.0.7

 * 安装路径：C:\Program Files (x86)\OneAPM.net.Agent 共 14 个对象。如果 Blueware.Profiler.dll 文件加载失败，您可以前往故障排查文档查看解决方案。

<!--![](http://udeskpub.qiniudn.com/1-1433138777.png)-->
 ![](/images/myr/004.png)

 * 数据和配置路径：C:\ProgramData\OneAPM.net.Agent 共 5 个对象。（需要开启显示隐藏目录）

<!--![](http://udeskpub.qiniudn.com/2-1433138791.png)-->
 ![](/images/myr/005.png)

 Agent 版本为 .NET Agent v1.0.0.8

 * 安装路径：C:\Program Files (x86)\OneAPM\OneAPM.Net.Agent共8个对象。

<!--![](http://udeskpub.qiniudn.com/11-1435912898.png)-->
 ![](/images/myr/006.png)

 * 数据和配置路径：C:\ProgramData\OneAPM\OneAPM.Net.Agent 共 5 个对象。（需要开启显示隐藏目录）

<!--![](http://udeskpub.qiniudn.com/22-1435912967.png)-->
 ![](/images/myr/007.png)

Agent 版本为 .NET Agent v1.2.0.0 以上

 * 安装路径：C:\Program Files (x86)\OneAPM\.Net.Agent 共 12 个对象。

<!--![](https://oneapm.kf5.com/attachments/download/378500/0015670cb9084d83f9913eb68173506)-->
 ![](/images/myr/008.png)

 * 数据和配置路径：C:\ProgramData\OneAPM\.Net.Agent 共 5 个对象。（需要开启显示隐藏目录）

<!--![](https://oneapm.kf5.com/attachments/download/378501/0015670cbb95d1caf25e6c0efe68658)-->
 ![](/images/myr/009.png)

### 步骤四：确认 license key 是否写入

打开路径 C:\ProgramData\OneAPM.net.Agent（需要开启显示隐藏目录）下的 oneapm.config 文件，可以使用 Visual Studio 或者记事本打开。

如图所示，在节点 service 下，请确保 licenseKey 属性值不为空。如果 license key 未写入，您需要登录官网查询授权码并复制，然后手动黏贴进去。

<!--![](http://udeskpub.qiniudn.com/3-1433138800.png)-->
 ![](/images/myr/010.png)

写入 license key 值后，您需要重启 IIS。

### 步骤五：确认网络连通

当您确保上述步骤都没有问题时，但仍无法看到数据，您需要检查网络是否连通。您可以前往文档查看具体解决方案。

如您通过上述步骤，仍然无法解决问题，请收集日志信息，与我们联系。
