<template>
   <button class="btn-demo">click me</button>
</template>

<script>
export default {
    // => 这里的name决定的是vue调试工具中显示的名字
    // 建议：组件名，还有这里的名字，还有导入的时候，组件对象
    // 都写相同的名字
    name:'DemoTest'
}
</script>

<style>
.btn-demo{
    width: 100px;
    height: 40px;
    background-color: aqua;
    color:white;
    border-radius: 8px;
    border:1px solid transparent;
}
</style>