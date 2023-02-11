<template>
        <!-- 语法: V-model="变量名" -->
        <!-- 作用:可以快速的获取或者说设置表单元素的值，实现双向数据绑定 -->
    <div>
        <!-- 如果表单元素上写v-model，那么value不会生效 -->
        用户名:<input type="text" v-model="username">
        <br><br>
        密码:<input type="password" v-model="password">
        <br><br>
        <button @click="login">登录</button>
        <button @click="reset">重置</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            console.log(this.username)
            console.log(this.password)
        },
        reset(){
            // this.username = ''
            // this.password = ''
            this.username = this.password = ''
        }
    }
}

        // 双向数据绑定 v-model 针对表单元素
        //  ==> 数据变化了， 页面就更新
        //  ==> 页面变化了， 数据也变化

        // 双向数据绑定的原理？ 底层~~~ 暂时不忙讲
                // Vue2 ==> Object.defineProperty()
        // Vue3 ==> proxy
</script>

<style>

</style>