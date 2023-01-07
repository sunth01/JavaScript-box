// console.log(msg)

// 1. 注意，导入的时候，可以不加js后缀
const myModule = require('./myModule/myModule')

console.log(myModule)  // 是一个变量，对象

// 取msg
console.log(myModule.msg)
// 调用方法
myModule.sleep()