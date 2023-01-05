// 1. 导入 http 模块 
const http = require('http');

// 2. 创建 web 服务器实例 
const server = http.createServer();

// 3. 启动服务器
server.listen(3000, () => {
    console.log(`server is running.... at 3000`);
});

// 4. 为服务器实例绑定 request 事件，监听客户端的请求 
// 当客户端发送请求到服务器的时候，会触发这个事件
// request 形参
// response 响应
server.on('request', (req,res) => {
    // 这里要处理客户端的请求
    // request 请求
    console.log(decodeURIComponent(req.url))
    // console.log(req.method)

    // 响应~~~~~~
    res.statusCode = 200
    // 响应的内容中文就不会有乱码了
    // 我 ==> 服务器， 告诉 浏览器 ==》 我返给你的数据，是下面这个格式
    // res ==> response  ， 服务期告诉浏览器的  ==> 响应
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // 把返回给浏览器的信息，放到 res.end()
    res.end('今天心情很美丽')
});

// 本机地址
// 127.0.0.1:3000  ==> localhost:3000
// 局域网的地址 : 192.168.22.76:3000