<template>
  <div>
    <h3>vue中如何控制样式 - 控制类名</h3>
    <!-- 
      :class="对象/数组"
      (1) 传对象 :class="obj"  (重要！！！)
          { 键: 值, 键: 值 } 如果值，是true，那么就会有这个类，类名就是对象的键
          { pink: true } 给这个盒子，加上了一个 pink 类
          { pink: false } 这个盒子，不加上 pink 类

      (2) 传数组 :class="arr" (了解)
          [类名1, 类名2, 类名3, ...]  数组里面有的项，就是要添加的类 （适合批量添加多个类）
    -->
    <div class="box" :class="obj"></div>
    <div class="box" :class="{ pink: isPink, orange: isOrange }"></div>

    <div class="box" :class="arr"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        pink: true,
        orange: true
      },
      isPink: true,
      isOrange: false,

      arr: ['orange', 'big', 'circle']
    }
  }
}
</script>

<style lang="less">
.box {
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  margin: 10px;
}
.pink {
  background-color: pink;
}
.orange {
  background-color: orange;
}
.big {
  width: 200px;
  height: 200px;
}
.circle {
  border-radius: 50%;
}
</style>