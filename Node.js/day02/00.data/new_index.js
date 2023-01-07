const fs = require('fs')
const path = require('path')

// 读取文件 转为字符串
const fullPath = path.join(__dirname, './info.json')
// console.log(fullPath)
console.log(fullPath)
const res = fs.readFileSync(fullPath, 'utf-8')
// console.log(res)

// 将res字符串转换为数组
const arr = JSON.parse(res)
console.log(arr)

const index = parseInt(Math.random() * arr.length)
console.log(index)

const luckDog = arr[index]
luckDog.count++
console.log(luckDog)

fs.writeFileSync(fullPath, JSON.stringify(arr))

