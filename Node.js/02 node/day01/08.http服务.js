// 我们是作为后端，启动了一个服务器
// 1. 导入http模块
const http = require('http')

// 2. 创建一个web服务器
const server = http.createServer()

// 3. 启动服务器
// 端口号 0-65535
server.listen(3000, () => {
    console.log('server is running at port 3000')
})

// 4. 监听request事件，做出响应
// request就是监听请求的意思，当有请求过来了，我就干嘛

// cbFn中第一个参数   请求相关的信息
//       第二个参数， 处理响应相关的东西
server.on('request', (request, response) => {
    // 1. request.url
    // 中文路径传过来之后，会被编码  
    console.log(decodeURIComponent(request.url))
    // console.log(request.url)
    // 2. request.method 请求方法
    console.log(request.method)

    // console.log('有人访问我的服务器啦')

    // response 响应 ===> 返回给前端的一些东西 
    // Ajax学了状态码  
    // 200 300 400 500
    // 1. 返回给浏览器状态码
    response.statusCode = 200

    // 2.设置响应头
    // Content-Type 返回给浏览器的内容是什么格式的
    // response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    // 3. response.end('内容') 返回内容给浏览器
    // response.end('我们现在是渣渣后端')
    response.end('<h1>大标题</h1>')
    // response.end('nice to meet u:)')


})

// ipconfig 可以查到本机的ip地址
// 192.168.19.66:3000