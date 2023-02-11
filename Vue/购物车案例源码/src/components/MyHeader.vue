<template>
  <div class="my-header" :style="{backgroundColor: background, color: color}">
    {{title}}
  </div>
</template>
 
<script>
export default {
  props: {
    // 注意：外界在使用时，需要遵守变量名作为属性名，值的类型也要遵守
    background: String, // 外界传入此变量的类型为字符串
    color: {
      type: String, // 约束 color 值的类型
      default: '#fff', // 当前 color 的默认值（外界不传时使用默认值）
    },
    title: {
      type: String,
      required: true // 必须传入此变量的值
    }
  }
}
</script>
 
<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>