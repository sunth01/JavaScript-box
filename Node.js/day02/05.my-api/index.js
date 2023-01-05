// 1. 导入 http 模块
const http = require('http')

// 导入db 自己写的模块，导入要写路径，可以省略index
const db = require('./db')
// 导入日期处理模块
const dayjs = require('dayjs')

// 2. 创建 web 服务器实例
const server = http.createServer()

// 3. 启动服务器
server.listen(8848, () => {
  console.log('my server start work 8848')
})

// 4. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', (req, res) => {
  // 设置响应的内容为JSON
 res.setHeader('Content-Type', 'application/json; charset=utf-8')
 res.setHeader('Access-Control-Allow-Origin', '*')
 
// 接口 要确定 GET / POST
// 我现在是后端  我们需要判断前端访问的是哪个接口  /api/news  
// ==> IP  ip地址:8848/api/students
if(req.method === 'GET' && req.url === '/api/students'){
    const students = db.students()
    // students ==> arr 数组， 返回给浏览器端，字符串
    res.end(JSON.stringify(students)) 
} else if (req.method === 'GET' && req.url === '/api/luckystar'){
    // 调用导入模块的方法，获取到数组
    const luckystar = db.luckystar()
    // 返回给前端
    res.end(JSON.stringify(luckystar)) 
} else if (req.method === 'GET' && req.url === '/api/news'){
    const news = db.news() 
    news.forEach(el => {
        el.publish_time =  dayjs(el.publish_time).format('YYYY-MM-DD HH:mm:ss')
    })
    res.end(JSON.stringify(news))
} else {
    res.statusCode = 404 
    res.end('404 not found')
}

//     res.end('接口哈哈哈')
}) // end request