const Koa = require('koa')
const getIpv4 = require('./utils/index')

const app = new Koa()

// 所有的请求都会进入到这个函数中处理

app.use(async (ctx, next) => {
    console.log('a - 1')
    await next()
    console.log('a - 2')
})
// 第二个中间件
app.use(async (ctx, next) => {
    console.log('b - 1')
    await next()
    console.log('b - 2')
})
app.use(async (ctx, next) => {
    console.log('c - 1')
    await next()
    console.log('c - 2')
})

// 洋葱模型 ，栈结构， 先进后出 ， 以next为分隔 

// 执行顺序 
// a-1  ->  b-1  -> c-1  -> c-2 ->  b-2  ->  a-2

// 保证中间件按照洋葱模型执行 
// 1. 一定要在下一次调用中间件next前面加上await，中间件函数前加async
// 2. 洋葱模型以next()为分隔

app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})