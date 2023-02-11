<template>
<!-- 当list有数据的时候 footer才显示 -->
 <footer class="footer" v-if="list.length > 0">
   <span class="todo-count"><strong>{{leftCount}}</strong>剩余</span>
   <ul class="filters">
    <li>
     <a @click="filter('all')" :class="{selected:type === 'all'}" href=" ">全部</a>
    </li>
    <li>
     <a @click="filter('active')" :class="{selected:type === 'active'}" href="#/active">进行中</a>
    </li>
    <li>
     <a @click="filter('completed')" :class="{selected:type === 'completed'}" href="#/completed">已完成</a>
    </li>
   </ul>
   <!-- 有已完成的任务，才需要显示这个按钮 -->
   <button v-if="isShowClear" @click="clear" class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
 props:{
  list:Array,
  type:String

 },
 data(){
  return{
   
  }

 },
 computed:{
  // 因为计算属性有缓存 所以数据修改优先选择在计算属性下的函数
  leftCount(){
   return this.list.filter(item=> item.flag === false).length
  },
  isShowClear(){
   // 只要有一个任务完成就显示
   return this.list.some(item => item.flag === true) // some 返回 true/false
  }
 },
 methods:{
  clear(){
    this.$emit('clear')
 },
  filter(type){
  // this.type =type
  this.$emit('changeType',type)

 }

 },

}
</script>

<style>

</style>