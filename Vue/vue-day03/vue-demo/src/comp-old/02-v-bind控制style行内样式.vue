<template>
  <div>
    <div :style="{background:'skyblue', width:'300px',height:'300px'}"></div>
    <div :style="obj"></div>
    <!-- 传输组 -->
    <div :style="[obj,obj2]"></div>
  </div>
</template>
      <!-- 
          v-bind绑定style => 控制行内样式
          语法： 
          :style="样式对象"  {backgroud:'red', width:'200px'}
          :style="[样式对象,样式对象]"
       -->
<script>
export default {
    data(){
        return {
            obj:{
                width:'200px',
                height:'200px',
                background:'red',
                borderRadius:'50%'
                // 'border-radius':'50%'
            },
            obj2:{
                width:'500px'
            }
        }
    }
}
</script>

<style>

</style>