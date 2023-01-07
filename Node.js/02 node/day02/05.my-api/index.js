// 1. 导入模块
const http = require('http')
const db = require('./db/index')
const dayjs = require('dayjs')


// 2. 创建一个web服务器
const server = http.createServer()

// 3. 启动服务器，监听端口
// 6666 ===> 不能用  
// 3000
server.listen(8888, () => {
    console.log('server is running at port 8888')
})

// 4. 绑定request事件，监听请求 
server.on('request', (req, res) => {
    // 响应给浏览器的数据格式是json格式，设置一个响应头 
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    // 允许跨域访问 * ， 不管从哪个url来的请求，都允许访问 
    res.setHeader('Access-Control-Allow-Origin', '*')

    // 返回学员的数据
    if (req.method === 'GET' && req.url === '/api/students'){
        const students = db.students()
        res.end(JSON.stringify(students))
    } else if (req.method === 'GET' && req.url === '/api/luckystar'){
        const luckDog = db.luckystar() // luckDog 是一个对象
        res.end(JSON.stringify(luckDog))
    } else if (req.method === 'GET' && req.url === '/api/news'){
        const news = db.news()
        // 时间戳转换
        news.forEach(el => {
            el.publish_time = dayjs(el.publish_time).format('YYYY-MM-DD HH:mm:ss')
        })
        res.end(JSON.stringify(news))
    }else {
        res.statusCode = 404 
        res.end('404 not found')
    }
})