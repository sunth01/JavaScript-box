<template>
  <div class="goods">
    <p>这是子组件中的数据 - {{persom}}</p>
    <button @click="updateAge">砍一刀</button>
  </div>
</template>

<script>
export default {
    props:['person'],
    methods:{
        // 因为父组件传递过来的是一个引用类型的数据
        // 如果子组件修改了这个引用类型的数据，本质上修改还是父组件中的数据
        // 这个时候就会影响到父组件，甚至父组件中使用了这个变量的其他组件也会有影响
        updateAge(){
            this.person.age += 1
        }
    }
}
</script>

<style>
.goods{
    margin: 50px auto;
}
</style>