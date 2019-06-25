# AMH 云主机使用 OneAPM PHP Agent 方法

### 1.找到 php-fpm 配置文件，配置 chroot 目录位置

![](/images/amh1.png)

### 2.在 chroot 的目录位置创建 /etc/oneapm 目录

![](/images/amh2.png)

### 3.修改 oneapm-daemon 配置文件，添加 udspath 配置项，其中 /etc 后面的部分保持不变

![](/images/amh3.png)

### 4.重启 oneapm-damon

![](/images/amh4.png)