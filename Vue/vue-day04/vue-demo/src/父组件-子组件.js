//! 组件通信

// 父传子
//  1. 父 => 子, 添加属性的方式传值
// <child money="100" desc="秒速" :color="skyblue"></child>
//  2. 子组件内部通过props来接收
// props:['money', 'desc', 'color']

// props里面的这些数据，可以和data中的数据类比，使用方式一样
// - template结构中 {{ desc}}
// - methods/computed/watch ==> this.xxx


// 子传父：
// 1. 在子组件中，this.$emit('自定义事件', 参数1, 参数2, ...)
// 2. 在父组件中 
{/* <child @自定义事件名="事件处理函数"></child> */}

// methods:{
//     处理函数(参数1, 参数2){

//     }
// }