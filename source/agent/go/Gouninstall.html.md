# Go Agent 卸载/停用  
如果您想完全卸载或停用Go探针，您需要进行如下步骤：

（1）删除您在自己的代码上添加的探针相关内容包括配置对象config、实例对象Application、插入到路由Handler的探针实例app。 
  
配置对象config代码： 

    func main() {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		panic(err.Error())
	}
	iniFilePath := dir + "/blueware-agent.ini"
	cfg := blueware.NewConfig(iniFilePath)
	...
    }  
 
实例对象Application代码:  
  
    var (
	app blueware.Application
    )

    func main() {
	...
	app, err = blueware.NewApplication(cfg)
	if nil != err {
		fmt.Println(err)
		os.Exit(1)
	}
    ...
    }
    
插入到路由Handler的探针实例app代码：
 
    func main() {
    ...
    http.HandleFunc(blueware.WrapHandleFunc(app, "/", index))
	http.HandleFunc(blueware.WrapHandleFunc(app, "/notice_error", noticeError))
	
	http.ListenAndServe(":8000", nil)
    }
 

（2）卸载collector  
使用sh daemon-install.sh uninstall进行collector的卸载。

