<template>
  <div>
    <!-- 
      指令：v-on
      作用：注册事件
      语法：
        1. v-on:事件名 = "要执行的少量代码"
           当逻辑，只有一句话，就可以执行完毕 => 少量代码，可以直接写在模板中

        2. v-on:事件名 = "methods中的函数名"
           当点击时，就会执行下面的函数

        3. v-on:事件名 = 'methods中的函数名(传参1, 传参2, ...)'
     -->
    <h3>银行卡余额 - {{ money }}</h3>
    <button @click="money++">搬砖</button>
    <button @click="money += 2">搬两块砖</button>

    <button @click="addMoney">开小卖部一个月</button>

    <button @click="eat('销冠')">请销冠吃饭</button>
    <button @click="eat('秘书')">请秘书吃饭</button>
  </div>
</template>

<script>
export default {
  // data 里面 用于存放 数据，只有值会经常发生变化的才会放到 data 中
  // methods 里面 用于存放 方法，方法是用于调用的
  data() {
    return {
      money: 666, // 这里提供的所有data的属性值，都会被挂到vue实例上
    }
  },
  methods: {
    // methods中如果要访问或修改data中的数据，this.xxx = '值'
    // methods所有方法中的 this， 指向当前vue实例 （vue内部绑好了）
    // 存放记录所有的方法
    addMoney() {
      // 租金 -3000  人工 -4000  账面收入 20000
      this.money = this.money - 3000 - 4000 + 20000
    },

    eat(person) {
      if (person === '销冠') {
        alert('呀，销冠来了，请个海底捞')
        this.money -= 1000
      }

      if (person === '秘书') {
        alert('呦，你来了~ 秘书')
        this.money -= 10000
      }
    },
  },
}

// const obj = {
//   name: 'xx',
//   test: {},
//   sayHi() { ... }
// }

// const p = new Person()  => 构造函数内部 this.name = xxx  this.age = xxx
// p.name
// p.age
</script>

<style></style>
