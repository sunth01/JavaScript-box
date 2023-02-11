<template>
  <div>
    <h3>vue中获取事件对象</h3>
    <a href="http://www.jd.com" @click="fn1">去京东</a>
    <!-- $event 在模板中使用，可以获取到事件的形参  
         fn2原本的形参，就是点击事件的形参 event 
    -->
    <a href="http://www.taobao.com" @click="fn2('大秘书', $event)">去淘宝</a>
  </div>
</template>

<script>
// btn.addEventListener('click', function(e) {

// })
export default {
  methods: {
    fn1 (e) {
      e.preventDefault()
      console.log('去京东')
    },
    fn2 (person, e) {
      e.preventDefault()
      console.log(person, '去淘宝')
      console.log('昨天不是买了一个包包了么~')
    }
  }
}
</script>

<style>

</style>