// 默认导出
const msg = '听着音乐唱着歌'
const arr = [1, 2, 3]
function sayHi() {
    console.log('hello world')
}

// 使用export default 默认导出，一次只能默认导出一个变量
// export default msg
// export default sayHi

// 如果想一次暴露/到处多个变量,放到export default {} 里面

//  ==> 一个js文件只能由一个export default 
export default {
    msg,
    sayHi
}