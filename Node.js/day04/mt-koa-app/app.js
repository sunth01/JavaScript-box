// 用koa来启动一个web服务

// 1. 引入Koa
const Koa = require('koa')
// 2. 实例化app
const app = new Koa()
// 导入ipv4方法
const ipv4 = require('./utils/index')

// 3. app.use(async fn)   
// app.use 为app这个应用，添加fn这个中间件
// app.use 表示，对于任何请求，都会调用async这个函数来处理

// fn这个回调函数 自动接收两个参数
// 1.  ctx  ==> context 上下文环境
// 2.  next  表示调用执行下一个中间件 
// context ctx 它把我们的request和response封装到这个对象中了 
app.use(async ctx => {
    // ctx.body ===> res.end()
    ctx.body = 'Hello World'
})

// 4. 监听端口
app.listen(3111, () => {
    console.log(`koa is running at http://${ipv4()}:3111`)
})
