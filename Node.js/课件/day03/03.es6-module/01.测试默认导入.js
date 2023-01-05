import module from './module/01.默认导出.js'

// ESM导入的时候不能省略.js
// import 变量名 from '地址.js'

// 把模块中暴露的内容存到了 module变量中
// module的名字可以改 => 导入的这个名字 可以自定义

console.log(module.food)
console.log(module.eatFood())
console.log(module.arr)