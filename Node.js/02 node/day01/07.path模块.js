// 1. 导入path模块
const path = require('path')

// 2. path.join() 
// 1. 参数，都是字符串
// 2. 返回值，也是字符串
// 作用：将传入的路径片段，按一定规则，拼接到一起

console.log(path.join('a'))  // a 
console.log(path.join('a', ''))
console.log(path.join('', 'a'))

console.log(path.join('a', 'b')) // a\b
console.log(path.join('a', './b')) // a\b
console.log(path.join('a', '/b'))  // a\b

console.log(path.join('a', './b', 'c'))

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// ===>   \foo\bar\baz\asdf

// .. 忽略前一个文件夹 或者理解为回退一层
console.log(path.join('/foo', 'bar', 'baz/asdf', '..', 'quux'))
// ===> \foo\bar\baz\quux

// 得到一个拼接的绝对路径  __dirname 
console.log(path.join(__dirname, './01.成绩累加/总成绩.txt'))
// C:\Users\99602\Desktop\node\day01\01.成绩累加\总成绩.txt

