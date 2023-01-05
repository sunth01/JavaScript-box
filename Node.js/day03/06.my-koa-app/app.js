// 1. 引入Koa 
const Koa = require('koa')
// 2. 实例化app
const app = new Koa()

// require导入使用
const getIpv4 = require('./utils/index')

// 3. app.use(fn)  为app这个应用，添加fn这个中间件
//    app.use(async fn)
//    异步函数默认接收两个参数， ctx 上下文 context的简写  next
app.use(async ctx => {
    // res.end('返回给浏览器')
    ctx.body = 'hello world'
})

// ==> app.use表示，对于任何请求，都会调用async这个异步函数处理

// 4. 监听端口
app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})