<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="isAllSelected">
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{goodsPrice}}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算 ( {{goodsCount}} )</button>
  </div>
</template>

<script>
export default {
  props:{
    list:Array
  },
  computed:{
    goodsPrice(){
      return this.list.reduce((sum,item) => item.goods_state ? sum + item.goods_count*item.goods_price : sum, 0)
    },
    goodsCount(){
      return this.list.reduce((sum,item) => item.goods_state ? sum + item.goods_count : sum, 0)
    },  
    isAllSelected:{
      get(){
        return this.list.every(t => t.goods_state)
      },
      set(value){
          this.list.forEach(t => t.goods_state = value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>