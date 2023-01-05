const Koa = require('koa')
const getIpv4 = require('./utils/index')
// 引入koa-compose
const compose = require('koa-compose')

const app = new Koa()


const a1 = async (ctx, next) => {
    console.log('a - 1')
    await next()
}

const a2 = async (ctx, next) => {
    console.log('a - 2')
    await next()
}

const a3 = async (ctx, next) => {
    console.log('a - 3')
    await next()
}

// app.use(a1)
// app.use(a2)
// app.use(a3)
// 通过compose把中间件通过数组的方式合并为一个
app.use(compose([a1,a2,a3]))

app.listen(3000, () => {
    console.log(`my server is running at http://${getIpv4()}:3000`)
})