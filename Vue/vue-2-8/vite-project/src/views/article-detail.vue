<template>
  <div class="article-detail-page">
    <nav class="nav"> <span class="back" @click="$router.go(-1)">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{article.stem}}</h1>
      <p>{{article.createdAt}} | {{article.views}} 浏览量 | {{article.likeCount}} 点赞数</p>
      <p>
        <img :src=article.creatorAvatar alt=""> 
        <span>{{article.creatorName}}</span> 
      </p>
    </header>
    <main class="body">  
      {{ article.content }}
    </main>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailPage',
  data(){
    return {
      // Vue1.x  ==> article这个数据，被很多dom元素使用，
      // 这些dom元素，都依赖了这个数据，我们把这些dom元素叫做article的依赖
      // Vue1.x 的颗粒度更细 

      // Vue2.x  ==> 以组件为基础，哪些组件用到了这个数据，就叫做这个数据的依赖
      article:{}
    }
  },
  async created() {
    // 动态路由 => $router.params.id
    // 页面跳转是$router,获取当前页路由参数 是 $router
    const api = `https://mock.boxuegu.com/mock/3083/articles/${this.$router.params.id}`
    const {data } = await this.$axios.get(api)
    this.article = data.result
    console.log(this.article)
  }
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      width: 30px;
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
     padding: 0 15px;
     p {
       color: #999;
       font-size: 12px;
       display: flex;
       align-items: center;
     }
     img {
       width: 40px;
       height: 40px;
       border-radius: 50%;
       overflow: hidden;
     }
  }
  .body {
     padding: 0 15px;
  }
}
</style>