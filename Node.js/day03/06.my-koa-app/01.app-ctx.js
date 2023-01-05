
const Koa = require('koa')
const app = new Koa()
const getIpv4 = require('./utils/index')

// app.use(fn)  
app.use(async ctx => {
    // ctx ==> context 上下文 
    // 它 把 Node里的request和response对象封装到ctx中了， 里面有很多方法属性
    // Node ==>  request  
    // 
    // console.log(ctx.request.url)
    // console.log(ctx.request.method)

    // koa没那么傻
    // 请求的request可以省略
    console.log(decodeURIComponent(ctx.url))
    // console.log(ctx.method)
    console.log(ctx.ip) 
    // console.log(ctx.header)

    // 响应 
    // ctx.response.xxx
    // 响应状态码
    // response.statusCode
    // ==> 
    // console.log(ctx.status) // 状态码
    ctx.status = 200
    // 设置响应头
    ctx.set('wahhh', 'hhhh')
    ctx.body = 'hello world' // 使用ctx.body 返回数据
})

// ==> app.use表示，对于任何请求，都会调用async这个异步函数处理

app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})