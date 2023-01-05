// 不需要导入，可以直接使用的一些模块/语法


// 1. console.log()
console.log('今天心情美美哒')

// 2. setTimeout() / setInterval()
setTimeout(() => {
    console.log('今天中午吃什么')
}, 1000)

setInterval(() => {
    console.log('今天中午吃什么')
}, 1000)

// 3. __dirname 
// 当前js文件所在的文件夹的绝对路径   文件夹！！
// ==> C:\Users\99602\Desktop\node\day01
console.log(__dirname)

// 4. __filename
// ==> C:\Users\99602\Desktop\node\day01\03. global模块.js
// 文件的绝对路径
console.log(__filename)