<template>
  <div>
    <!-- v-model: 给表单元素使用, 实现双向数据绑定 
         语法：v-model="变量值"
         作用：可以快速 收集 或 设置 表单元素，实现双向绑定！
    -->
    姓名：<input type="text" v-model="username"> <br><br>
    密码：<input type="password" v-model="password"> <br><br>
    <button @click="login">登录</button>
    <button @click="reset">重置</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('登录 => ', this.username, this.password)
    },
    reset () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>
<style>

</style>