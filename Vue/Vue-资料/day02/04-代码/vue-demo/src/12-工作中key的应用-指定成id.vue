<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item.id">
        <span>{{ item.name }}</span>
        <input type="text">
      </li>
    </ul>

    <button @click="fn">新来的</button>
  </div>
</template>

<script>
// key: 必须是字符串 或 数字，且要保证唯一性  =>  id (最常见)
export default {
  data () {
    return {
      arr: [
        { id: 1, name: '小明', age: 6 },
        { id: 2, name: '小花', age: 4 },
        { id: 3, name: '小美', age: 8 },
      ]
    }
  },
  methods: {
    fn () {
      // push pop  unshift shift  
      // arr.splice(从哪开始删除，删几个，添加项1，添加项2, ...)
      this.arr.splice(1, 0, {
        id: +new Date(),
        name: '小兰',
        age: 5
      })
    }
  }
}
</script>

<style>

</style>