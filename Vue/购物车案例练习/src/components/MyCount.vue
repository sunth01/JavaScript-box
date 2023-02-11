<template>
  <div class="my-counter">
    <!-- 控制数量增加减少 disabled  减到0 禁止操作 -->
    <button type="button" class="btn btn-light" @click="item.goods_count--" :disabled="item.goods_count <= 0">-</button>
    <input type="number" class="form-control inp" v-model="item.goods_count">
    <button type="button" class="btn btn-light" @click="item.goods_count++">+</button>
  </div>
</template> 

<script>
export default {
  props:{
    item:Object
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