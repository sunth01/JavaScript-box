// 1. 导入fs模块
const fs = require('fs')

// 2. fs.writeFileSync
// 第一个参数路径
// 第二个参数 写的内容

// 2.1 文件存在的情况
fs.writeFileSync('./test/msg.txt', '感觉自己萌萌哒')

// 2.2 文件不存在的情况  ==> 在目录下新建一个文件，并写入内容
fs.writeFileSync('./test/flower.md', '太阳花')

// 2.3 文件夹不存在的情况
// ===> 当文件夹不存在的时候，会报错
fs.writeFileSync('./demo/sun.md', '哈哈哈')