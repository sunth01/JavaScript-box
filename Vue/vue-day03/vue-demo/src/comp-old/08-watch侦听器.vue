<template>
  <div>
      <h3>银行卡余额{{ money }}</h3>
      <button @click="money+= 6000">发工资</button>
      <button @click="money-= 200">干饭</button>
            <!--  -->
      <br>
      <div>{{ obj }}</div>
      <button @click="obj.age++">长大了一岁</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // 需求：只要我卡里的钱变化了，就发一个短信通知一下我
            money:100,
            obj:{
                name:'刘德华',
                age:20
    },
        }
    },

    watch:{
        // 1.简单类型
        // 第一个参数是新值，第二个参数是原来的值
        // money:function(newVal, oldVal){
        //     console.log(newVal, oldVal)
        // }
        // 对象的属性，本身可以写成字符串形式
        // 'money':function(newVal, oldVal){
        //     console.log(newVal, oldVal)
        // },
        // ==> ES6 形式
        money(newVal, oldVal){
            console.log(newVal, oldVal)
        },
        // ==> 一般不这么写
        // 'money'(newVal, oldVal){
        //     console.log(newVal, oldVal)
        // }
        'obj.age' (newVal, oldVal){
            console.log(newVal, oldVal)
        }

    }
}
</script>

<style>

</style>