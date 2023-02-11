<template>
  <div>
    <h3>按键修饰符</h3>
    <input @keyup.enter="handleKeyup" type="text"><button>搜索</button>
  </div>
</template>

<script>
export default {
  methods: {
    // handleKeyup (e) {
    //   if (e.key === 'Enter') {
    //     console.log(e)
    //     console.log('开始搜索')
    //   }
    // },

    handleKeyup (e) {
      console.log(e)
      console.log('开始搜索')
    }
  }
}
</script>

<style>

</style>