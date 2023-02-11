<template>
    <div class="goods">
        <h3>商品:{{title}}</h3>
        <p>价格:{{price}}元</p>
        <p>描述:{{desc}}</p>
        <button @click="cutPrice(pid)">砍一刀 - {{pid}}</button>
    </div>
</template>

<script>
export default {
    name:'MyProduct',
    props:['price','title','pid'],
    data(){
        return {

        }
    },
    methods:{
        cutPrice(id){
            this.$emit('cut', 10, id)
        }
    }
}
</script>
<style>
.goods{
    margin: 50px auto;
}
</style>