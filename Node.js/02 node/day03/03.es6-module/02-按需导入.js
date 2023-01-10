// 按需导入
import { arr, music } from './module/02-按需导出.js'

console.log(arr)
console.log(music)

// 默认导出

// 1.按需导入的时候 需要 加上 {}
// 2.导入的这个变量名必须与导出的变量名一致
// import book from './module/02-按需导出.js'
// console.log(book)

import { hobbys as xingqu } from './module/02-按需导出.js'
console.log(xingqu)

// 默认导入和按需导入可以一起使用
import book, { food } from './module/02-按需导出.js'
console.log(book)
console.log(food)