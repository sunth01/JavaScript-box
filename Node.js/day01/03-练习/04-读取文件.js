const fs = require('fs')

const res = fs.readFileSync('../test/new-.txt', 'utf-8')
console.log(res)

//==>路径补全： Path Intellisense
// 3. 可以把可能报错的代码，放到try catch 
try {
    const res2 = fs.readFileSync('../test/demo.md', 'utf-8')
    const res3 = fs.readFileSync('../test/demo.md', 'utf-8')
    console.log(res2)
} catch(err){
    console.log(err)
}