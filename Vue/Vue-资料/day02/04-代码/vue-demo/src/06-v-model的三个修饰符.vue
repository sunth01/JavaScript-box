<template>
  <div>
    <!-- .number 尝试将输入的内容，能转数字就转数字（转不了数字，不乱改） -->
    年纪: <input type="text" v-model.number="age"> <br><br>

    <!-- .trim 去掉首尾空格 -->
    标题: <input type="text" v-model.trim="title"> <br><br>

    <!-- .lazy   input事件，实时修改实时触发 /  change事件，失去焦点或回车触发 -->
    描述: <input type="text" v-model.lazy="desc"> <br><br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      age: 18,
      title: '大标题',
      desc: '号外号外~ 今天是个陨石落地的日子~ '
    }
  }
}
</script>

<style>

</style>