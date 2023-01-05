//  1. 新建一个空文件夹 作为项目使用
//  2. npm init -y 初始化
//  3. npm i koa  安装koa
//  4. 修改package.json ==> scripts  "start":"nodemon app.js"
//     ==> npm start  -->  nodemon app.js


//  5. 新建了一个app.js 在这里，逻辑代码都写到里面的，启动一个服务
//   koa是node的web框架

//  5.1 引入 Koa 
//  5.2 实例化 app   const app = new Koa()
//  5.3 app.use() 注册中间件 （挂载）
//  5.4 监听端口 app.listen(3000, ()=> {})

// ==>  PS. 封装了一个自己的模块 getIPv4, 放到了utils这个文件里面