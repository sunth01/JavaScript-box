
// 1. 导入fs模块
// fs ==> file System 
const fs = require('fs')
// console.log('fs', fs)
const res = fs.readFileSync('./test/info.md', 'utf-8')

console.log(res)

// node '04 Tab' 读取文件 

// 看视频，如果网络快 流畅的观看 ，如果网络慢 就会有一个缓冲buffer，等待缓冲足够多的时候，才进行处理
// stream

try {
    // 我们可以把可能错误的代码 try-catch  node也可以try catch
    const res2 = fs.readFileSync('./test/msg.md', 'utf-8')
    console.log(res2)
} catch(err){
    console.log(err)
}
