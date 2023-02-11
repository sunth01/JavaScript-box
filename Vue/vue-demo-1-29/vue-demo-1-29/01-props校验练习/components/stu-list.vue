<template>
  <div>
    <ul>
        <li v-for="item in list" :key='item.id'>
            <span>姓名 {{item.name}}</span>
            <span>年龄 {{item.age}}</span>
        </li>
    </ul>
    <p>{{car}}</p>
    <p>{{count}}</p>
    <p>{{age}}</p>
    <p>{{color}}</p>

  </div>
</template>

<script>
export default {
        props:{
        // 1. 基本类型的校验
        // count:String,
        car:String,

        // 2. 多个可能的类型
        count:[String, Number],

        // 3. 必填项
        age:{
            type:Number,
            required:true
        },

        // 4. 默认值，父组件可以传也可以不传的属性
        title:{
            type:String,
            default: '新年快乐'
        },
        // 一个属性只能是必填项或者默认值中的一个，它们是互斥的

                // 必填项或者默认值=> 它们是互斥的
        // 带有默认值的对象/数组的时候
        propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            // default: function () {
            //     return { msg: 'hello' }
            // }
            // default(){
            //     return {
            //         msg:'hello'
            //     }
            // }
            // 箭头函数，如果返回一个对象，需要小括号括起来
            default:()=>({msg:'hello'}),
            // default: _ => ({msg:'hello'})

            // 默认返回一个空对象
            // default:_ => {}

        },
        propD:{
            type:Array,
            // 默认空数组
            default: _ => []
        },
        color:{
            validator(value){

            // 父组件给子组件，给我的颜色必须是 red, yello, green
            // return true // 验证成功
            // return false // 验证不成功，报错
            // if (value === 'red' || value === 'yello'){
            //     return true 
            // } else {
            //     return false 
            // }
            const arr = ['red', 'blue', 'pink']
            return arr.includes("red")
            }
            
        }
            
        
        
    }
}
</script>

<style>

</style>