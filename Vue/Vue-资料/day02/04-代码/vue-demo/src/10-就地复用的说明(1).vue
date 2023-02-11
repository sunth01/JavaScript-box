<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>

    <button @click="fn">新来的</button>
  </div>
</template>

<script>
// 就地复用：vue会尽可能同层级，同位置复用旧的dom结构 （提升渲染性能）
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
      this.arr.splice(1, 0, '新来的')
    }
  }
}
</script>

<style>

</style>