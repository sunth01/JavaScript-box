// 1. 导入http模块
// fs.readFileSync
const fs = require('fs')
const http = require('http')
const path = require('path')

// 2. 创建一个web服务器
const server = http.createServer()

// 3. 启动服务器
// 端口号 0-65535
server.listen(3000, () => {
    console.log('server is running at port 3000')
})

// 4. 监听request事件，回调函数里面有两个参数
server.on('request', (req, res) => {
    // if (req.url === '/' || req.url === '/index.html'){
    //     // 返回对应的文件给前端
    //     // 1. 找到index.html的绝对路径
    //     const fullPath = path.join(__dirname, './www/index.html')
    //     const resFile = fs.readFileSync(fullPath)
    //     res.end(resFile)
    // } else if (req.url === '/clock.css') {
    //     const fullPath = path.join(__dirname, './www/clock.css')
    //     const resFile = fs.readFileSync(fullPath)
    //     res.end(resFile)
    // } else if (req.url === '/clock.js'){
    //     const fullPath = path.join(__dirname, './www/clock.js')
    //     const resFile = fs.readFileSync(fullPath)
    //     res.end(resFile)
    // } else {
    //     res.end('404 not found')
    // }
    
    // req.url  ===> /   
    // req.url  ===> /clock.js

    // const fullPath = path.join(__dirname, './www', req.url)
    let url = req.url 
    if (url === '/') {
        url = './index.html'
    }
    const fullPath = path.join(__dirname, './www', url)
    // try catch
    try {
        // 如果读文件报错，表示找不到文件 ， 可以在err中处理 
        const resFile = fs.readFileSync(fullPath)
        res.end(resFile)
    } catch (err){
        // console.log(err)
        res.statusCode = 404 
        // res.end('demo')
        res.end('404 not found')
    }
})