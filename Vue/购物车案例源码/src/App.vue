<template>
  <div id="app">
    <MyHeader background="red" title="购物车案例"></MyHeader>
    <div class="main">
      <MyGoods v-for="obj in list" :key="obj.id" :obj='obj'></MyGoods>
    </div>
    <MyFooter @changeAll='allFn' :arr='list'></MyFooter>
  </div>
</template>
 
<script>
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data () {
    return {
      list: [], // 保存商品的所有数据
    }
  },
  created () {
    // 因为 axios 已经挂载到了全局上，因此无需引入，直接使用即可
    this.$axios({
      method: 'GET',
      url: '/api/cart'
    }).then(res => {
      // console.log(res);
      this.list = res.data.list
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    allFn(bool){
      // 将 MyFooter 内的全选状态 true/false 同步给所有小选框的关联属性上
      this.list.forEach(obj => obj.goods_state = bool)
    }
  }
}
</script>
 
<style scoped lang='less'>
.main {
  padding: 45px 0 50px 0;
}
</style>