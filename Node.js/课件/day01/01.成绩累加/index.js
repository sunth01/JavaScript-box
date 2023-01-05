// 读文件，累加， 写到总成绩.txt里面 
// 1. 导入fs模块
const fs = require('fs')
const path = require('path')

// 2. 读取

// const res = fs.readFileSync('./成绩.txt','utf-8')
// \  \r \n  转义字符
// console.log(__dirname)

const fullPath  = path.join(__dirname, './成绩.txt')
const res = fs.readFileSync(fullPath, 'utf-8')

// const res = fs.readFileSync(`${__dirname}/成绩.txt`,'utf-8')

// console.log(res)
// 把字符串转为数组
const arr = res.split(',')

console.log(arr)
const resArr = arr.map(el => {
    // console.log(el)
    const rRes = el.split('=')
    // console.log(rRes)
    console.log(+rRes[1])
    return +rRes[1]
})
console.log(resArr)

// 3. 累加
const total = resArr.reduce((acc, cur) => {
    return acc + cur
}) //因为本身是数字 不需要写初始值
console.log(total)
// 4. 写入新文件
// total ==> number ==> string 
// fs.writeFileSync('C:\\Users\\99602\\Desktop\\26期\\05 Node.js\\day01\\01.成绩累加\\总成绩.txt', total+'')
const fullPath2  = path.join(__dirname, './总成绩.txt')
fs.writeFileSync(fullPath2, total+'')