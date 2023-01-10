// 使用koa/router来处理不同的请求
// 1. 引入Koa
const Koa = require('koa')
const router = require('./router/index')
const cors = require('@koa/cors');
// 2. 实例化app
const app = new Koa()

// 导入ipv4方法
const ipv4 = require('./utils/index')

// 再router前面配置跨域
app.use(cors())
// 调用router的routes方法 需要加上
app.use(router.routes())

app.listen(3000, () => {
    console.log(`koa is running at http://${ipv4()}:3000`)
})