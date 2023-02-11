<template>
  <div>
    <h3 v-if="flag">尊敬的超级vip, 里面请</h3>
    <h3 v-else>你谁呀，请先登录</h3>
    <hr>
    <h3 v-if="age >= 31">31岁往上  全球旅游</h3>
    <h3 v-else-if="age >= 21">21岁-30岁 跳广场舞</h3>
    <h3 v-else-if="age >= 11">11岁-20岁 蹦迪</h3>
    <h3 v-else>1岁-10岁  看动画片</h3>
  </div>
</template>

<script>
// 联想js中的 if else / else if
// 问题：if / else / else if  需要连着写
export default {
  data () {
    return {
      flag: true,
      age: 12
    }
  }
}
</script>

<style>

</style>