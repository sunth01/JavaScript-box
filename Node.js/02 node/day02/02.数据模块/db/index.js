// 这里做模块的导出

// 1. 导入模块
const fs = require('fs')
const path = require('path')

function news(){
    // 返回新闻列表 数组 
    // 1. 读取news.json  ===> 绝对路径 
    const fullPath = path.join(__dirname, './data/news.json')
    const res = fs.readFileSync(fullPath, 'utf-8') // ==> string 
    // 2. 转为数组
    const news = JSON.parse(res)
    // 3. 返回 
    return news
}

// 获取学员信息
function students(){
    // 返回新闻列表 数组 
    // 1. 读取news.json  ===> 绝对路径 
    const fullPath = path.join(__dirname, './data/info.json')
    const res = fs.readFileSync(fullPath, 'utf-8') // ==> string 
    // 2. 转为数组
    const students = JSON.parse(res)
    // 3. 返回 
    return students
}

function luckDog(){
    const fullPath = path.join(__dirname, './data/info.json')
    // 因为刚才已经封装好了students，可以直接在这里调用
    const studentArr = students()
    // 获取随机下标
    const index = parseInt(Math.random() * studentArr.length)
    const luckStar = studentArr[index]
    luckStar.count++
    // 写回去
    fs.writeFileSync(fullPath, JSON.stringify(studentArr))

    // 把抽中那位同学返回出去
    return luckStar
}

module.exports = {
    news,
    students,
    luckDog
}