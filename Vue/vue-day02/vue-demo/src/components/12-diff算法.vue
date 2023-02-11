<template>
  <div></div>
</template>

<script>
export default {

}

// diff算法 ==> 比较新旧dom的差异
// 策略1 ==> 同级根元素的对比、
// 1. 如果根元素变化了，那么不能考虑复用，整个dom树删除重建
// 2. 如果根元素不变，看根元素的属性是否变化来更新属性，并递归的往下对比差异


// 策略2  ==> 兄弟元素比较
// 1. 对比同级兄弟元素，默认按照下标进行对比复用  （不加key或者说key为index的时候）
// 2. 如果设置了key，key是唯一的标识，会按照相同的key的元素进行复用
</script>

<style>

</style>