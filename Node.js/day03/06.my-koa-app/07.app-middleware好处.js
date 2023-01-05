const Koa = require('koa')
// 引入axios
const axios = require('axios');
const getIpv4 = require('./utils/index')

const app = new Koa()

// 所有的请求都会进入到这个函数中处理

// 需求：给百度发一个请求，记录一下这个请求的耗时

// 处理跨域请求

app.use(async (ctx, next) => {
    
    const start = +new Date()
    await next()
    const delta = +new Date() - start
    console.log(delta) // 225ms 
    // 获取请求得到的数据
    // console.log(ctx.state.baiduHTML)
    
})
// 第二个中间件 可以在这里发请求
app.use(async (ctx, next) => {
    // 请求百度
    const url = 'https://www.baidu.com/'
    // const res = await axios.get(url)
    // console.log(res)
    ctx.state.baiduHTML = await axios.get(url)
})


app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})