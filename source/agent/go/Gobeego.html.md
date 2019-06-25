# Go Agent 支持beego  
Go 2.0.0版本持beego1.11版本框架。在Go-Agent文件夹的examples/server/beego_main.go中包含beego框架的example。

## 如何使用？

###引用
在main函数中引用下面内容：  
        
    "go-agent/blueware"  
    "go-agent/blueware/framework/beego" 

###函数和方法使用：

**在探针配置文件的位置，新增一个app**

    dir, err := filepath.Abs(filepath.Dir(os.Args[0]))  
    if err != nil {  
    panic(err.Error())  
    }
    iniFilePath := dir + "/blueware-agent.ini"
    cfg := blueware.NewConfig(iniFilePath)
    app, err = blueware.NewApplication(cfg)
    if nil != err {
    fmt.Println(err)
    os.Exit(1)
    }  

**"beego.Controller" 替换为:=> "oneapm_beego.Controller" 例:**   

    type MainController struct
    {

    oneapm_beego.Controller

    }

    func (this *MainController) Get() {

    this.Ctx.WriteString("hello world")

    }

    func main(){

    ....

    oneapm_beego.AppTransmission(app)

    beego.Router("/", &MainController{})

    ....

    }

**beego框架func(ctx *context.Context){}*** 

    ns_1 := beego.NewNamespace("ccc",
        beego.NSGet("get", func(ctx *context.Context){
                txn := oneapm_beego.BeegoStartTransaction("/ccc/get", ctx)
                ctx.Output.Body([]byte("hello world"))
                defer txn.End()
        }),
    )
    beego.AddNamespace(ns_1)

**beego框架func(w http.ResponseWriter, r *http.Request){}：***  

    beego.Handler("/api", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

    txn := oneapm_beego.HttpStartTransaction("/asd", w, r)

    defer txn.End()

    }))

**数据库第三方：**  
**controller中：** 
 
    type MainController struct {

    oneapm_beego.Controller

    }

    func (this *MainController) Get() {

    txn := oneapm_beego.GetTransaction()

    s := blueware.DatastoreSegment{
         StartTime: blueware.StartSegmentNow(txn),
        Product: blueware.DatastoreMySQL,
        Collection: "users",
        Operation: "INSERT",
        ParameterizedQuery: "INSERT INTO users (name, age) VALUES ($1, $2)",
        QueryParameters: map[string]interface{}{
                "name": "gwdfce",
                "age": 75,
        },
        Host: "mysql-server-1",
        PortPathOrID: "3306",
        DatabaseName: "my_database_2",
    }
    defer txn.End()
    defer s.End()

    this.Ctx.WriteString("hello world")

    }

    func main(){

    ....

    oneapm_beego.AppTransmission(app)

    beego.Router("/", &MainController{})

    ....

    }
**其它**  

      ns_1 := beego.NewNamespace("ccc",
      beego.NSGet("get", func(ctx *context.Context){
                txn := oneapm_beego.BeegoStartTransaction("/ccc/get", ctx)
                s := blueware.DatastoreSegment{ StartTime: blueware.StartSegmentNow(txn),
                        Product: blueware.DatastoreMySQL,
                        Collection: "users",
                        Operation: "INSERT",
                        ParameterizedQuery: "INSERT INTO users (name, age) VALUES ($1, $2)",
                        QueryParameters: map[string]interface{}{
                                "name": "Dracula",
                                "age": 439,
                        },
                        Host: "mysql-server-2",
                        PortPathOrID: "3306",
                        DatabaseName: "my_database_2",
                }
                defer txn.End()
                defer s.End()
                ctx.Output.Body([]byte("hello world"))
                }),
        )
      beego.AddNamespace(ns_1)