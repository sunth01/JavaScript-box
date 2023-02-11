<template>
<div>
    <h3>计算属性的基本使用</h3>
    <input type="text" v-model.number="num1"> + 
    <input type="text" v-model.number="num2"> = 

    <hr>
    <h3>计算属性计算的结果</h3>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <h3>函数调用的结果</h3>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            num1:0,
            num2:0,
            // sum:0
        }
    },
    methods:{
        sumFn(){
        console.log('调用了一次函数')
        return this.num1 + this.num2
        }
    },
    // sum这个属性，依赖于num1和num2， 这种情况，我们可以使用计算属性来实现功能
    // computed 是一个对象
    computed:{
        // sum:function(){

        // }
        // ES6 简写形式更多一些

        // 1. 计算属性，必须是一个函数 
        // 2. 这个函数一定要写一个return，必须要有返回值
        // 3. 计算属性函数中的this指向的也是vue实例，如果要取data中的变量 ，this.xx
        // 4. 计算属性使用的时候，和data里面的数据一样，不能加()当做方法来调用！
        // 5. 计算属性的变量名不能和data中的变量名一样
        sum(){
            console.log('计算了一次-computed')
            return this.num1 + this.num2
        },
        // 如果只使用一次，计算属性感觉和函数调用是一样的
        // 那为什么会有计算属性呢？
        // 计算属性相比函数调用的优势：多次使用的时候，计算属性有缓存，性能消耗小

        // 特点
          // 1. 计算属性会缓存结果，只要依赖项不改变，就直接读取缓存
          // 2. 依赖项改变，函数重新执行并缓存最新的结果

          // 使用场景
          // =>当某个值依赖其他值的时候，就可以使用计算属性。
          // 1. 求和 ， 求平均值 
          // 2. 全选反选等 

        
    }

}
</script>

<style>

</style>