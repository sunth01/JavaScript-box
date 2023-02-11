<template>
  <!-- 只能有一个根节点 -->
  <div>
    <!-- 正常标签的内容部分，可以使用 {{ }} 设置内容 -->
    <div>{{ str }}</div>
    <div>{{ obj.name }}</div>
    <div>{{ obj.age }}</div>
    <div>{{ obj.age > 18 ? '成年了' : '未成年' }}</div>
    <hr>
    <!-- 1. 初学者，一定注意，模板中使用的变量 和 data 中的变量名要统一
            使用的数据，要在data中存在
            Property or method "strr" is not defined  => 你用的这个变量，他找不到
    -->
    <!-- <div>{{ strr }}</div> -->

    <!-- 2. 能使用表达式，但是不能使用语句 if for  后面会学 v-if v-for -->
    <!-- <div>{{ if (obj.age > 18) { ... } }}</div> -->
    <!-- <div>{{ for }}</div> -->

    <!-- 3. 不能在标签属性中使用 {{ }} 插值 语法被废弃了 => 后面会学 v-bind -->
    <!-- <div id="box" class="xxx" title="{{ str }}" data-id="111"></div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      str: '学习vue, 真开心',
      obj: {
        name: '小花',
        age: 16,
        desc: '性格温柔'
      }
    }
  }
}
</script>

<style>

</style>