# Ruby Agent 卸载/停用
**方法一：**<br> 
修改下 oneapm.yml monitor_mode: false<br>
重启应用<br>

**方法二：**<br>
Gemfile 中去掉gem 'oneapm_rpm'<br>
bundle install 重启应用<br>