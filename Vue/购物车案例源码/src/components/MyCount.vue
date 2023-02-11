<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" :disabled='obj.goods_count === 1' @click="subFn">-</button>
    <input type="number" class="form-control inp" v-model.number="obj.goods_count">
    <button type="button" class="btn btn-light" @click="addFn">+</button>
  </div>
</template>
 
<script>
export default {
  props: {
    // 因为数量控制要通过对象“互相引用的关系”来影响外面对象的数量值，
    // 所有最好传 对象
    obj: Object // 商品对象
  },
  methods: {
    // 增加
    addFn(){
      this.obj.goods_count++ 
    },
    // 减少
    subFn(){
      // if(this.obj.goods_count > 1){
      //   this.obj.goods_count--
      // }else {
      //   return
      // }
 
      // 有了 :disabled='obj.goods_count === 1' 判断后就可以直接按照如下写
      this.obj.goods_count--
    }
  },
  watch: {
    obj: {
      deep: true, // 开启深度监听
      handler(){
        // 当商品数量小于0时，强制改为1
        if(this.obj.goods_count < 0){
          this.obj.goods_count = 1
        }
      }
    }
  }
}
</script>
 
<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn, .inp{
    transform: scale(0.9);
  }
}
</style>