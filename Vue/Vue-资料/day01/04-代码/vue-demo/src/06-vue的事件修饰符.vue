<template>
  <div @click="fatherFn">
    <h3>vue事件修饰符 - 快速阻止冒泡 和 默认行为</h3>
    <!-- 
      事件修饰符 => 修饰事件
      @事件名.prevent  =>  e.preventDefault()  阻止默认行为
      @事件名.stop     =>  e.stopPropagation() 阻止冒泡
     -->
    <a href="http://www.jd.com" @click.prevent.stop="fn1">去京东</a>
    <a href="http://www.taobao.com" @click.prevent.stop="fn2('大秘书')">去淘宝</a>
  </div>
</template>

<script>
export default {
  methods: {
    fn1 () {
      console.log('去京东')
    },
    fn2 (person) {
      console.log(person, '去淘宝')
      console.log('昨天不是买了一个包包了么~')
    },
    fatherFn () {
      console.log('老父亲，被点击了，说明冒泡了')
    }
  }
}
</script>

<style>

</style>