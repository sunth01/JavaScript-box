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