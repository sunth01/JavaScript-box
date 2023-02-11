<template>
  <div>
    <!-- v-model 可以和表单元素做双向数据绑定， 可以快速的获取或者设置值
            input / textarea / select 等 
    -->
    <select value="023" v-model="CityId">
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="023">重庆</option>
        <option value="028">成都</option>
    </select>
    <br>
    <input type="checkbox" v-model="singleDog">是否单身
    <br>
    <textarea  cols="30" rows="10" v-model="msg"></textarea>
  </div>
</template>

<script>
export default {
      data(){
          return {
            CityId:'028',
            singleDog:true,
            msg:'我是一段文字'
          }
        }
}
</script>

<style>

</style>