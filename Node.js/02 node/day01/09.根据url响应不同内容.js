// 1. 导入http模块
const http = require('http')

// 2. 创建一个web服务器
const server = http.createServer()

// 3. 启动服务器
// 端口号 0-65535
server.listen(3000, () => {
    console.log('server is running at port 3000')
})

// 4. 监听request事件，回调函数里面有两个参数
server.on('request', (req, res) => {
    // 1. console.log(req.url) /
    // 2. 设置响应头  res.setHeader
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/' || req.url === '/index.html'){
        res.end('<h1>首页</h1>')
    } else if (req.url === '/about.html'){
        res.end('<h1>about页面</h1>')
    } else {
        res.end('<h1>404 not found</h1>')
    }
})