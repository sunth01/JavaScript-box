// 1. 导入fs模块 
// fs文件系统  file System, 处理文件用的
const fs = require('fs')

// 2. 读文件 readFileSync()
// 第一个参数，文件路径
// 第二个参数 utf-8  编码格式
const res = fs.readFileSync('./test/msg.txt', 'utf-8')
console.log(res)
 
//==>路径补全： Path Intellisense
// 3. 可以把可能报错的代码，放到try catch 
try {
    const res2 = fs.readFileSync('./test/info.md', 'utf-8')
    console.log(res2)
} catch(err){
    console.log(err)
}

console.log(666)


