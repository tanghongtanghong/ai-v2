# PHP Agent 兼容环境和功能列表

兼容性和安装要求

我们支持的应用服务器和应用框架如下表所示：

类型


支持列表
OS


    CentOS 5.5 以上

    Ubuntu 11 以上

    RedHat  Enterprise Linux （RHEL） 5 or later

PHP版本

    PHP 5.3 及以上

    PHP 5.4 及以上

    PHP 5.5 及以上

    PHP 5.6 及以上

    PHP 7.0.9 及以上

    PHP 7.1

    PHP 7.2

    不支持 PHP 所有版本的 debug 版

数据库

    mysql [mysql ， pdo ， mysqli]

webServer

    Apache 2.2 或 2.4 mod_php 模式
    （线程安全与非线程安全）

    任何用通过 FastCGI 连接 php-fpm （如 Nginx）

明确不支持的框架

    Yaf （phalcon 暂不支持）

可以安装的框架

    所有基于 PHP 语言写的框架都可以安装 PHP-Agent （对于yaf , phalcon 这种c语言写的 PHP 框架不支持）

    PHP 语言写的框架中支持的有 ci、thinkphp、yii、Laravel。

    已测试框架有： wordpress ， onethink ， discuz 。

兼容的扩展

    bz2
    calendar
    Core
    ctype
    curl
    date
    dom
    ereg
    exif
    fileinfo
    filter
    ftp
    gd
    gettext
    gmp
    hash
    iconv
    imap
    json
    ldap
    libxml
    mysql
    mysqli
    odbc
    openssl
    pcntl
    pcre
    PDO
    pdo_mysql
    PDO_ODBC
    pdo_sqlite
    Phar
    readline
    Reflection
    session
    shmop
    SimpleXML
    sockets
    SPL
    sqlite3
    standard
    tokenizer
    wddx
    xml
    xmlreader
    xmlrpc
    xmlwriter
    xsl
    zip
    zlib

备注说明：

    所有基于 PHP 语言写的框架都可以安装 PHP Agent（对于yaf这种c语言写的PHP 框架不支持）

    PHP 语言写的框架中， MVC 单一入口模式的，对用户数据展示的不够友好。需要继续优化。因为不能根据参数区分出真正想看到的页面数据。

    已测试框架有： wordpress ， onethink ， discuz 。 onethink 这种单一入口（每次都是经过index.php来路由的）。
