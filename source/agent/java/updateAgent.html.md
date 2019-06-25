# 更新Agent

1. 登陆 OneAPM 账号

2. 点击添加应用，下载最新版 Agent ZIP 包

3. 解压出 OneAPM_java_agent_x.x.x.zip 中的 OneAPM目录

4. 替换掉原有版本的 OneAPM，至最新版本。

5. oneapm.properties 里的内容需要按照之前的内容重新配置下，建议更新前，先备份下 OneAPM/oneapm.properties

6. 所以工作配置完后，重启应用服务器

7. 查看新版本的 Agent 是否可以正常地向 OneAPM 发送数据
