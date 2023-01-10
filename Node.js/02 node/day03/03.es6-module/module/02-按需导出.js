// 导出模块

//  export直接写在需要导出的变量声明左边
export const food = '糖醋排骨'
export const arr = [1,2,3]

//2.如果想要导出多个变量
const music = 'exo'
const hobbys = ['music', 'rap']

export {
    music,
    hobbys
}

const book = '钢铁是怎样炼成的'
export default book