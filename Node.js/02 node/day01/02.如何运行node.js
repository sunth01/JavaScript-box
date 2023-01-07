const food = "大肘子+西红柿炒鸡蛋"

// 新建一个长度为10的数组，每个元素都是0
const arr = new Array(10).fill(0)
console.log(arr)

arr.forEach((_,i) => {
    console.log(`${i} :${food}`)
})

// 在node中运行js代码 
// 终端当前文件路径下 执行 node xxx文件名.js

// 1. 终端下，文件名可以写一部分，按下tab键可以补全
// 2. 可以上下箭头 快速查看上一次运行的命令
// 3. cd  ==> 进入 文件夹   mkdir创建文件夹  touch 创建文件

const p = document.querySelector('p')