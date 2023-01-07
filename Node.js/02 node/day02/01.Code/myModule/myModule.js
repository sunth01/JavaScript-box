// 我们写的js 就是一个自定义的模块 ， 存在模块作用域
const msg = '大家困不困~'

function sleep(){
    console.log('如果困了，请趴下睡一觉~~')
}

const secret = '这个不给看'

// console.log(module.exports)

// CommonJS规范，固定的写法
module.exports = {
    msg,
    sleep
}