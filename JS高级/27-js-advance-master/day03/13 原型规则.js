// 语法糖
// const obj = {}   ===>  const obj = new Object()
// const arr = []      ===>  const arr = new Array()

//! 1. 所有的引用类型（数组对象函数），都具有对象的特性，可以自由的扩展属性。
const obj = {}        // obj.a = 1 
const arr = []        // arr.b = 2
const fn = function(){}   // fn.c = 3

//! 2. 所有的对象，都有一个__proto__属性，属性值是一个普通的对象。 （__proto__ 隐式原型）
console.log(obj.__proto__)
console.log(arr.__proto__)
console.log(fn.__proto__)

//! 3. 所有的函数，都有一个prototype属性，属性值也是一个普通的对象  (prototype 显示原型)
console.log(fn.prototype)   

//! 4. 所有对象的隐式原型（__proto__） 指向它的构造函数的显示原型（prototype）
obj.__proto__ === Object.prototype
arr.__proto__ === Array.prototype
fn.__proto__ === Function.prototype

//! 5. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__中寻找