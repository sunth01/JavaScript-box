// console.log(msg) // no!

// 注意导入的时候,可以不加js后缀

const myModule = require('./myModule/myModule')

console.log(myModule)

//取msg
console.log(myModule.msg)

// 调用方法
myModule.sleep()