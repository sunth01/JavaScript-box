<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button >反选</button>
    <ul>
      <li v-for="item in arr" :key="item.name">
        <input type="checkbox" v-model="item.c"/>
        <span>{{item.name}}</span>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computde:{
    isAll:{
        // getter函数
        grt(){
            console.log('触发了getter')
            // arr.every(cbFn) ==> 数组中每一个元素都满足指定函数cbFn的条件,every返回true,否则false
            return this.arr.every(el => el.c === true)
        },
        // seter函数
        set(val){
            console.log(val)
            // 当我们勾选了全选框的时候,触发了setter
            console.log('触发了setter')
            this.arr.forEach(el => el.c = val)
        }
    }
  }
};
</script>

<style>
</style>