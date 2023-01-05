
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const cors = require('@koa/cors');

const { koaBody } = require('koa-body');

// // 自定义一个中间件
// const httpCORS = async (ctx, next) => {
//     // 设置响应头
//     ctx.set({
//         "Access-Control-Allow-Origin":"*",
//     })
//     // 中间件，一定要调用next()
//     await next()
// }

// app.use(httpCORS)  // 这里没有加括号

app.use(cors()) // 第三方 

// koa-body这个中间件一定要在路由中间件的前面！！
app.use(koaBody())
// 挂载路由中间件
app.use(router.routes())



const getIpv4 = require('./utils/index')
app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})