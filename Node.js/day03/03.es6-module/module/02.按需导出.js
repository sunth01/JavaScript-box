// 1. export 直接写在变量声明的最左边
export const food = '辣子鸡'

export function eatFood(){
    console.log('eat')
}
export const arr = [1, 2, 3]

// 2. 导出多个变量，放到对象里
const sayHi = 'you jump I jump'
const hobbys = ['guitar', 'music']

export {
    sayHi,
    hobbys
}

// 3. 按需导出可以和默认导出一起使用
const movie = '奥特曼打小怪兽'
export default movie