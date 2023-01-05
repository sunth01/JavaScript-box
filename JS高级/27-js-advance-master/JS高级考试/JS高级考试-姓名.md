### 姓名	： 

### 分数	：

---

分数不重要，重点是掌握知识点，查漏补缺。



## 一、单选题（共55题，总分110分）

##### 1. 下面代码的输出是什么？

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();
```

- A: Lydia 和 undefined

- B: Lydia 和 ReferenceError

- C: ReferenceError 和 21

- D: undefined 和 ReferenceError



##### 2.下面代码的输出是什么? 

```js
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`



##### 3. 哪个选项是正确的？

```js
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size`是无效的

- B: `mouse[bird.size]`是无效的

- C: `mouse[bird["size"]]`是无效的

- D: 以上三个选项都是有效的



##### 4. 输出什么? 

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: true false true

- B: false false true

- C: true false false

- D: false true true 



##### 5.  当我们这么做时，会发生什么？

```js
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Nothing, this is totally fine!

- B: SyntaxError. You cannot add properties to a function this way.

- C: undefined

- D: ReferenceError



##### 6. 下面代码的输出是什么? 

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName())
```

- A: TypeError

- B: Lydia undefined

- C: Lydia Hallie

- D: undefined undefined 



##### 7. 下面代码输出什么？

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined

- B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}

- C: Person {firstName: "Lydia", lastName: "Hallie"} and {}

- D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError 



##### 8. 下面代码的输出是什么?

```js
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: NaN

- B: TypeError

- C: "12"

- D: 3 



##### 9.  下面代码的输出是什么? 
```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: 1 1 2

- B: 1 2 2

- C: 0 2 2

- D: 0 1 2 



##### 10. 下面代码输出什么？
```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 })
```

- A: You are an adult!

- B: You are still an adult.

- C: Hmm.. You don't have an age I guess 



##### 11. 下边这代码输出是什么？

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```
- A: "number"

- B: "array"

- C: "object"

- D: "NaN"




##### 12. 输出什么？

```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`



##### 13. 输出什么？

```js
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: { a: "one", b: "two" }

- B: { b: "two", a: "three" }

- C: { a: "three", b: "two" }

- D: SyntaxError 



##### 14. 下面代码输出是什么？

```js
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`



##### 15. 下面代码输出是什么？

```js
String.prototype.giveLydiaPizza = function(){
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza(); 
```

A: "Just give Lydia pizza already!"

B: TypeError: not a function

C: SyntaxError

D: undefined 



##### 16. 下面代码的输出是什么? 

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b])
```

A: 123

B: 456

C: undefined

D: ReferenceError 



##### 17. 下面代码输出什么？

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

A: First Second Third

B: First Third Second

C: Second First Third

D: Second Third First 



##### 18. 下面代码的输出是什么?

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

A: undefined is 21 和 Lydia is 21

B: function sayHi 和 function sayHi

C: Lydia is 21 和 Lydia is 21

D: Lydia is 21 和 function sayHi



##### 19. 输出什么？

```js
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`



##### 20.  下面代码的输出是什么?

```js
console.log(typeof typeof 1);
```

A: "number"

B: "string"

C: "object"

D: "undefined"



##### 21. 下面代码输出什么？

```js
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

A: [1, 2, 3, 7 x null, 11]

B: [1, 2, 3, 11]

C: [1, 2, 3, 7 x empty, 11]

D: SyntaxError



##### 22. 下面代码输出什么？

```js
[[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur);
  },[1, 2]);
```

A: [0, 1, 2, 3, 1, 2]

B: [6, 1, 2]

C: [1, 2, 0, 1, 2, 3]

D: [1, 2, 6]



##### 23. 输出什么

```js
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`



##### 24. `setInterval`方法的返回值什么? 

```js
setInterval(() => console.log("Hi"), 1000);
```

A：一个唯一的id

B：指定的毫秒数

C：传递的函数

D：undefined



##### 25. 下面这段代码的返回值是？

```js
[..."Lydia"];
```

A: ["L", "y", "d", "i", "a"]

B: ["Lydia"]

C: [[], "Lydia"]

D: [["L", "y", "d", "i", "a"]] 



##### 26.  事件传播的三个阶段是什么？

A: Target > Capturing > Bubbling

B: Bubbling > Target > Capturing

C: Target > Bubbling > Capturing

D: Capturing > Target > Bubbling



##### 27. 输出是什么？

```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

A: `[[1, 2, 3, 4, 5]]`

B: `[1, 2, 3, 4, 5]`

C: `1`

D: `[1]`



##### 28.输出是什么？

```js
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`



##### 29.输出什么？

```js
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`



##### 30. 输出什么？

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

##### 31. 输出什么？

```js
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `SyntaxError`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

##### 32. 输出什么

```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

##### 33. 输出什么？

```js
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

##### 34. 输出什么？

```js
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`



##### 35. 输出什么？

```js
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

##### 36. 哪些方法修改了原数组？

```js
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

##### 37.  输出什么？

```js
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

##### 38. 下面那个选项将会返回 `6`?

```js
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

##### 39. 输出什么

```js
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

##### 40. 输出什么？

```js
const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};

myFunc(1, 2, 3);
```

- A: `1` `2` `3`
- B: `{1: 1}` `{2: 2}` `{3: 3}`
- C: `{ 1: undefined }` `undefined` `undefined`
- D: `undefined` `undefined` `undefined`

##### 41. 输出什么？

```js
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

##### 42. 输出什么？

```js
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`



##### 43. 输出什么？

```js
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

##### 44. 输出什么

```js
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` and `3` `6`
- B: `2` `NaN` and `3` `NaN`
- C: `2` `Error` and `3` `6`
- D: `2` `4` and `3` `Error`

##### 45. 输出什么？

```js
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)
```

- A: 1
- B: 2
- C: 3
- D: 4

##### 46. 输出什么？

```js
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

##### 47. 输出什么

```js
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

##### 48. 输出什么

```js
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

##### 49. 输出什么？

```js
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

##### 50. 哪一个选项会导致报错？

```js
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

##### 51. 输出什么？

```js
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

##### 52. 输出什么

```js
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`



##### 53. 输出什么？

```js
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

##### 54. 输出什么

```js
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

##### 55.输出什么？

```js
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`



---

## 二、 简答题  （共8题，总分40分）



##### 1. 说一说什么是BFC，怎么触发？ 



##### 2. 什么是深拷贝，什么是浅拷贝？实现浅拷贝的方式，实现深拷贝的方式？



##### 3. 什么是闭包? 有什么作用？会造成什么问题？



##### 4. var let const 的区别？



##### 5.  改变this的指向有哪些方法，它们的区别是？



##### 6. 谈一谈你对原型的理解？原型链的理解呢？



##### 7.  什么是防抖，什么是节流？它们的主要应用场景？



##### 8. 聊一聊你对垃圾回收机制的理解呢？



## 三、代码题  （20）

##### 1. 手写防抖？ （6分）





##### 2. 手写节流？（6分）





##### 3. 渲染商品，并且筛选过滤 ？素材见综合案例。（8分）
