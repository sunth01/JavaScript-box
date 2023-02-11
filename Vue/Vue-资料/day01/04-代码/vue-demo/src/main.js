// 导入 vue 核心包
import Vue from 'vue'
// 导入 要渲染的 根组件
import App from './App.vue'

// 说明信息的配置，默认即可，不用动
Vue.config.productionTip = false

// 创建vue根实例，利用创建出来的根实例，渲染 index.html 的 div 盒子
new Vue({
  // 使用App组件进行渲染
  render: h => h(App),
}).$mount('#app')

// $mount('#app') => 挂载: 得到结构后，渲染 index.html 中 id 为 app 的盒子
