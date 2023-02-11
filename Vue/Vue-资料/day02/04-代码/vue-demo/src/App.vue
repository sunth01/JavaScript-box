<template>
  <div>
    <h3>计算属性</h3>
    <input v-model.number="num1" type="text"> +
    <input v-model.number="num2" type="text">
    <hr>
    <p>计算属性算出的结果</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>
    <p>{{ sum }}</p>

    <hr>

    <p>函数算出的结果</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
    <p>{{ sumFn() }}</p>
  </div>
</template>

<script>
export default {
  // 结论：组件的配置项中，data computed methods ... 只有data是一个函数
  // 其他配置项一律是对象, 配置项里面放的是什么，就看这个是什么配置项了

  // methods => 内部，各种函数
  // computed => 内部, 各种函数，且每个函数需要有返回值
  data ()  {
    return {
      num1: 0,
      num2: 0,
    }
  },
  methods: {
    sumFn () {
      console.log('函数运算了')
      return this.num1 + this.num2
    }
  },
  computed: {
    // 在computed的函数中，this也是指向当前vue实例
    // 一旦计算属性依赖的值，变化了，会自动重新计算
    // 注意：计算属性相比于函数的优势 => 多次使用时，计算属性有缓存，性能大大优先！！
    sum () {
      console.log('计算属性求和了')
      return this.num1 + this.num2
    }
  }
}
</script>

<style>

</style>