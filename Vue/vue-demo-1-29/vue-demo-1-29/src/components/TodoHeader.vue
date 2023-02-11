<template>
 <header class="header">
   <h1>todos</h1>
   <input v-model="todoName" @keyup.enter="add" class="new-todo" placeholder="请输入任务名称" autofocus />
  </header>
</template>

<script>
export default {
  data(){
    return{
      todoName:''
    }
  },
  methods:{
    add(){
      if (this.todoName === '') return
      this.$emit('add',this.todoName)
      this.todoName = ''
    }
  }

}
</script>

<style>

</style>