const Koa = require('koa')
const app = new Koa()
// 注册一个中间件
// fn中间件函数，接收两个参数，next表示调用下一个中间件函数

// 1. 如果第一个中间件不调用next(), 就不会下放控制权，执行下一个中间件
// 2. 中间件的洋葱模型，整个代码的执行顺序

// 以next为分隔，先执行本层中间件next前面的代码，再执行本层next以后的部分
// next以后的部分是，后面中间件函数执行完后再回过来执行‘
app.use(async (ctx, next) => {
    ctx.body = 'hello koa - 1'
    await next()
    ctx.body = 'hello koa - 3'
})

app.use(async (ctx, next) => {
    ctx.body = 'hello koa - 2'
})

app.listen(3000,() => {
    console.log('koa is running at port 3000')
})