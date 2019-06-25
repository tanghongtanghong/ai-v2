# OSX 环境下部署 Docker 并安装 Ruby 探针
本文介绍如何在 OSX 环境下部署 Docker 并安装 Ruby 探针。Docker 官方文档提供了 OSX 环境下的安装步骤和学习课程。

示例使用的运行系统环境为 Mac OSX Yosemite 10.10.4 版本，下载的 Docker 安装包为：DockerToolbox-1.8.2a.pkg。

安装后会出现2个应用：Docker Quickstart (终端操作)和 TerminalKitematic (Beta)(图形界面操作)。

要在 OSX 环境下运行 Docker，需要先运行 Docker Quickstart，会出现下图：
  ![](/images/rb2.png)


 1.新建立一个目录 my_rails。
 
 2.在 my_rails 目录下创建 Dockerfile，内容如下：

``` stylus
FROM ruby:2.2
RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf
 /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y mysql-client postgresql-client sqlite3 
 --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN gem source -r https://rubygems.org/
RUN gem source -a https://ruby.taobao.org
RUN gem install rails -v 4.2.4
RUN mkdir /myapp
WORKDIR /myapp
RUN rails new . --force --skip-bundle
ADD Gemfile /myapp/
RUN bundle install 
ADD oneapm.yml /myapp/config/
```

 <br>
 3.在 my\_rails 目录下， 创建 Gemfile,将需要安装的 gem 提前写好。请注意：最好改一个 source，默认的 https://rubygems.org  总是报错 ssl 联网超时，改成淘宝的源 https://ruby.taobao.org 就没有这个问题。本文主题是安装 Ruby 探针，故需要将 gem ‘oneapm_rpm’放到 Gemfile。

 4.创建 oneapm.yml，并配置选项。
 
 5.在 my\_rails 目录运行 docker build -t my\_rails 。会看到 docker 正在创建镜像文件。创建成功后，用 docker images 查看会发现 my_rails 镜像已经存在。
 
 6.接下来可以运行 docker，开启我们的容器之旅了。
 

``` stylus
docker run -d -p 3000:3000 my_rails rails s -p 3000 -b ‘0.0.0.0'
docker run -d -p 3001:3001 my_rails rails s -p 3001 -b ‘0.0.0.0'
```
上面开启了2个 container，需要注意：

 - 要想从 OSX 环境访问需要使用 docker machine 所在的 ip（可使用 docker-machine ip default 命令查看) 
 - 启动 rails 时需要指定 bind 参数 “-b ‘0.0.0.0’”，确保容器外可使用ip+port 进行访问。
 7. 在浏览器中查看运行情况：
  ![](/images/rb3.png)
表明容器启动成功，看一下探针情况：
  ![](/images/rb4.png)
显示为2个探针实例，再查看一下探针的详情。
  ![](/images/rb5.png)
数据已抓回，验证成功。    


