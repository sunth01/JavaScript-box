<template>
  <div class="h5-wrapper">
    <div class="content">
      <!-- 二级路由出口 -->
      <!-- keep-alive 三个属性  -->
      <!-- 
        1. include 包含，列出来的组件才缓存

        2. exclude 除了，列出来的组件不缓存，其他缓存

        3. max 最大缓存多少个， 假设设置了缓存5个，如果有新的第6个组件来了
        缓存，但是一共只会保留五个组件，会删掉一个，会删掉最近最少使用的那个组件。
        LRU算法~~~
       -->


      <keep-alive :include="['ArticlePage','LikePage']">
        <!-- 被keep alive包裹的组件，会缓存起来，当我们切换组件的时候，不会销毁 -->
        <router-view></router-view>
      </keep-alive>
    </div>
    <nav class="tabbar">
      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>
    </nav>

    <!-- 
      1. include 
      2. exclude 
      3. max 

      直接逗号分隔组件名 
      组件里面的name属性的值，如果没有设置, 找局部注册的时候的组件名
      1. include="a,b"
      2. 正则  :include="/a|b/"
      3. 数组  :include="[a, b]"

     -->
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data(){
    return {
      articles:[]
    }
  },
  async created(){
    // 可以操作data了，但是还没有挂载，不能操作dom元素
    const api = 'https://mock.boxuegu.com/mock/3083/articles'
    // 每一个组件都是Vue的实例，this可以访问Vue原型上的数据
    const {data} = await this.$axios.get(api)
    this.articles = data.result.rows
    console.log(this.articles)
  },
  mounted(){

  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>