// 使用koa/router来处理不同的请求
// 1. 引入Koa
const Koa = require('koa')
// 导入koa/router
const Router = require('@koa/router')
// 2. 实例化app
const app = new Koa()
const router = new Router()
// 导入ipv4方法
const ipv4 = require('./utils/index')

// 3. 配置路由
router.get('/news', async (ctx, next) => {
    // 所有访问/news这个路由，都会在这里处理
    console.log('GET --- news')
    ctx.body = 'hello news Router'
})

router.get('/list', async (ctx, next) => {
    // 所有访问/news这个路由，都会在这里处理
    console.log('GET --- news')
    ctx.body = 'list'
})

// 调用router的routes方法 需要加上
app.use(router.routes())

app.listen(3110, () => {
    console.log(`koa is running at http://${ipv4()}:3110`)
})