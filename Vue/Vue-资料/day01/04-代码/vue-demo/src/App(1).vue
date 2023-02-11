<template>
  <div>
    <h3>翻转世界</h3>
    <p>{{ msg }}</p>
    <button @click="change">逆转时空</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello word'
    }
  },
  methods: {
    change () {
      // 修改了数据，视图才会更新
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>