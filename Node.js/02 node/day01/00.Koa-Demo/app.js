// 引入Koa
const Koa = require('koa');
const router = require('./router') // index.js 可以省略

const { koaBody } = require('koa-body');

const app = new Koa();

const httpCORS = async (ctx,next)=>{
    ctx.set({
        "Access-Control-Allow-Origin":"*", // 允许访问服务器资源的URL
        "Access-Control-Allow-Headers":"Content-Type", // 请求头
        "Access-Control-Allow-Methods":"POST,GET,PUT,DELETE,OPTIONS",// 请求方式
        "Access-Control-Allow-Credentials":"true" //
    })
    if(ctx.method === "OPTIONS"){
        ctx.status = 200;
    } else {
      await next()
    }

}
app.use(httpCORS)

app.use(async (ctx, next) => {
    console.log('-----start---')
    console.log(`${ctx.method} --- ${ctx.ip}`)
    await next()
    console.log('-----end-----')
})

app.use(koaBody()); 
// 调用router实例的routes()方法
// 将router模块挂载到了app上
app.use(router.routes())
// 这个时候，我们实现了路由的简单拆分

app.on('error', (err, ctx) => {
    console.log(`请求${ctx.url}时发生了错误`)
    console.error(err)
})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
});