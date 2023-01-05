// 1. 导入 http 模块 
const http = require('http');
const path = require('path')
const fs = require('fs')

// 2. 创建 web 服务器实例 
const server = http.createServer();

// 3. 启动服务器
server.listen(3000, () => {
    console.log(`server is running.... at 3000`);
});

// 4. 为服务器实例绑定 request 事件，监听客户端的请求 
server.on('request', (req,res) => {
    // 这里要处理客户端的请求
    res.statusCode = 200
    // console.log(req.url)  ==> /clock.css
    // 我们是后端，我们是摆烂的后端 渣渣后端
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // '/' ==> 匹配到的是默认不带任何路径的那个URL
    let url = req.url
    if( url === '/' || url === '/index.html'){
        url = '/index.html'
    }
    // console.log(url)  ==> /clock.css
    // 拼接全局路径 
    const fullPath = path.join(__dirname,'www',url)
    console.log(fullPath)

    try{
        // 报错是因为 favicon.ico 找不到
        const resFile = fs.readFileSync(fullPath)
        res.end(resFile)
    } catch(err){
        // 处理其他找不到资源的问题
        res.statusCode = 404
        res.end('404 not found')
    }

});


// 本机地址
// 127.0.0.1:3000  ==> localhost:3000
// 192.168.22.76:3000

// Ctrl + j  
// 还可以 Ctrl + ` 也可以

