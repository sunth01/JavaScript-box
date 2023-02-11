<template>
  <div>
      <!-- 
        v-text="变量" 把变量当作普通文本插入到标签中 
        => 不常用，一般用的是插值语法{{  }}
       -->
       <div v-text="str1"></div>
       <!-- 
            v-html 解析为html标签
            用法：有时候后端返回给我们一些带标签的字符，前端可以用v-html解析

            注意：不要把用户输入的内容，放到v-html里面, 可能会造成XSS攻击（跨站脚本攻击）
            v-html底层  ==> innerHTML 

            永远不要相信用户输入的内容！！！

        -->
        <input type="text" v-model="msg">
       <div v-html="msg"></div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            str1: '< a href="#">百度</ a>',
            str2: '< a href="#">百度</ a>',
            msg:''
        }
    }
}
</script>

<style>

</style>