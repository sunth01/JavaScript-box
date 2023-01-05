// middleware  ==> 中间件
// 中间件的本质就是函数，定义一个中间件就是定义一个函数

// 怎么将一个函数作为中间件使用呢？
// app.use(async fn) 
// 使用app.use()方法注册中间件
// 给这个app挂载了中间件

// 中间件函数自动接收两个参数
// 第一个参数 ctx 上下文 
// 第二个参数 next 表示调用下一个中间件函数