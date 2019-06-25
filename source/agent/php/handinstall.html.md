# PHP Agent 手动安装
 
* [Linux 手动安装](#1)<br>

<h2 id="1">Linux 手动安装</h2>

一、获取相关信息

  1.获取 php 版本信息

```
php -v
```
    
![](/images/myr/s001.png)
    
2.获取 php 扩展目录
       
```
php -i|grep -i "extension_dir“
```

![](/images/myr/s002.png)
      
3.查看 php 是否是线程安全版本
       
```
php -i|grep -i "Thread Safety”
```       
![](/images/myr/s003.png)
       
4.查看系统为 x86 还是 x86_64

![](/images/myr/s004.png)
        
从上面的操作可以知道
        
PHP 版本 ： 5.5.15
        
PHP 扩展目录：
        
/usr/local/php5/lib/php/extensions/no-debug-non-zts-20121212
        
PHP 是否为线程安全版本 ： 否
        
系统：x86_64
        
二、安装

PHP 探针分为两部分：oneapm-daemon 和 PHP 扩展两部分（oneapm.so）
        
PHP 扩展部分负责搜集数据，oneapm-daemon 负责合并数据并定时发送给 Server 端。
        
下载安装包到本地后，解压，并进入安装目录
        
```
tar zxvf OneAPM_PHP_Agent_2.5.1-b.tar.gz && cd oneapm-php-install-b
```
查看目录结构
        
![](/images/myr/s005.png)
        
* 1. 安装 PHP 扩展 ( oneapm.so)
         
根据第一步得到的信息，我们需要的 PHP 扩展为 agent/x64 下的 oneapm-php5.5.so
         
```
\cp -p agent/x64/oneapm-php5.5.so 
```
         
```
/usr/local/php5/lib/php/extensions/no-debug-non-zts-20121212/oneapm.so
```
修改 php.ini 文件，添加
    
```
oneapm.key="Your License"
extension=oneapm.so
oneapm.appname="PHP Application"
oneapm.tier_name="PHP_TIER" （企业版专有）
oneapm.cross_application_tracer.enabled=true （企业版专有）
```
          
![](/images/myr/s006.png)
          
创建 log 目录
          
```
mkdir -p /var/log/oneapm/ && chmod 777 /var/log/oneapm/
```
          
* 2. 安装 oneapm-daemon
           
创建 oneapm-daemon 配置文件目录
          
```
mkdir -p /etc/oneapm/ && chmod 755 /etc/oneapm
```
          
拷贝 oneapm-daemon 配置文件
          
```
\cp -p scripts/oneapm.cfg.template /etc/oneapm/oneapm.cfg
```
          
拷贝 oneapm-daemon 二进制程序
          
```
\cp -p daemon/oneapm-daemon-x64 /usr/bin/oneapm-daemon
```
          
修改 vi /etc/oneapm/oneapm.cfg 中的配置 （企业版）
          
```
collector_host=Your Enterprise Server IP
port=Your port
```
           
![](/images/myr/s007.png)
          
三、 启动
   
* 1.	启动，停止，查看 oneapm-daemon
             
启动：直接在命令行输入 oneapm-daemon 回车
             
停止：oneapm-daemon -s stop

查看：ps -ef|grep oneapm-daemon
             
![](/images/myr/s008.png)

             
* 2. 重启 Apache 或 php-fpm 使 oneapm.so 加载到 PHP 中
               
service httpd restart 或
               
service php-fpm restart

