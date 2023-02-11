<template>
  <div>
    <!-- 模板中访问数据，无需 this. -->
    <button @click="isShow = !isShow">控制显示隐藏</button>
    <!-- v-show="布尔值" true显示 false隐藏 
         原理：控制css display:none
         适合场景：频繁切换
    -->
    <h3 v-show="isShow">我是v-show控制的盒子</h3>
    <!-- v-if="布尔值" true显示 false隐藏    （控制页面有无该节点）
         原理：动态删除 或 创建元素
         适合场景：要么显示，要么隐藏，不太会频繁切换，隐藏时需要 移除节点 的场景
         另外：v-if是惰性的，如果v-if="false"，那么不会创建该节点！一直隐藏某个元素，性能更高
    -->
    <h3 v-if="isShow">我是v-if控制的盒子</h3>
  </div>
</template>
<script>
export default {
  // 提供数据： data 是一个函数, 内部提供数据
  data () {
    return {
      isShow: true
    }
  },
  // 提供方法： methods 是一个对象，内部提供函数
  methods: {

  }
}
</script>

<style>

</style>