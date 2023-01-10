// 用koa来启动一个web服务

// 1. 引入Koa
const Koa = require('koa')
// 2. 实例化app
const app = new Koa()
// 导入ipv4方法
const ipv4 = require('./utils/index')

// 3. app.use(async fn)   
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


// 执行顺序： a1 -> b1 -> c1 -> c2 -> b2 -> a2 

// 以next作为分隔，执行每一个中间件next前面的代码。
// 执行完之后，再回过头来，按着洋葱模型，执行next后面部分的代码

// 4. 监听端口
app.listen(3000, () => {
    console.log(`koa is running at http://${ipv4()}:3000`)
})


// 保证中间件按着洋葱模型的结构执行的必要条件
// 1. async await , next前面的await不要忘记了
// 2. 洋葱模型 以next为分隔