# PHP Agent 卸载/停用

* [Linux 关闭探针](#1)<br>
* [Linux  开启卸载](#2)<br>
* [Linux 探针卸载](#3)<br>


## <h2 id="1">Linux 关闭探针</h2> <br>

1、安装探针成功之后，在 php.ini 中找到 oneapm 配置模块，注释掉 extension=oneapm.so 配置。

<!--![](http://club.oneapm.com/uploads/default/original/2X/1/1629fba2c3d9b96a5720615e33032d983a24a299.png)--> 
![](/images/myr/p011.png) <br>

php.ini 查找 oneapm 配置模块

<!--![](http://club.oneapm.com/uploads/default/original/2X/0/06bd130efec9795fc82539c8980ce9eb2694a085.png)--> 
![](/images/myr/p0120.png) <br>

未修改前的配置

<!--![](http://club.oneapm.com/uploads/default/original/2X/8/8af9d2bfe0cf02d81af5c222eb082bfdfa4847ba.png)--> 
![](/images/myr/p013.png) <br>

加了注释的配置

2、杀死 oneapm-daemon 进程。

<!--![](http://club.oneapm.com/uploads/default/original/2X/7/7d5018d27b73245670048165846996184ddf0bc4.png)--> 
![](/images/myr/p014.png) <br>

(说明：defunct 进程有的存在有的不存在，并不影响使用)

3、重启 php、apache 或者 nginx。

<!--![](http://club.oneapm.com/uploads/default/original/2X/8/8dad21d5e0a53df6e7a464abf9c5f715f9397f74.png)--> 
![](/images/myr/p015.png) <br>

重启之后 ps -ef|grep oneapm-daemon 查询进程，已经不存在，这个时候探针已经成功关闭。

## <h2 id="2">Linux 开启探针</h2> <br>

1、打开 php.ini 文件，找到 oneapm 配置模块，并去掉 ;extension=oneapm.so 前面的注释。

<!--![](http://club.oneapm.com/uploads/default/original/2X/1/1629fba2c3d9b96a5720615e33032d983a24a299.png)--> 
![](/images/myr/p016.png) <br> 
php.ini 查找 oneapm 配置模块

<!--![](http://club.oneapm.com/uploads/default/original/2X/8/8af9d2bfe0cf02d81af5c222eb082bfdfa4847ba.png)--> 
![](/images/myr/p017.png) <br>
加了注释的配置

<!--![](http://club.oneapm.com/uploads/default/original/2X/0/06bd130efec9795fc82539c8980ce9eb2694a085.png)--> 
![](/images/myr/p018.png) <br>
去掉注释的配置

2、保存配置。重启 php、apache 或者 nginx，可以看到 oneapm-daemon 也会随之重启，这时候开启探针成功。

<!--![](http://club.oneapm.com/uploads/default/original/2X/8/86360f69eedf5174eff76eb245403421c5129ead.png)--> 
![](/images/myr/p019.png) <br>
如果重启之后 oneapm-daemon 未能启动，可以手动重启。

sudo /usr/bin/oneapm-daemon

## <h2 id="3">Linux 探针卸载</h2> <br>

1、找到您的 php.ini 文件，将其保存至安全的路径。

<!--![](https://oneapm.kf5.com/attachments/download/339137/00156567e979174521befa976bd2520)-->
![](/images/myr/p020.png)

2、进入 OneAPM 安装脚本所在目录，执行命令进行卸载

命令: ./oneapm-install uninstall

<!--![](https://oneapm.kf5.com/attachments/download/274094/00156209621630054f1483dcfe73f46)-->
![](/images/myr/p021.png)

<!--![](https://oneapm.kf5.com/attachments/download/274097/0015620963c7356d1f6ff463326b37c)-->
![](/images/myr/p022.png)

3、选择 PHP 的安装目录，如果您的 PHP 的安装目录没有在 OneAPM 探针搜索到的目录下(/usr/… 或 /opt/… 开头的目录下)，请选择 2 并用安装脚本的提示命令搜索您的安装目录

<!--![](https://oneapm.kf5.com/attachments/download/274102/001562096a79484100f92d26acb8527)-->
![](/images/myr/p023.png)

4、输入安装目录

<!--![](https://oneapm.kf5.com/attachments/download/274120/001562097476f4155e938847330dbec)-->
![](/images/myr/p024.png)

5、回车

<!--![](https://oneapm.kf5.com/attachments/download/274110/001562097342dcf523b253cb804bad4)-->
![](/images/myr/p025.png)

6、卸载完毕


