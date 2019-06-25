#开启 debug
### 1.开启 Agent 的 Debug 模式

* 编辑 php.ini 配置文件，找到 [oneapm] 模块配置部分，通常在文件的尾部。

* 去掉 
> ;oneapm.loglevel="ERROR" 

这一行前面的分号; ，然后把配置项的值改为 DEBUG 。如下图：

<!--![](https://oneapm.kf5.com/attachments/download/166327/00155af3cea458196892b5c7dbaa4a2)-->
![](/images/myr/018.png)

* 重启 PHP 。

### 2.开启 Daemon 的 Debug 模式

* 编辑 /etc/oneapm/oneapm.cfg 配置文件。

* 修改 loglevel 的值为 debug 。如下图：

<!--![](https://oneapm.kf5.com/attachments/download/166332/00155af3db97b8d1ddb0b86b851fe0a)-->
![](/images/myr/019.png)

* 查看 daemon 的状态

```javascript
ps -ef | grep oneapm-daemon
```
<!--![](https://oneapm.kf5.com/attachments/download/166333/00155af3dedeab12b99ac79ab4fff88)-->
![](/images/myr/020.png)

* 停止 daemon

如果如上图所示，证明 daemon 状态正常，执行下面的指令。

```javascript

    sudo /etc/init.d/oneapm-daemon-service stop

```
如果上面指令没有生效，请使用下面指令。

```javascript

    sudo killall -9 oneapm-daemon

```
* 再次确认 daemon 状态

```javascript

    ps -ef | grep oneapm-daemon

```

如果 daemon 进程没有了，重新启动 daemon。

```javascript

    sudo /usr/bin/oneapm-daemon

```
