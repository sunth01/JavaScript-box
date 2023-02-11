<template>
  <div>
    <!-- 了解：不常用 => 一般常用的是插值表达式 -->
    <div v-text="str1"></div>

    <!-- 当后台返回一些标签节点时，经常会用v-html进行动态解析渲染 
         但是永远不要直接将用户的输入，直接作为v-html的值，容易造成XSS攻击（跨站脚本攻击）

         用户的输入，可能是一些script脚本 => v-html 解析标签，解析script，执行js，容易有攻击漏洞

         v-html="值"  底层: innerHTML
    -->
    <div v-html="str2"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      str1: '<a href="#">去百度</a>',
      str2: '<a href="#">去百度</a>'
    }
  }
}
</script>

<style>

</style>