// 导入db模块
const db = require('./db/index')

// console.log(db)
const res = db.news()
// console.log(res)

// 学生
const students = db.students()
console.log(students)

const luckystar = db.luckystar()
console.log(luckystar)