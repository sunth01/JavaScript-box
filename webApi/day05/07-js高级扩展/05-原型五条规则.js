// 语法糖
// const obj = new Object()
// const arr = new Array()

//! 1. 所有的引用类型 (数组 函数 对象) 都具有对象的特性,可以自由扩展属性
const obj = {}
// obj.a = 100
// console.log(obj)
const arr = []
// arr.b = 200
// console.log(arr)
function fn() { }
// fn.c = 300

//! 2. 所有的对象,都有一个__proto__属性,属性值是一个普通的对象.  (__proto__ ==> [[protoype]],隐式转换)
console.log(obj.__proto__)
console.log(arr.__proto__)
console.log(fn.__proto__)

//! 3. 所有的函数,都有一个prototype属性,属性值也是一个普通对象. (prototype ==> 显示原型)
console.log(fn.prototype)

//! 4. 所有对象的隐式原型(__proto__) 指向他构造函数的显示原型(prototype)
console.log(obj.__proto__ === Object.prototype)
console.log(arr.__proto__ === Array.prototype)
console.log(fn.__proto__ === Function.prototype)

//! 5. 当时图得到一个对象的某个属性时,如果这个对象本身没有属性,那么会去他的__proto__中寻找

function Person(name,age){
    this.name = name 
    this.age = age 
}

const person1 = new Person('小淞', 8)
const person2 = new Person('小野', 6)

// Person.prototype  ==> 访问到了原型对象（原型）
// person1.__proto__ ==> 访问到了原型

// 没有对象原型的说法

Person.prototype.sayHi = function(){
    console.log('hi')
}

console.log(person2.__proto__ === Person.prototype)
console.log(person1.sayHi())
