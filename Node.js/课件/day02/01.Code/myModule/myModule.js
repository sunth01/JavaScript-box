const msg = '感觉自己棒棒哒'
function jump(){
    console.log('you jump I jump')
}
// 分屏 vscode ctrl + \  （enter键的上面）
// Ctrl + w 关
const info = 'wahh' 
const secret = '我是一个秘密文件'

// 导出模块
// 固定 module.exports = {}
console.log(module.exports)  // {}
module.exports = {
    msg,
    jump
}