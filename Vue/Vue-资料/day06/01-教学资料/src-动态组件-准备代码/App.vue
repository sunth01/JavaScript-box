<template>
  <div id="app">
    <h1>动态组件dynamic的学习</h1>
    <button class="my-btn-primary">
      账号密码填写
    </button>
    <button class="my-btn-success">
      个人信息填写
    </button>

    <!--
      动态组件的使用 ( component 组件 + is 属性 )
      (1) 设置挂载点<component>, (在哪显示)
      (2) 使用is属性来设置要显示哪个组件 (显示哪一个组件)
    -->
  </div>
</template>

<script>
export default ({

})
</script>

<style lang="less">
#app {
  padding: 20px;
  .my-btn-primary {
    margin-right: 10px;
  }
}
</style>
