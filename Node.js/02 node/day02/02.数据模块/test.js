// 这里做导入模块来使用

const db = require('./db/index')

const news = db.news()
console.log(news)

const students = db.students()
// console.log(students)

const luck = db.luckDog()
console.log(luck)