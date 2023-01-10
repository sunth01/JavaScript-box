<template>
  <div id="app">
    <h1>我是根组件</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
.box {
  background-color: rgb(221, 0, 255);
  .inner {
    background: rgb(106, 0, 255);
  }
}  
</style>
