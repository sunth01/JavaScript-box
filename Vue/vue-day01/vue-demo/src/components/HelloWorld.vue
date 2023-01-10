<template>
    <div>
        <h2>{{ msg }}</h2>
        <div class="box">测试盒子</div>
    </div>
</template>

<script>
// 核心代码就是 export default 默认导出js对象
export default {
    data() {
        return {
                msg:'Hello World'
            }
    },
    methods:{

    }
}

</script>