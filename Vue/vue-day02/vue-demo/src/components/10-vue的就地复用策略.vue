<template>
  <div>
        <ul>
          <!-- 如果把key写为index，相当于是没有写key -->
          <!-- 如果key写index，甚至还存在bug -->
          <!-- <li v-for="(item, index) in arr" :key="index">
            {{ item }}<input type="text">
         </li> -->

         <!-- 
             设置了key，相当于给这个li标签加了一个标记，
             新旧虚拟dom对比的时候，就会按着key的值 对比原来的那个标签
          -->
         <li v-for="(item) in arr" :key="item">
            {{ item }}<input type="text">
         </li>
          
      </ul>      <ul>
          <!-- 如果把key写为index，相当于是没有写key -->
          <!-- 如果key写index，甚至还存在bug -->
          <!-- <li v-for="(item, index) in arr" :key="index">
            {{ item }}<input type="text">
         </li> -->

         <!-- 
             设置了key，相当于给这个li标签加了一个标记，
             新旧虚拟dom对比的时候，就会按着key的值 对比原来的那个标签
          -->
         <li v-for="(item) in arr" :key="item">
            {{ item }}<input type="text">
         </li>
          
      </ul>
      <button @click="addOne">添加一项</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arr:['老大','老二','老三']
        }
    },
    methods:{
        // 想要在老大的后面添加一个 
        // push 后面添加
        // pop  后面删
        // unshift 前面添加
        // shift  前面删除
        // splice  中间添加或者删除
        addOne(){
            // this.arr.splice('起始位置，从哪儿添加', 0, 添加的元素)
            this.arr.splice(1, 0, '老六')
        }

        // 就地复用：vue会尽可能的同层级同位置， 对比虚拟dom，复用旧的dom结构，进行差异化更新
        // 不写key或者key为index的时候 就地复用
        // 好处：可以复用旧的dom结构，提高渲染效率



    }
}
</script>

<style>

</style>