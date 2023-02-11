<template>
    <div class="box">
        <p class="p1">1</p>
        <p class="p2">2</p>
    </div>

</template>

<script>
// Vue里面不建议再写获取dom元素的这些api
const div = document.querySelector('.box')
console.dir(div)  // 里面有很多用不到的元素

// dom元素本身是一个对象，堆里面存的地址，肯定是不同的

// 如果用真实dom元素，来比较两个dom元素是否相同（这里对比的不是地址哈）
// 真实dom的属性特别多，这个时候就想到了用JavaScript对象来描述真实dom

// ==> vitural dom  

{/* <div id="bix">
        <p class="my_p"></p>
</div> */}
//  ==> 虚拟dom本质上，就是一个JavaScript对象，用来描述真实dom的。
const dom = {
    type:'div',
    attributes:[{id:'box'}],
    children:[{
        type:'p',
        attributes:[{class:'my_p'}],
        text:'123'
    }]
}

export default {
    
}
</script>

<style>

</style>