<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">
        <span>{{ item }}</span>
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
      arr: ['老大', '老二', '老三']
    }
  },
  methods: {
    fn () {
      // push pop  unshift shift  
      // arr.splice(从哪开始删除，删几个，添加项1，添加项2, ...)
      this.arr.splice(1, 0, `新来的${+new Date()}`)
    }
  }
}
</script>

<style>

</style>