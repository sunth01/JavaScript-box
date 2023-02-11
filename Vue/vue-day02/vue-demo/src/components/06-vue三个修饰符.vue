<template>
  <div>
    <!-- V-model.number => 转数字 能转的就转，不能转的呢，保持 -->
    年龄：<input type="text" v-model.number="age">
    <br>
    <!-- V-model.trim 去除首尾的空格  -->
    标题：<input type="text" v-model.trim="title">
    <br>
    <!-- V-model.lazy 当失去焦点或者回车的时候，才把input框的数据，更新到data里 -->
    <!-- 对应我们的change事件 -->
    描述：<input type="text" v-model.lazy="desc">
  </div>
</template>

<script>
export default {
    data(){
        return {
            age:'',
            title:'',
            desc:''

        }
    }
}
</script>

<style>

</style>