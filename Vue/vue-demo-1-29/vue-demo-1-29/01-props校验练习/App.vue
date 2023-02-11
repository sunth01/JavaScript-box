<template>
  <div>
     <!-- 封装一个学生列表组件，当某个位置，需要展示学生列表时，只要准备某个组件即可 -->
    <stu-list :count='100' :car="car" :age="age" :color="color"></stu-list>
  </div>
</template>

<script>
import StuList from './components/stu-list.vue'
export default {
  // 不同场景下，后台给的学生列表数据，不一样的 => 但是展示的效果是一致的
  data () {
    return {
      // stuArr: [
      //   { id: 1, name: '小花', age: 18},
      //   { id: 2, name: '小王', age: 19},
      //   { id: 3, name: '小白', age: 20},
      // ],
      count:100,
      car:'宾利',
      age:18,
      obj:{
        msg:'开始上课了'
      },
      color:'red'
    }
  },
  components:{
    StuList
  }
}
</script>

<style>

</style>