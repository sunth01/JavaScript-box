<template>
  <div>
      <button @click="addOne">添加一项</button>
  </div>
</template>

<script>

    // key 必须是字符串或者数值类型,不能是对现象或数组等非基本类型的数据
    // key的作用
    // 便利的时候 :key="唯一标识"  可以表示元素的唯一性,可以更好的进行新旧虚拟dom的对比,提高了对比的复用性
export default {
    data(){
        return {
            arr:['老大','老二','老三']
        }
    },
    methods:{

    }
}
</script>

<style>

</style>