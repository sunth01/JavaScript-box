const fs = require('fs')

const res = fs.readFileSync('../test/new-.txt', 'utf-8')
console.log(res)

//==>路径补全： Path Intellisense
// 3. 可以把可能报错的代码，放到try catch 
try {
    const res2 = fs.readFileSync('../test/demo.md', 'utf-8')

    // 不给编码格式 返回buffer对象
    const res3 = fs.readFileSync('../test/demo.md')
    console.log(res2)
    console.log(res3.toString())
    // 1. Buffer对象是Nodejs用于处理二进制数据的。
    // 2. 其实任意的数据在计算机底层都是二进制数据，因为计算机只认识二进制。
    // 3. 所以读取任意的文件，返回的结果都是二进制数据，即Buffer对象
    // 4. Buffer对象可以调用toString()方法转换成字符串。
} catch(err){
    console.log(err)
}