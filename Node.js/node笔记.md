# Node🍔

#### 怎么运行node

node xxxx.js  ==> 终端运行

==>  node 只能运行js

Tab （Q旁边的那个键，补全路径）

按上下，可以切换历史的命令行记录

从C盘，进入D盘  直接在终端输入 d:

#### global模块

不需要导入，可以直接使用的一些模块/语法

```js
// 1. console.log()
console.log('今天心情美美哒')

// 2. setTimeout() / setInterval()
setTimeout(() => {
    console.log('今天中午吃什么')
}, 1000)

setInterval(() => {
    console.log('今天中午吃什么')
}, 1000)

// 3. __dirname 
// 当前js文件所在的文件夹的绝对路径   文件夹！！
// ==> C:\Users\99602\Desktop\node\day01
console.log(__dirname)

// 4. __filename
// ==> C:\Users\99602\Desktop\node\day01\03. global模块.js
// 文件的绝对路径
console.log(__filename)
```

#### 读取文件

```js
const fs = require('fs')

const res = fs.readFileSync('../test/new-.txt', 'utf-8')  // 读取文件格式
console.log(res)

//==>路径补全： Path Intellisense
// 3. 可以把可能报错的代码，放到try catch 
try {
    const res2 = fs.readFileSync('../test/demo.md', 'utf-8')
    console.log(res2)
} catch(err){
    console.log(err)
}
```

#### 写文件

```js
// 1. 导入fs模块
const fs = require('fs')

// 2. fs.writeFileSync
// 第一个参数路径
// 第二个参数 写的内容

// 2.1 文件存在的情况
fs.writeFileSync('../test/demo.md', '感觉自己萌萌哒')

// 2.2 文件不存在的情况  ==> 在目录下新建一个文件，并写入内容
fs.writeFileSync('../test/flower.md', '太阳')

// 2.3 文件夹不存在的情况
// ===> 当文件夹不存在的时候，会报错
fs.writeFileSync('./demo/sun.md', '哈哈哈')
```

#### 读写文件

```js
// 导入fs模块
const fs = require('fs')
const path = require('path')
// 读成绩 readFileSync()
// const res = fs.readFileSync('../test/成绩.txt', 'utf-8')
const fullPath = path.join(__dirname,'../test/成绩.txt')
// const res = fs.readFileSync('D:\\孙世鑫文件\\27期项目合计\\Node.js\\day01\\test\\成绩.txt', 'utf-8')

// 数据转换
// 字符串转为数组
const arr = res.split(',')
console.log(arr)

const resArr = arr.map(el => {
    // 把数组中的每个元素转为数组
    // console.log(el)
    const res = el.split('=')
    return +res[1]
})
console.log(resArr)

// 成绩累加
const total = resArr.reduce((pre, cur) => {
    return pre + cur
})
console.log(total)

// fs.writeFileSync('../test/总成绩.txt',`总成绩是${total}`)
const fullPath2 = path.join(__dirname, '../test/总成绩.txt')
fs.writeFileSync(fullPath2,`总成绩是${total}`)
// fs.writeFileSync('D:\\孙世鑫文件\\27期项目合计\\Node.js\\day01\\test\\总成绩.txt', `总成绩是${total}`)

// ==> 动态路径拼接的问题
// 1. 在终端中执行js的时候，如果js中有相对路径，这个路径是相对于我们终端的目录来说的
// 2. 右键 copyPath 得到的就是文件的绝对路径 ，需要注意，双斜杠 ！
```

#### 读写练习

```js
// 导入fs模块
const fs = require('fs')
const path = require('path')
// 读成绩 readFileSync()
// const res = fs.readFileSync('../test/成绩.txt', 'utf-8')
const fullPath = path.join(__dirname,'../test/成绩.txt')
// const res = fs.readFileSync('D:\\孙世鑫文件\\27期项目合计\\Node.js\\day01\\test\\成绩.txt', 'utf-8')

// 数据转换
// 字符串转为数组
const arr = res.split(',')
console.log(arr)

const resArr = arr.map(el => {
    // 把数组中的每个元素转为数组
    // console.log(el)
    const res = el.split('=')
    return +res[1]
})
console.log(resArr)

// 成绩累加
const total = resArr.reduce((pre, cur) => {
    return pre + cur
})
console.log(total)

// fs.writeFileSync('../test/总成绩.txt',`总成绩是${total}`)
const fullPath2 = path.join(__dirname, '../test/总成绩.txt')
fs.writeFileSync(fullPath2,`总成绩是${total}`)
// fs.writeFileSync('D:\\孙世鑫文件\\27期项目合计\\Node.js\\day01\\test\\总成绩.txt', `总成绩是${total}`)

// ==> 动态路径拼接的问题
// 1. 在终端中执行js的时候，如果js中有相对路径，这个路径是相对于我们终端的目录来说的
// 2. 右键 copyPath 得到的就是文件的绝对路径 ，需要注意，双斜杠 ！
```

#### path模块

```js
// 1. 导入path模块
const path = require('path')

// 2. path.join() 
// 1. 参数，都是字符串
// 2. 返回值，也是字符串
// 作用：将传入的路径片段，按一定规则，拼接到一起

console.log(path.join('a'))  // a 
console.log(path.join('a', ''))
console.log(path.join('', 'a'))

console.log(path.join('a', 'b')) // a\b
console.log(path.join('a', './b')) // a\b
console.log(path.join('a', '/b'))  // a\b

console.log(path.join('a', './b', 'c'))

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// ===>   \foo\bar\baz\asdf

// .. 忽略前一个文件夹 或者理解为回退一层
console.log(path.join('/foo', 'bar', 'baz/asdf', '..', 'quux'))
// ===> \foo\bar\baz\quux

// 得到一个拼接的绝对路径  __dirname 
console.log(path.join(__dirname, './01.成绩累加/总成绩.txt'))
// C:\Users\99602\Desktop\node\day01\01.成绩累加\总成绩.txt
```

#### http服务

```js
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
```

#### 根据url相应不同内容

```js
// 1. 导入http模块
const http = require('http')

// 2. 创建一个web服务器
const server = http.createServer()

// 3. 启动服务器
// 端口号 0-65535
server.listen(3111, () => {
    console.log('server is running at port 3111')
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
```

