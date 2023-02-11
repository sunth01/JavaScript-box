<template>
  <!-- 只能有一个根节点 -->
  <div>
    <!-- <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter> -->
    <!-- <hm-header></hm-header>
    <hm-main></hm-main>
    <hm-footer></hm-footer> -->
    <hm-btn></hm-btn>
  </div>
</template>

<script>
// import 组件对象 from '路径'
// ==> 组件对象 不是一个组件名，但是我们一般在这里命名的时候就和组件名写成一样
Vue.config.productionTip = false
import HmBtn from './components/HumButton.vue'
// Vue.component('组件名 ，HmBtn)
// 注册全局组件
// 全局注册的组件，其他子组件都能使用
// 1. 如果注册的时候写的短横线形式，在html上使用的时候，只能使用短横线形式
// 2. 注册的时候使用的大驼峰，那么大驼峰和短横线的形式都可以使用
// 推荐我们的组件名字，就用大驼峰命名
Vue.components('HmBtn',HmBtn)
export default {
  // 组件导入
  components:{
    // "组件名":组件对象
    HmBtn
  }
}
</script>

<style>

</style>