# 阿里云常见问题
阿里云 ECS Linux 服务器 php-fpm 启动报错：allow\_call\_time\_pass_reference 处理方法:

**问题描述：**

<!--![](http://club.oneapm.com/uploads/default/original/2X/6/6aaecb6917c176d965ebf5fa8ed87bbd0ae85a48.png)-->
![](/images/myr/011.png)

    php-fpm 启动失败，报错：/etc/init.d/php-fpm restart Gracefully shutting down php-fpm warning， no pid file found - php-fpm is not running ? Starting php-fpm

    Fatal error:  Directive 'allow_call_time_pass_reference' is no longer available in PHP in Unknown on line 0

**分析解决：**

failed 现象一般是由于 php.ini 配置中开启了 allow\_call\_time\_pass_reference = on 参数导致，在 php 目前的高版本中未对此参数提供兼容支持，需要注释掉。

    在 php.ini 中找到对应条目，前面加；号注释后，重新启动 php-fpm 即可。
