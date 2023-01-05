const food = '青椒土豆丝'

function eatFood(){
    console.log('eat eat')
    return 666
}

const arr = [1, 2, 3]

// 注意：默认导出只能有一个 

// 如果想默认导出多个，传一个对象
export default {
    food,
    eatFood,
    arr
}
// export default eatFood