// 用koa来启动一个web服务

// 1. 引入Koa
const Koa = require('koa')
// 2. 实例化app
const app = new Koa()
// 导入ipv4方法
const ipv4 = require('./utils/index')

const axios = require('axios')

// 需求，给百度发一个请求，我们要统计一下，请求的耗时 ， 并且想要得到返回的数据

// 3. app.use(async fn)   
app.use(async (ctx, next) => {
    // 在第一个中间件函数中，我们来处理耗时的统计
    console.log('a - 1')
    const start = Date.now()
    console.log(start)
    await next()
    const delta = Date.now() - start

    // 我们还可以在在第一个中间件中，取到后面的中间件的一些执行结果
    // console.log(delta)
    console.log(ctx.state.baiduHTML)
})

app.use(async (ctx2, next) => {
    // 这里处理发送请求的逻辑
    // const res = fetch('http://baidu.com').then(res => res.json())
    // console.log(res)
    ctx2.state.baiduHTML = await axios.get('http://baidu.com')
    // console.log(res)
})

// 4. 监听端口
app.listen(3000, () => {
    console.log(`koa is running at http://${ipv4()}:3000`)
})