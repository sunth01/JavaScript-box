// 引入Koa
const Koa = require('koa');
// 实例化app
const app = new Koa();

// 需要些一个async进行异步处理，
// 然后koa将请求对象和响应对象都封装到了ctx这个对象中
app.use(async (ctx,next) => {
    console.log('a-1')
    await next() // 执行next之后，one-2 不打印了，直接跳到下一个中间件
    console.log('a-2')
    
}).use(async (ctx,next) => {
    console.log('b-1') 
    await next()
    console.log('b-2')
    
}).use(async (ctx,next) => {
    console.log('c-1') 
    await next() 
    console.log('c-2')
});
// 执行顺序如下：
// a1 -> b1 -> c1 -> c2 ->  b2 -> a2

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
});