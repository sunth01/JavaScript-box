// 使用dayjs
// 1. npm i dayjs  ==> 默认安装的是最新版本的dayjs

// 1. 导入模块（包）
const dayjs = require('dayjs')

console.log(dayjs().format())
                              
console.log(dayjs().format('YYYY-MM-DD'))                    
const res = dayjs().format('YYYY-MM-DD HH:mm:ss') 
console.log(res)    

// 最后一个，把时间戳转换为对应的日期格式
console.log(dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss'))