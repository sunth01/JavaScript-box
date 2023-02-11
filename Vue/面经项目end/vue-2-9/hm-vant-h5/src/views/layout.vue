<template>
  <div class="layout-page">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/article" icon="comment-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="good-job-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
