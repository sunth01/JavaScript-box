const Koa = require('koa')
const getIpv4 = require('./utils/index')

const app = new Koa()

// 所有的请求都会进入到这个函数中处理
// 第一个中间件
app.use(async (ctx, next) => {
    ctx.body = 'hello koa - 1'
    // 如果不写next()， 后面的中间件不会执行
    await next()
    ctx.body = 'hello koa - 2'
})

// 第二个中间件
app.use(async ctx => {
    ctx.body = 'hello koa - 3'
})

app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})

// 1. 中间件中如果不调用 next() 函数， 执行权不会向下传递
// 2. 中间件的执行很像一个洋葱，但不是一层一层执行

// ==> 理解：中间件被 next() 方法分隔为两个部分
//  next()上面的部分会先执行， 下面的部分会在后续中间件执行全部结束之后再执行。