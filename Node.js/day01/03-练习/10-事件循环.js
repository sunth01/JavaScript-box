// Event Loop 事件循环
// 宏任务：
// 1. script代码块
// 2. setTimeout / setInterval 
// 3. setImmediate

// 微任务：
// 1. promise.then() 和 promise.catch()
// 2. async await (generator和yeild的语法糖)  ==> await 这一行后面的那些会放到微任务队列中
const asyncReadFile = async function () {
    // await 这一行的代码，同步执行的
    const f1 = await readFile('/etc/fstab');
    // await 后面的代码会放到微任务队列中
    console.log(f1.toString());
    console.log(f2.toString());
    console.log(111)
  };
// 3.MutationObserver  ==> 监听DOM元素的变化，执行回调函数
// 4.process.nextTick  ==> node中的



// demo 

// 1. 微任务是包含在宏任务里面的吗？
// 一个宏任务可以包含微任务
// 2. 一个宏任务里面可以有多个微任务吗？ 可以 

// 3. 什么时候是一个宏任务结束呢 ， 当当前宏任务中的所有微任务队列清空完，本轮tick执行完
//    之后，再执行下一个宏任务 


// 微任务在本次事件循环的最后吗 是

// 1. 首先script代码块可以看做第一个宏任务，开始第一个Tick事件循环
// 2. 会先执行script代码块中的同步代码，
// 3. 如果遇到宏任务，就放到宏任务队列中等待执行,  如果遇到微任务，放到微任务队列中
// 3. 当主线程执行完同步代码的时候，首先，去微任务队列中清空当前事件循环的所有微任务 （本轮事件循环Tick结束）
// 4. 再去执行下一个宏任务  ==> 这个时候是下一次事件循环了


// 0 2 4 3 666 888 （本轮宏任务执行完）==> log 1 是下一个宏任务
console.log(0);  

setTimeout(function () {
    // 宏任务队列 1  // 遇到宏任务了，把这里的回调函数 放到宏任务队列中等待执行
    console.log(1);    
});

new Promise(function(resolve,reject){
    // new Promise内部这里的代码，同步执行 
    console.log(2)
    resolve(3) // 可以跳过
    // resolve()
}).then(function(val){
    // 这里的.then() 这块代码，放到微任务队列中执行
    console.log(val);  
}).then(() => {
    // 又放到微任务队列中
    console.log(666)
}).then(() => {
    // 微任务队列
    console.log(888)
})

console.log(4);

// 宏任务和微任务的关系 
// 拔萝卜 萝卜上面有泥巴~~~ 
// 执行一个宏任务，就相当于拔一个萝卜， 这些泥就相当于是这次循环的所有微任务，
// 我们需要把泥洗干净（清空当前循环的所有微任务队列）
// 之后再去执行下一个宏任务，拔下个萝卜