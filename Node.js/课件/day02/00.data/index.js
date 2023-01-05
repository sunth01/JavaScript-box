// 1. 导入模块
const fs = require('fs')
const path = require('path')

// 2. 读文件
const fullPath = path.join(__dirname, './info.json')
const res = fs.readFileSync(fullPath, 'utf-8')

const arr = JSON.parse(res)
console.log(arr)

// 3. 随机取一个下标
const index = parseInt(Math.random() * arr.length)
const luckystar = arr[index]
console.log(luckystar)
luckystar.count++  // 数组里面元素已经变化了
// ==> luckystar.count = luckystar.count + 1
console.log(arr)

// 4. 写回去  ==> 字符串
fs.writeFileSync(fullPath, JSON.stringify(arr))