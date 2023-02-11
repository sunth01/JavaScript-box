<template>
  <div>
      <input type="text" v-model="firstName">-
      <input type="text" v-model="lastName">
      <span>{{ fullName }}</span>
      <button @click="changeName">改名</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            firstName:'小野',
            lastName:'太浪'
        }
    },
    methods:{
        changeName(){
            // console.log(1)
            this.fullName = '小贵-司令'
        }
    },
    computed:{
        // fullName(){
        //     return this.firstName + '-' + this.lastName
        // }
        // 当我们想要去设置计算属性值的时候
        fullName:{
            // getter
            get(){
                console.log('当fullName被读取的时候,执行了getter函数')
                return this.firstName + '-' + this.lastName
            },
            // setter
            // 就算是设置了fullName计算属性的值,也不是直接设置的
            // 是基于改的值,更新依赖项,依赖项更新了(改变了),计算属性又重新更新了
            set(newVal){
                console.log('fullName被设置了,修改了')
                const names = newVal.split('-')
                this.firstName = names[0]
                this.lastName = names[1]
            }
        }
    }
            // 1. getter函数，里面一样必须要写return
            //  => 当我们使用fullName这个计算属性的时候，就会触发调用执行这个函数
            //  => 同样，有缓存的哈~~
            // 2. setter函数，当我们去设置计算属性的值的时候，就会触发 this.fullName = xxx
            // 3. setter函数接收的变量就是我们赋的值，它的作用是基于传过来的值，更新依赖项，它里面不写return

}
</script>

<style>

</style>