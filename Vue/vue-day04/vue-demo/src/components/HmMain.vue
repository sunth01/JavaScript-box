<template>
  <div class="main">
      <div>main内容 - 200行代码</div>
      <hm-btn></hm-btn>
      <!-- <HmBtn></HmBtn> -->
  </div>
</template>

<script>
export default {
  // name:''
}
</script>

<style scoped>
  /* 
    默认情况下，组件中写的样式，作用于全局
    我们希望组件里面的样式，只作用于当前这个组件

    推荐大家使用组件的时候，在style上都加上scoped这个属性


    scoped的原理
    1. 给当前组件内所有标签都加上一个属性 data-v-hash值
    2. 在当前组件内的样式(类名）渲染的时候, 都会加上这个特殊的属性，以属性选择器的形式
  */
.main{
    width: 100%;
    height: 600px;
    margin: 20px;
    /* background-color: gray; */
    background-color: orange;
}
</style>