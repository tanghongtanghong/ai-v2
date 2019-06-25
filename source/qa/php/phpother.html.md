# PHP其它常见问题
## 安装时出现 Segmentation fault 错误，造成安装失败

### 故障说明
在您安装部署 PHP 探针，输入 license 和 path 后，可能会出现如下情况：

错误提示探针安装时出现了 Segmentation fault 。

### 故障分析
此时您可以输入 php -m 命令，查看执行结果： 

可以看到 php 环境中确实存在 Segmentation fault 错误。因此，必须先修复自身 php 环境问题，才可以正确安装 php 探针。

### 解决方案

禁用 Zend Guard Loader 扩展后，问题解决。

* * * * *
## ERROR: license is NULL， please modify oneapm.key

### 故障说明

安装提示正常，但是看不到数据，在 oneapm-agent.log 中出现错误


```
ERROR: license is NULL， please modify oneapm.key=[your license] in php.ini
```

### 解决方案

将 [oneapm] 配置部分放到 php.ini 中第一行，即所有的配置之前。OneAPM 默认放置在 php.ini 中 Module Settings 下面。

### 实施步骤：

修改完之后保存配置文件。重启 PHP。Apache 服务器请重启 httpd，Nginx 请重启 php-fpm。

* * * * *

## Fatal error ：Allowed memory size of XXXX bytes exhausted

### 故障说明

PHP 应用运行过程中出现 Fatal error ：Allowed memory size of XXXX bytes exhausted。表示 PHP 内存耗尽。

<!--![](http://udeskpub.qiniudn.com/php-1422614140.png)-->
![](/images/myr/017.png)

### 解决方案

添加 php.ini 中的 memory\_limit 的配置参数。写入 memory_limit = 256M （建议值） 。
