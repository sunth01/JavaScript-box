<template>
  <div>
    <!-- v-bind控制class
        :class='对象/数组'

        1. 传对象 :class='obj'
        => 动态绑定类名,可以和class一起存在于标签上
        => 对象里面键是我们定义的类名,值是布尔值,true/false.如果是true.就会把这个类名添加到标签上
        {键:值}
     -->
    <!-- {pink:true, orange:false} => 这个盒子，添加pink类，不添加orange类
    对象的键，可以加引号或者不加 -->
    <h3>v-bind控制类名</h3>
    <!-- <div class="box" pink blue></div> -->
    <!-- <div class="box" :class="obj"></div> -->
    <div :class="{'box':true, 'pink':false, 'blue':true}"></div>

    <!-- 2. 传数组  :class="arr" 
    [类名1, 类名2, 类名3] ==> 数组里面有的项，就是我们要添加的类 （适合批量添加许多类名） -->
    <!-- 数组的情况 -->
    <!-- 这种情况，类名需要加引号！ -->
    <div class="box" :class="arr"></div>
    <div class="box" :class="['pink', 'blue', 'circle']"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            obj:{
                pink:true,
                blue:false
            },
            arr:['pink', 'blue', 'circle']
        }
    }
}
</script>


<style lang="less">
.box{
    width: 200px;
    height: 200px;
    background-color: skyblue;
}
.pink{
    background-color:pink;
}
.blue{
    background-color: rgb(93, 0, 255);
}
.circle{
    border-radius: 50%;
}
</style>
