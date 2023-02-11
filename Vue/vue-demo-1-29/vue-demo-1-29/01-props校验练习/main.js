import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.component('组件名', HmBtn)
// 注册全局组件  ==>  main.js中注册全局组件
// 全局注册的组件，其他子组件都能使用
// 1. 如果注册的时候写的短横线形式，在html上使用的时候，只能使用短横线形式
// 2. 注册的时候使用的大驼峰，那么大驼峰和短横线的形式都可以使用

// ==》 推荐我们的组件名字，就用大驼峰命名
new Vue({
  render: h => h(App),
}).$mount('#app')
