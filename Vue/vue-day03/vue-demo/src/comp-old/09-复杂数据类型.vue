<template>
  <div>
      <h2>监听复杂数据类型</h2>
      <div>{{ person }}</div>
      <button @click="person.name = '好人'">偷偷改名</button>
      <button @click="person.age = 88">偷偷改年龄</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 24 小时 全方位监听~~~ 
            person:{
                name:'嫌疑犯',
                age:22,
                desc:'喜欢DJ~踩点~~'
            }
        }
    },
    watch:{
        person:{
            deep:true, // 表示深度监听,监听这个对象的每一个属性
            immediate:true, // 一开始就立即执行一次
            // 当我们深度监听的时候,newVal和oldVal都是一个对象
            // 他们会指向同一个引用,oldVal在深度监听的时候, 无效
            handler(newVal, oldVal){
                console.log(newVal)
                console.log(oldVal)
                console.log(newVal === oldVal)
            }
        }
    }
}
</script>

<style>

</style>