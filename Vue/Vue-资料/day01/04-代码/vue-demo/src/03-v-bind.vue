<template>
  <!--
    v-bind指令：
    作用：动态的设置html标签属性
    语法：
      v-bind:标签属性名 = '变量'
      :标签属性名 = '变量'  (简写语法)

    强调：
      给标签设置属性
      title="abc"    设置title属性，值是 'abc' 字符串 （写死的）
      :title="abc"   设置title属性，值是 abc 变量，要去 data 中取值的！！！
  -->
  <div>
    <div v-bind:title="shuaipeng">123</div>
    <a v-bind:href="link">去百度</a>
    <hr>
    <div :title="shuaipeng" :id="box">123</div>
    <a :href="link">去百度</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shuaipeng: '帅鹏真帅，无敌帅~ 上海第一帅~ 全国第一帅',
      link: 'http://www.baidu.com',
      box: 'my'
    }
  }
}
</script>

<style>

</style>