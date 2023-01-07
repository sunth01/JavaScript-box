// 这里做模块的导出

// 导入模块
const fs = require('fs')
const path = require('path')

function news() {
    const fullPath = path.join(__dirname,'./db/data/news.json')
    const res = fs.readFileSync(fullPath, 'utf-8')
    // 转为数组
    const news = JSON.parse(res)
    // 返回值
    return news
}
function students() {
    // 返回新闻列表 数组
    // 读取news.json ==> 绝对路径
    const fullPath = path.join(__dirname,'./db/data/info.json')
    const res = fs.readFileSync(fullPath, 'utf-8')
    // 转为数组
    const students = JSON.parse(res)
    // 返回值
    return students
}

function luckDog() {
    const fullPath = path.join(__dirname,'./db/data/info.json')
    const studentArr = students()
    // 获取随机下标
    const index = parseInt(Math.random() * studentArr.length)
    const luckSar = studentArr[index]
    luckSar.count++
    fs.writeFileSync(fullPath,JSON.stringify(studentArr))
    return luckSar
}

module.exports = {
    news,
    students,
    luckDog
}