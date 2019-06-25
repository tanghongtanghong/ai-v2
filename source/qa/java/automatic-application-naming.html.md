# 应用程序自动命名如何配置

当配置文件中的 `enable_auto_app_naming` 配置开启后，探针会自动获取每个应用的名称。获取的方式有六种：

* 调用 `request.setAttribute("com.blueware.monitor.APPLICATION_NAME", MySpecialWebApp")`;
* `web.xml` 中配置 `servlet init param`
* `web.xml` 中配置 `Filter init param`
* `web.xml` 中配置 `context param`
* `web.xml` 中配置 `appName`（标签名：`display-name`）
* 自动获取 `ServletContentPath`（一般表现为 URL 中项目名称）

列表中的配置生效有优先级的控制，由上到下级别递减。
 
### 1. Request attribute

优先级最高的配置方式，应该尽量在 `transaction` 最早的时间配置 `app_name`
**Note**：只针对 `servlet request` 生效

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 ...
 String requestUri = httpServletRequest.getRequestURI(); 
 if (requestUri.startsWith("/my-special-request/")){
	 request.setAttribute("com.blueware.monitor.APPLICATION_NAME", "MySpecialWebApp");
 } ...
```

### 2. Servlet context

如果访问了多个 `servlet`，最早执行结束的 `servlet` 的配置生效

```java
<servlet>
 <servlet-name>SqlServlet</servlet-name>
 <servlet-class>test.SqlServlet</servlet-class>
 <init-param>
 	<param-name>com.blueware.monitor.APPLICATION_NAME</param-name>
 	<param-value>MyServletApp</param-value>
 </init-param>
</servlet>
```

### 3. Filter context

最早执行结束的 `filter` 的配置生效

```java
<filter> 
 <filter-name>SqlFilter</filter-name> 
 <filter-class>test.SqlFilter</filter-class> 
 <init-param> 
	<param-name>com.blueware.monitor.APPLICATION_NAME</param-name> 
	<param-value>MyFilterApp</param-value> 
 </init-param> 
</filter>
```
### 4. Web context

```java
<context-param>
 <param-name>com.blueware.monitor.APPLICATION_NAME</param-name>
 <param-value>MyWebApp</param-value> 
</context-param>
```
### 5. Display name

```java
<display-name>MyWebApp</display-name>
```
### 6. Context path

如果完整的一次请求地址，如 URL 为：`http://example.com/oneapm-axis2-ws/getWeather`:

* 请求 URI 是 **/oneapm-axis2-ws/getWeather**.
* context path 是 **/oneapm-axis2-ws**.
* 应用命名为 **oneapm-axis2-ws**.

这种方式获取的 **appName** 不是百分百准确，如果应用程序部署在 **ROOT** 下，这种方式是不生效的。

