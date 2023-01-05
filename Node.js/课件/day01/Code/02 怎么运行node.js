

const food = '西红柿炒鸡蛋'

// for(let i = 0; i < 10; i++){
//     console.log(food)
// }

// 创建一个数组，并填充元素都为 0
// const arr = new Array(10).fill(0)
const arr = Array(10).fill(0)
console.log(arr)
// _可以作为变量名 
arr.forEach((_, i) => {
    console.log(`${i}: ${food}`)
})

// node xxxx.js  ==> 终端运行
// ==>  node 只能运行js哈

// Tab （Q旁边的那个键，补全路径）
// 按上下，可以切换历史的命令行记录、
// 从C盘，进入D盘  直接在终端输入 d: