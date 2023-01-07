//1. 导入fs模块
const fs = require('fs')
const path = require('path')

// 2. 读成绩 readFileSync()
// const res = fs.readFileSync('./01.成绩累加/成绩.txt','utf-8')
const fullPath = path.join(__dirname, './01.成绩累加/成绩.txt')
const res = fs.readFileSync(fullPath,'utf-8')

// 3. 数据转换 
// 3.1 字符串转为数组
const arr = res.split(',')
// [ '小明=100', '小红=66', '小黑=88', '小绿=77', '小王=599', '小白=66', '小贵=99' ]

// [ [ '小明', '100' ], [ '小明', '100' ], [ '小明', '100' ], '小绿=77', '小王=599', '小白=66', '小贵=99' ]
const resArr = arr.map(el => {
    // 把数组中的每个元素，转为数组
    // console.log(el)
    const res = el.split('=')
    // 取第二个元素，转为Number
    return +res[1]
})
console.log(resArr)

// 4. 成绩累加
// [1, 2, 3, 4, 5]
const total = resArr.reduce((pre, cur) => {
    return pre + cur
})
// reduce，  1. initValue如果不写，pre是数组中的第一个元素
//          2. initValue如果写，pre第一次就是这个值
console.log(total)

// 5. 写到 总成绩.txt 中
// fs.writeFileSync 第二个参数，我们现在用，不能传number，需要转字符串String
// fs.writeFileSync('./01.成绩累加/总成绩.txt', `总成绩是${total}`)
const fullPath2 = path.join(__dirname, './01.成绩累加/总成绩.txt')
fs.writeFileSync(fullPath2, `总成绩是${total}`)


// ==> 动态路径拼接的问题
// 1. 在终端中执行js的时候，如果js中有相对路径，这个路径是相对于我们终端的目录来说的
// 2. 右键 copyPath 得到的就是文件的绝对路径 ，需要注意，双斜杠 ！
