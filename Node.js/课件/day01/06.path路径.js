// 1. 导入模块
const path = require('path')

// 2. path.join() 
console.log(path.join('a')) // a
console.log(path.join('a', '')) // a
console.log(path.join('', 'a')) // a

console.log(path.join('a', 'b')) // a\b
console.log(path.join('a', '/b')) // a\b
console.log(path.join('a', './b')) // a\b

// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')) 
// .. 如果在第一个，上一级， 如果在其他位置，吞前面一个 => /路径
console.log(path.join( '..', '/foo', 'bar','baz/asdf',  'quux')) 

const res = path.join(__dirname, './test/write.txt')
console.log(res)

// 推荐使用绝对路径来读写文件~~~
// 如果js中写的相对路径， 其实执行的时候，是相对于终端执行的目录来看。