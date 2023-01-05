import { eatFood, arr} from './module/02.按需导出.js'

// 按需导入的变量，必须要用 {} 包起来
// 并且里面的变量名和导出（暴露）的名字要一致！！
console.log(eatFood)
console.log(arr)


// 2. 如果按需导出想要修改这个名字  { 原来的 as 别名 }
import { hobbys } from './module/02.按需导出.js'
import { food as biubiubiu} from './module/02.按需导出.js'

console.log(hobbys)
console.log(biubiubiu)

// 3. 默认导入的变量，不要加{}
import module from './module/02.按需导出.js'
console.log(module)