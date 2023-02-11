<template>
  <div>
    <h1>v-if和v-show</h1>
    <!-- 变量在标签上使用，不需要加this！ -->
    <button @click="isShow = !isShow">点击控制显示隐藏</button>
    <!-- v-show -->
    <!-- 语法 v-show= "" 布尔值/布尔值的变量 -->
    <!-- 本质上:控制的是css的display:none -->
    <!-- 使用场景:频繁的切换显示隐藏 可以使用v-show -->
    <h3 v-show="isShow">我是v-show控制的</h3>
    <h3 v-if="isShow">我是v-if控制的</h3>
    <!-- v-if -->
    <!-- 语法:v-if="布尔值/布尔值的变量" -->
    <!-- 本质上:动态的控制节点的创建或者删除 -->
    <!-- 应用场景:要么显示,要么隐藏,不那么频繁的切换的时候,可以用v-if -->
    <!-- v-if 是惰性的 如果v-if="false" 这个节点不会创建 -->
  </div>
</template>

<script>


export default {
  data(){
    return {
      isShow:true  //true表示显示
    }
  }
}
</script>

<style>

</style>
