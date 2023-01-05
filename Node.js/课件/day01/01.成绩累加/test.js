// 1、导入fs
const fs = require('fs')
// 读取文件
const path = require('path')
const fullPath = path.join(__dirname,'./成绩累加.txt')
const res = fs.readFileSync(fullPath,'utf-8')
console.log(__dirname);
// 将字符串转为数组 
const arr = res.split(',')

const resArr = arr.map(el=>{
  const newArr = el.split('=')
  return +newArr[1]
})

// 累加成绩
const total = resArr.reduce((acc,cur)=>{
  return acc + cur
})

// 写入成绩
const fullPath2 = path.join(__dirname,'./总成绩.txt')
console.log(fullPath2)
fs.writeFileSync(fullPath2,total+'')  //total+'' 把数字转为字符串