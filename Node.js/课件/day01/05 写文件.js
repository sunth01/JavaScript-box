// 1. 导入fs模块
const fs = require('fs')

// 2. 写文件 没有返回值
// 文件存在 ===> 可以写入
fs.writeFileSync('./test/info.md', '感觉自己萌萌哒')

// 文件不存在 ==> 新建文件写入
fs.writeFileSync('./test/demo.md', '萌个锤锤')

// 路径不存在  ==>报错
fs.writeFileSync('./msg/demo.md', '哈哈哈，要吃饭了')