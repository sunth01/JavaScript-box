const obj = {}
// 每一个组件实例都是一个对象，每个组件都应该有自己的数据，它们直接应该是相互不影响的
const obj1 = obj 
const obj2 = obj 
const obj3 = obj 

// obj1.msg = 'JS'


// 利用函数创建对象，让每个组件中的data都互不影响，同理，props默认是对象的时候也是一样的
function fn(){
    const obj = {}
    return obj
}

// 相当于每次调用函数，重新创建了一个新的对象，在内存中指向的是不同的地址
const obj4 = fn()
const obj5 = fn()
const obj6 = fn()
