// 1. 导入 http 模块 
const http = require('http');

// 2. 创建 web 服务器实例 
const server = http.createServer();

// 3. 启动服务器
server.listen(3000, () => {
    console.log(`server is running.... at 3000`);
});

// 4. 为服务器实例绑定 request 事件，监听客户端的请求 

server.on('request', (req,res) => {
    // 这里要处理客户端的请求
    // request 请求
    console.log(decodeURIComponent(req.url))

    res.statusCode = 200
    // 响应的内容中文就不会有乱码了
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    console.log(req.url)
    if(req.url === '/' || req.url === '/index.html'){
        res.end('<h1>首页</h1>')
    } else if (req.url ==='/about.html'){
        res.end('<h1>about页面</h1>')
    } else {
        res.end('<h1>404 not found</h1>')
    }

    
});

// 本机地址
// 127.0.0.1:3000  ==> localhost:3000
// 192.168.22.76:3000