#安装成功但是无数据
##  故障说明

完成 PHP Agent 安装步骤后，OneAPM 界面上没有任何数据显示。
* * * * *

## 解决方案

   * 请检查 php.ini 文件中的 oneapm.key="license" 是否正确。

   * 请检查网络是否通，命令：telnet apmdc.oneapm.com 80 。

   * 请检查进程中是否启动了 oneapm-daemon [ps -ef|grep oneapm-daemon]。

   * 请检查 phpinfo 中是否有 oneapm 的信息。

   * 应用服务器重启，请重启 oneapm-daemon 与 php。
   
   * 服务器的时间是否为北京时间。
   
   * 请检查网站有没有 http 访问。
   
   * 请检查 php 的版本。

   * 请检查你的环境是否在我们的支持列表中（不支持 Windows 和 Mac OS 系统）。

如果仍然没有数据请修改配置文件，开启日志 debug 模式，打印详细的日志。

    修改 php.ini 配置文件 ，修改参数 oneapm.loglevel=debug 。

    修改 oneapm.cfg 配置文件，修改参数 loglevel=debug。

然后将产生的两个日志文件发送给我们，可以更快的解决你的问题。

发送方式：support@oneapm.com 或者 提交工单。
* * * * *


## 故障说明

在Ubuntu系统中完成 PHP Agent 安装步骤后，OneAPM 界面上没有任何数据显示。
* * * * *

## 解决方案

在 Ubuntu 系统中，对于使用 apt-get 方式安装的 PHP 环境，存在一个比较特殊的问题，Ubuntu 会把 PHP 的 php.ini 拆分成多个：

    如果是 Apache 环境，会生成两个 php.ini 文件，分别位于 Apache 目录和 CLI 目录。

    如果是 Nginx 环境，会分别位于 php-fpm 目录和 CLI 目录。

而安装的时候安装脚本是无法区分这两个文件的，如果默认安装到了 CLI 目录的 php.ini 配置文件中，需要您手动将 CLI 目录中的 [oneapm] 这一行以及下面的全部 OneAPM 配置部分剪切到另外一个 Web 服务器使用的 php.ini 文件中。然后重启 Apache、Nginx、php-fpm 等等 PHP 容器，静等 5 分钟之后就能获取数据了。

## 故障说明

AMH 云主机使用 OneAPM PHP Agent 安装成功无数据
* * * * *

## 解决方案
1、找到 php-fpm 配置文件，获得 chroot 目录位置

<!--![](http://club.oneapm.com/uploads/default/optimized/2X/4/4643674f800ac5600066b98ad32976f857f42615_1_690x153.png)-->
![](/images/myr/012.png)

<!--![](http://club.oneapm.com/uploads/default/original/2X/d/d5d9311730d7f3e6d31e2d2a3355caf30d9924ce.png)-->
![](/images/myr/016.png)

2、 在 chroot 的目录位置创建 /etc/oneapm 目录

<!--![](http://club.oneapm.com/uploads/default/original/2X/1/15cc44c617a5ebfd1a6fd5cdd7ff5cfe6fb45914.png)-->
![](/images/myr/013.png)

3、修改 oneapm-daemon 配置文件，添加 udspath 配置项，其中 /etc 后面的部分保持不变

<!--![](http://club.oneapm.com/uploads/default/original/2X/1/1079e43d0ed28cb33edd00bdd8ba37ffafc55a3c.png)-->
![](/images/myr/014.png)

4、 重启 oneapm-daemon

<!--![](http://club.oneapm.com/uploads/default/original/2X/4/4c80d4c06fdfdbd476e20fb4ad8d51030d5a8b55.png)-->
![](/images/myr/015.png)