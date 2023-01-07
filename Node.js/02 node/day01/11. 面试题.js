async function async1(){
    // 这里的代码是同步执行的 
    console.log('async1 start')
    await async2()        // 注意： await 这一行是同步执行的
    // 下面的代码相当于.then()中的代码，会放到微任务队列中执行 
    console.log('async1 end') // 微-1
  }
async function async2(){ 
    console.log('async2')
}
  
console.log('script start')

setTimeout(function(){ 
    console.log('setTimeout')  // 宏-1 
},0);
async1()
  
new Promise(resolve => {
    console.log('Promise'); 
    resolve(); 
}).then(() => {
    console.log('promise1') // 微-2
}).then(() => {
    console.log('promise2') // 微-3
})
console.log('script end')

// 1. script start
// 2. async1 start
// 3. async2
// 4. Promise
// 5. script end
// 6. async1 end
// 7. promise1
// 8. promise2  ===> 本轮宏任务结束  
// 9. setTimeout