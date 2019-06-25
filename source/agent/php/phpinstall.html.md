# PHP Agent 安装

* [Linux 探针安装](#1)<br>

## <h2 id="1">Linux 探针安装</h2> <br>
安装 PHP 探针需要 root 用户权限，所以在安装探针之前，请先切换为 root 用户。

 解压缩安装包

命令：tar -xzvf OneAPM_php_Agent_latest.tar.gz

 进入解压缩的文件夹

命令：cd oneapm-php5-linux-install-script

<!--![](https://oneapm.kf5.com/attachments/download/274057/001562092c5c7406dfc2fdc5e5b4302)-->
![](/images/myr/p001.png)

 安装探针

命令： ./oneapm-install  install

<!--![](https://oneapm.kf5.com/attachments/download/274060/001562092f1af8d01f1d0aa101cc091)-->
![](/images/myr/p002.png)

 输入 license 值，即在下载第三步获取的授权编号，输入回车进行安装

<!--![](https://oneapm.kf5.com/attachments/download/274065/0015620934c8b5e09e7bf022374c637)-->
![](/images/myr/p003.png)

如果您的服务器上安装了多个 PHP，您需要选择当前要执行的 PHP 安装目录，走第 5 步。

 选择 PHP 的安装目录

<!--![](https://oneapm.kf5.com/attachments/download/274070/0015620939faf0aed5ccb86f0eb4bcd)-->
![](/images/myr/p004.png)

如果您的 PHP 安装目录没有在 OneAPM 探针搜索到的安装目录下(/usr/… 或 /opt/… 开头的目录下)，请选择 3 并用安装脚本的提示命令搜索您的安装目录

<!--![](https://oneapm.kf5.com/attachments/download/274072/001562093e37db88747860f49786daa)-->
![](/images/myr/p005.png)

将您的安装目录输入

<!--![](https://oneapm.kf5.com/attachments/download/274074/001562094030f867580d1d607719969)-->
![](/images/myr/p006.png)

 安装成功标志

<!--![](https://oneapm.kf5.com/attachments/download/274075/0015620941362ec2cda9b6949d558b6)-->
![](/images/myr/p007.png)

 修改 oneapm.cfg 里 collector_host 和 port 参数的值分别为 appcollector.oneapm.com 和 80


 ![](/images/myr/p012.png)


 重启 PHP 服务器(例如 Apache、PHP-FPM)

本例使用的服务器为 Nginx+PHP-FPM ，所以只需重启 PHP-FPM 即可

<!--![](https://oneapm.kf5.com/attachments/download/274077/0015620944ea9a3cafc781f54787c52)-->
![](/images/myr/p008.png)

在重启 PHP-FPM 或者 httpd 时，oneapm-daemon 进程自动启动

<!--![](https://oneapm.kf5.com/attachments/download/274081/0015620946c57a915d640fe5b709e3c)-->
![](/images/myr/p009.png)

 回到 OneAPM 页面查看应用性能，应用程序名的颜色会因 PHP 应用性能不同而显示的颜色不同，点击进入就可以查看相关数据。

安装完毕，回到 OneAPM 应用首页可以看到安装的 PHP 应用

<!--![](https://oneapm.kf5.com/attachments/download/274084/001562094ef4873a4d43b462b31f84b)-->
![](/images/myr/p010.png)



