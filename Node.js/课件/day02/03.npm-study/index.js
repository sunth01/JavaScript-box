// 1. 导入
const dayjs = require('dayjs')

const res = dayjs().format()
console.log(res)

dayjs().format();                                     // 2020-09-08T13:42:32+08:00
dayjs().format('YYYY-MM-DD');                         // 2020-09-08
dayjs().format('YYYY-MM-DD HH:mm:ss');                // 2020-09-08 13:47:12

// 1318781876406 时间戳 ==> +new Date() , Date.now()
dayjs(1366661876406).format('YYYY-MM-DD HH:mm:ss');   // 2011-10-17 00:17:56

const res1 = dayjs().format('YYYY-MM-DD');  
const res2 = dayjs().format('YYYY-MM-DD HH:mm:ss');
const res3 = dayjs(1666666666666).format('YYYY-MM-DD HH:mm:ss'); 

console.log(res1)
console.log(res2)
console.log(res3)