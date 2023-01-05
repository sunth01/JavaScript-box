// 1. 导入http模块
const { unwatchFile } = require('fs')
const http = require('http')

// 2. 创建一个web服务器
const server = http.createServer()

// 3. 启动服务器
// 端口号 0-65535
server.listen(3030, () => {
    console.log('server is running at port 3030')
})

// 4. 监听request事件，做出响应
// request就是监听请求的意思，当有请求过来了，我就干嘛
server.on('request', () => {
    // 
    console.log('hello world11111')
})

// ipconfig 可以查到本机的ip地址

server.on('request', (request, response) => {
    // request.url
    // console.log('hello world')
    // 中文路径传过来会被编码
    console.log('request.url', decodeURIComponent(request.url))
    //  console.log(request.url)
    // request.method 请求方法
    console.log(request.method)
    // response 响应 ===> 返回给前端的一些东西
    // 1. response.end('内容') 返回内容给浏览器
    // response.end('我们现在...')
    // response.end('nice to meet you哈哈哈哈哈')


    // response 响应 ===> 返回给前端的东西
    // 状态码:200 300 400 500
    // 返回给浏览器的状态码
    response.statusCode = 500

    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    // response.end('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')
    response.end('<h1>大标题</h1>')
    
})