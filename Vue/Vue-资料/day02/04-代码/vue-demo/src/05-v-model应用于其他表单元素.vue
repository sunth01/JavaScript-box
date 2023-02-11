<template>
  <div>
    <!-- v-model可以和表单元素，实现双向数据绑定 => 可以快速获取 或 设置表单 -->
    <select v-model="cityId">
      <option value="101">上海</option>
      <option value="102">北京</option>
      <option value="103">天津</option>
      <option value="104">成都</option>
    </select> {{ cityId }}

    <hr>

    是否单身：<input type="checkbox" v-model="isSingle"> {{ isSingle }}

    <hr>

    <textarea v-model="desc" value="456"></textarea> {{ desc }}
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityId: '103',
      isSingle: false,
      desc: ''
    }
  }
}
</script>
<style>

</style>