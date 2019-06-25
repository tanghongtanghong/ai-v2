
# 业务代码，自定义监控使用说明

确保您的环境部署的为.NET 3.5或以上版本，使用的 .NET Agent 版本为1.2.1.0以上。

1、找到安装目录（默认为c:\program files(x86\oneapm\.net agent\)）下的

  UserCfgCreator.exe 文件。

<!--![](https://oneapm.kf5.com/attachments/download/342270/001565832d52b88b9f503c45874f8f9)-->
![](/images/myr/001.png)

2、导入慢事务可能存在的程序集（对于网站而言，通常是一个 dll 文件）。

<!--![](https://oneapm.kf5.com/attachments/download/342272/001565832f07e0b2f8a51b114231b26)-->
![](/images/myr/002.png)

3、选择要注入的方法。

<!--![](https://oneapm.kf5.com/attachments/download/342274/0015658330266e8a2c0a54ca4cdd718)-->
![](/images/myr/003.png)

4.生成配置项。

5.重启 IIS。
