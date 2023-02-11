<template>
  <div>
    <ul>
        <li v-for="item in arrList" :key="item">{{item}}</li>
    </ul>
    <hr>
    <ul>
        <li v-for="(item,index) in arrList" :key="item">{{index}} - {{item}}</li>
    </ul>
    <!-- 注意：item in items  里面的in 可以换成of 
        ==> 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
        ==> key的值是字符串或者数值
    -->
           <hr>
       <ul>
           <!-- 建议，把 () 加上 -->
           <li v-for="el, i in arrList" :key="el">{{ i }} - {{ el }} </li>
       </ul>

       遍历对象
       <!-- <li v-for="value in object">
            {{value}}
       </li> -->
       <!-- value:值 -->
       <!-- key:键 -->
       <!-- v-for='(value, key) in 对象' -->
       <ul>
        <li v-for="(value, key) in obj" :key="value">{{value}} - {{key}}</li>
       </ul>
       <hr>
       <ul>
        <!-- 遍历数组 number类型  1-10 -->
        <li v-for="el in 10" :key="el">{{el}}</li>
       </ul>
  </div>
  
</template>

<script>
export default {
    data(){
        return {
            arrList:['red','blue','pink','skyblue'],
            obj:{
                name:'刘德华',
                age:24,
                desc:'唱歌'
            }
        }
    }
}
</script>

<style>

</style>