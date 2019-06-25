# Ruby Agent 安装方法
## 1. 注册登录 OneAPM
点击添加按钮，打开安装页面<br>
 ![](/images/rb1.png)



## 2. 下载 oneapm.yml
将文件放入应用的配置目录下，替换已有文件

``` stylus
oneapm.yml
```
## 3. 配置 license
将「License Key」写入配置文件「oneapm.yml」，并修改应用名称
## 4. 以 gem 形式安装 OneAPM Ruby Agent
在 Gemfile 中添加以下 gem:

``` stylus
gem 'oneapm_rpm'
```
在应用所属目录中执行 bundle 命令：

``` stylus
$ bundle install
```
结果如下：

``` stylus
Your bundle is complete!
Use 'bundle show [gemname]' to see where a bundled gem is installed.
```
## 5. 运行应用程序
静候5分钟后，若无应用程序相关性能数据展现，或安装过程中出现问题请联系 OneAPM 获取技术支持：support@oneapm.com 或[提交工单][2]。


 
  [2]: https://oneapm.kf5.com/request/new/