<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="isAll">
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{allPrice}}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算 ( {{allCount}} )</button>
  </div>
</template>
 
<script>
export default {
  props: {
    arr: Array
  },
  computed: {
    isAll: {
      set(val){ // val 就是关联表单的值(true/false)
      // console.log(val);
        this.$emit('changeAll', val)
      },
      get(){
        // 查找小选框关联的属性有没有不符合勾选的条件
        // every() 查找不符合条件的并返回 false
        return this.arr.every(obj => obj.goods_state  === true)
      }
    },
    // 统计数量
    allCount(){
    /**reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
       * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
       * total 	必需。初始值, 或者计算结束后的返回值。
         currentValue 	必需。当前元素
         currentIndex 	可选。当前元素的索引
         arr 	可选。当前元素所属的数组对象。
         initialValue 	可选。传递给函数的初始值
    */
    /**
       * 这里的 0 其实就是第一个参数 sum 的初始值
       * obj 遍历数组里面的每个对象
      */
      return this.arr.reduce((sum, obj) => {
        // 判断是否选中商品
        if(obj.goods_state  === true){
          sum += obj.goods_count
        }
        return sum
      }, 0)
    },
    // 统计总价
    allPrice(){
      return this.arr.reduce((sum, obj) => {
        if(obj.goods_state ===  true){
          sum += obj.goods_count * obj.goods_price
        }
        return sum
      }, 0)
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