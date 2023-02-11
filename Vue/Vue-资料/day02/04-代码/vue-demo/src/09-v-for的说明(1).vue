<template>
  <div>
    <!-- v-for：遍历
         1. 遍历数组（重点背诵！！！）
            v-for="item in 数组名"            item指代遍历的每一项
            v-for="(item, index) in 数组名"   index指代遍历的这个项下标

         2. 对象(了解)
            v-for="(value, key) in 对象名"

         3. 数字(了解)
            v-for="item in 数字"
     -->

     <ul>
       <li v-for="item in arrList" :key="item">{{ item }}</li>
     </ul>

    <hr>

    <ul>
      <li v-for="(item, index) in arrList" :key="item">{{ item }} - {{ index }}</li>
    </ul>

    <hr>

    <ul>
       <li v-for="(fruit, i) in arrList" :key="fruit">{{ fruit }} - {{ i }}</li>
    </ul>

    <hr>

    <ul>
      <li v-for="(value, key) in girlFriend" :key="value">
        {{ key }} : {{ value }}
      </li>
    </ul>

    <hr>

    <div v-for="item in 20" :key="item">{{ item }} 我是测试的盒子</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      arrList: ['苹果', '鸭梨', '香蕉', '榴莲'],
      girlFriend: {
        name: '小花',
        age: 22,
        desc: '是一个贤惠的小姑娘~'
      }
    }
  }
}
</script>

<style>

</style>