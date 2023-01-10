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
// context ctx 它把Node的request和response封装到这个对象中了,里面有很多属性和方法 
app.use(async ctx => {
    // 1. 请求 
    // Node ===> request.url 
    // 1. ctx.url 
    // 2. ctx.method
    // 3. ctx.ip  ===> 请求的ip
    // 4. ctx.header  请求头
    console.log(ctx.url)
    console.log(ctx.method)
    console.log(ctx.ip)
    console.log(ctx.header)

    // 2. 响应  response 
    // 2.1 状态码 ctx.status
    // 2.2 设置响应头 ctx.set(key, value)
    // 2.3 res.end()  ===> ctx.body = 
    console.log(ctx.status)
    ctx.set('myHeader', 'string')
    ctx.status = 401

    ctx.body = 'Hello World'
})

// 4. 监听端口
app.listen(3001, () => {
    console.log(`koa is running at http://${ipv4()}:3001`)
})