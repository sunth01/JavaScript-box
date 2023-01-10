// 全部导入
import * as myModule from './module/02-按需导出.js'

console.log(myModule)
// 所有导出的变量都放到这个对象上了
// 1. 默认导出的属性名是==> default 
console.log(myModule.default)

// 2. 如果要取其他的变量
console.log(myModule.arr)
console.log(myModule.food)