<template>
  <div>
    <ul>
        <!-- 设置了key,相当于给这个li添加了一个标记
            新旧虚拟dom对比的时候,就会按着key的值,对比原来的那个标签
         -->
         <li v-for="item in arr" :key="item.id">{{item.name}} - {{item.age}}</li>
    </ul>
    <button @click="addOne">添加一项</button>
  </div>
</template>

<script>
// key在遍历数组的时候 :key='唯一'
// 有 id 用 id ,有唯一值用唯一值,实在没有 ,才用索引index
export default {
    data(){
        return {
            arr:[
                  {id:1, name:'小怂怂', age:6},
                  {id:2, name:'小野太君', age:2},
                  {id:3, name:'贵佐', age:3}
            ],
            addOne(){
              // this.arr.splice('起始位置，从哪儿添加', 0, 添加的元素)
              this.arr.splice(1, 0, {
                  id:+new Date(),
                  name:'小鸣',
                  age:6
              })
            }
        }
    }
}
</script>


<style>

</style>