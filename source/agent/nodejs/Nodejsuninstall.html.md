# Node.js Agent 卸载/停用
**停用**：<br>
去除对探针包的 require() <br><br>
**卸载**：<br>
安装的三个步骤反过来：<br>
1、去除客户主程序里的 require() 探针包语句；<br>
2、删除探针包配置文件；<br>
3、通过 npm 卸载探针包.<br>