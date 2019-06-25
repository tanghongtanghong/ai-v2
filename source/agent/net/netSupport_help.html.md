# .NET Agent 兼容环境和支持列表

OneAPM 的 .NET Agent 在监控的 .NET 应用程序内部运行。对所有 .NET 兼容语言均可用，比如 VB.NET，C#，C++/CLI。

安装.NET Agent，您必须在操作系统的 admin 组中有管理员权限（不是用户权限）。您需要以用户管理者的身份登录，或者（在比较新的操作系统中）在权限弹窗出现时提供权限确认。

**注意：虽然 OneAPM 的 .NET Agent 监控 .NET 应用程序，但它并不监控不基于 .NET 的 经典 ASP 应用。**<br>

## 兼容和需求

.NET Agent 在监控的 .NET 程序中运行。Agent 并不需要关联单独的程序或者 Windows 服务。IIS 启动后，它将自动运行。

在您安装 .NET Agent 之前，请确保您的应用程序符合安装需求。


| 类型 | 支持列表 |
| :--- | :--- |
| 不支持的类型 | 不支持 代码经过混淆的组件 。 |
| .NET 版本 | .NET 2.0 或更高版本（不支持.NET 1.0） |
| IIS版本 | IIS 6.0及以上 |
| CLRs | 2.0<br>4.0 |
| .NET 框架 | .NET Framework 2.0<br>.NET Framework 3.0<br>.NET Framework 3.5<br>.NET Framework 4.0<br>.NET Framework 4.5<br>.Net Framework 4.6 |
| 操作系统 | Windows Server 2003<br>Windows Server 2008<br>Windows Server 2012<br>Windows Vista<br>Windows 7<br>Windows 10<br>（不支持Windows 8 ） |
|  数据库| SQL Server<br>Oracle<br>MySQL<br>PostgreSQL |
|NoSQL  | MongoDB：MongoDB.Driver1.7.0.4714，MongoDB.Driver 1.9.2.235， MongoDB.Driver1.10.1.73<br>Memcached：Enyim.Caching1.2.0.0，MemcachedProviders Version 1.2.3102.35569，Enyim.Caching2.16，Memcache Client1.0.0.0<br>Redis：ServiceStack.Redis 3.9.0.0，ServiceStack.Redis 3.9.63，ServiceStack.Redis 4.0.24 |
|  应用框架| ASP .NET MVC 2<br>ASP .NET MVC 3<br>ASP .NET MVC 4<br>ASP .NET MVC 5<br>ASP .NET Web API<br>ASP .NET Web Forms<br>SOAP-based Web Services<br>WCF<br>ServiceStack<br>（不支持Owin） |
| CMS | Umbraco<br>DotNetNuke |




