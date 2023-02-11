<template>
 <section class="main">
   <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
   <label for="toggle-all">Mark all as complete</label>
   <ul class="todo-list">
    <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
    <li :class="{completed:item.flag}" v-for="item in list" :key="item.id">
     <div class="view">
      <!-- v-model永远不要直接和父组件(props)的数据 直接绑定 ===> 没有遵循单向数据流 -->
      <!-- v-model其实是一个语法糖，自动根据不同元素，设置不同的属性，监听不同的事件（vue内部）
      // 1. 数据变化 ==> 视图更新   input框的type如果是checkbox  :checked
      //   这里的数据变化，app.vue中的data的数据变化 
      // 2. 视图变化 ==> 数据更新   让父组件自己去修改数据，通知父组件 @change 事件 
      //   视图变化，指的是我们去勾选了复选框，改变了页面的样子
      （1）input type='text' 文本框
        v-model  => :value + @input
        v-model  => :value + @change
      (2) input text="checkbox"  复选框
        v-model  => :checked + @change-->
      <input :checked="item.flag" @change="handleChange($event,item.id)" class="toggle" type="checkbox" />
      <label>{{item.name}}</label>
      <button class="destroy" @click="del(item.id)"></button>
     </div>
    </li>
    <!-- <li>
     <div class="view">
      <input class="toggle" type="checkbox" />
      <label>行万里路</label>
      <button class="destroy"></button>
     </div>
    </li> -->
   </ul>
  </section>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  computed:{
    isAll:{
      get(){
        return this.list.every(item => item.flag === true)

      },
      set(value){
        this.$emit('changeAll',value)
      }
    }


  },
  methods:{
    del(id){
      this.$emit('del',id)
    },
    handleChange(e,id){
      this.$emit('handleChange', e.target.checked,id)
    }
  }

}
</script>

<style lang='less' scoped>

</style>