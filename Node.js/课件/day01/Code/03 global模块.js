// mkdir xxx  创建文件夹
// touch xxx.js  创建文件的意思
// cls  ==> 清空终端  或者 git bash ==> clear 
// cd ..

// 以下，不需要引入，可以直接使用
// 当前模块的文件夹名称 目录名称 ==> 绝对路径
console.log(__dirname)

// 文件路径  ==> 绝对路径
console.log(__filename)

console.log('今天不加班~~')

setTimeout(() => {
    console.log('哇咔咔')
}, 1000);

setInterval(() =>{
    console.log('心情很美丽')
}, 1000)