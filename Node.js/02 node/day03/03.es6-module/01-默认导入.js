// 默认导入

//1. 默认导入的路径要写上.js 不能省略
// 2. module相当于是导出的内容赋值给了这个module变量
//  这个名字可以修改
// import 变量名称 from '路径'
// 导入的路径不能使用模板字符串
import module from './module/默认导出.js'

console.log(module)


console.log(module.msg)
module.sayHi()