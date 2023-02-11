<template>
    <div class="goods">
        <h3>商品：{{ title}}</h3>
        <p>价格：{{ price }}元一个</p>
        <p>描述：{{ desc}}</p>
        <button @click="cutPrice">砍一刀</button>
        <my-product
          v-for="item in list"
          :key="item.id"
          :title='item.title'
          :price="item.price"
          :desc="item.desc"
          :pid="item.id"
          @click="updatePrice"
        ></my-product>
    </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
export default {
  components: { MyProduct },
    name:'MyProduct',
    // key不能当做props属性，传给子组件

    // props使用的时候，和我们的data数据一样类似, 在方法中取值，也是this.xxx
    // props 数据是父组件传给我们子组件的，

    // 单向数据流： 数据从父组件传递到子组件，数据的流动路径 父 => 子 
    // 如果我们子组件修改了这个props中的变量值，相当于是子组件修改了父组件中的数据， 子 => 父 ； 控制台Error

    // 单向数据流原则:子组件不能修改或者设置从父组件传递过来的porps值
    props:['price','title','desc'],
    data(){
        return {
            // msg:'a msg'
            name:'刘德华'
        }
    },
    methods:{
        updatePrice(price, id){
          console.log(`让id为${id}的商品价格砍${price}元`)
          const goods = this.list.find(el => el.id === id)
          console.log(goods)
          if(goods.price - price > goods.low){
            goods.price -= price
          }else {
            return alert('大兄弟,最低价了!')
          }
        }
    }
}
</script>
<style>
.goods{
    margin: 50px auto;
}
</style>