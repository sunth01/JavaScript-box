<template>
  <div>
      <h3>计算属性的基本使用</h3>
      <input type="text" v-model.number="num1"> + 
      <input type="text" v-model.number="num2"> = 
      <span>{{ sum }}</span>
  </div>
</template>

<script>
        // sum:function(){

        // }
        // ES6 简写形式更多一些

        // 1. 计算属性，必须是一个函数 
        // 2. 这个函数一定要写一个return，必须要有返回值
        // 3. 计算属性函数中的this指向的也是vue实例，如果要取data中的变量 ，this.xx
        // 4. 计算属性使用的时候，和data里面的数据一样，不能加()当做方法来调用！
        // 5. 计算属性的变量名不能和data中的变量名一样
export default {
    data(){
        return {
            num1:0,
            num2:0
        }
    },
    computed:{
        sum(){
            return this.num1 + this.num2
        }
    }
}
</script>

<style>

</style>