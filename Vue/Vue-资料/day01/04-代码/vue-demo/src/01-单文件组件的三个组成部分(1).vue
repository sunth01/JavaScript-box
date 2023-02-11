<template>
  <!-- 组件化思想：将一个完整的页面，拆分成一个个的小组件。每个组件包含结构、样式、行为！ -->
  <div>
    <div class="one">
      <div class="son">{{ username }}</div>
    </div>
    <div>年纪-{{ age }}</div>
    <div>金钱-{{ obj.money }}</div>
    <button>按钮</button>
    <input type="text">
  </div>
</template>

<script>
// js 逻辑
// const obj = {
//   name: 'zx'
// }
// console.log(obj)

// 核心代码: 需要在 script中，导出 当前vue组件 《js 配置项》（对象）
export default {
  // vue中约定了固定的一些配置项，我们必须记忆这些配置项，达成想要的效果
  // data：函数，函数中需要return一个对象，用以提供数据
  data() {
    // return出去的对象 => 数据源，将来就是vue组件的数据
    return {
      username: 'zs',
      age: 18,
      obj: {
        money: 100,
        desc: '不错'
      }
    }
  }
}
</script>

<style lang="less">
// 关于less的支持，脚手架内部已经配好了，只不过，不会帮你默认装这个包
// 原则：你用到了less，你再装这个包 yarn add less-loader@7.2.1 less -D
.one {
  width: 200px;
  height: 100px;
  background-color: orange;
  .son {
    width: 100px;
    height: 50px;
    background-color: pink;
  }
}
</style>