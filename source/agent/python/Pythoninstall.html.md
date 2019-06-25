# Python Agent 安装
以 ubuntu 14.04 为例 （Flask 框架，Gunicorn 服务器）：
 
1.注册 OneAPM

注册 OneAPM，登录账号后点击左侧导航栏的应用程序。然后您可以在右侧页面中看到具体的安装步骤，选择编程语言：Python。您也可以根据本文的安装步骤进行安装。

(1) 若是第一次登陆账号，则无需点击页面右上角的添加，页面将自动跳转到安装步骤页面。<br>
(2) 如果你已经安装过其他的应用程序，则需要点击右上角的添加，选择 python。

![](/images/py1.png)

![](/images/py2.png)

2.获取授权编号（LICENSE_KEY）

![](/images/py3.png)

3.安装 OneAPM Python Agent<br>

3.1 有 2 种安装方法，一种是用 pip 安装 pip install -i http://pypi.oneapm.com/simple --upgrade blueware，（若使用新版本 pip (>= 7.0.0)，需添加 --trusted-host pypi.oneapm.com）

![](/images/py4.png)

3.2 若您的机器上尚未安装 pip，可以用另一种方式，下载安装包，解压缩，直接运行

![](/images/py5.png)

![](/images/py6.png)

![](/images/py7.png)

4.在应用所在目录，生成配置文件，执行指令： blueware-admin generate-config LICENSE_KEY = blueware.ini 

![](/images/py8.png)

5.接下来，重启应用，指定 BLUEWARE\_CONFIG\_FILE 路径，在命令前添加 'blueware-admin  run-program ’，即运行 BLUEWARE\_CONFIG\_FILE=blueware.ini  blueware-admin run-program gunicorn  -w 4 run_test:app

![](/images/py9.png)

6.静候 5 分钟，开启您的 OneAPM 之旅
Python agent 安装对于不同应用，有一些不同的部署方式，更多部署方式，请参考：[Python Agent 集成][10]



  [10]: https://oneapm.kf5.com/posts/view/43714