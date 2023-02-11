import Vue from 'vue'
import VueRouter from "vue-router"
// vite里面不能省略.vue
import Layout from '@/views/layout.vue'
import Detail from '@/views/article-detail.vue'

import Article from '@/views/article.vue'
import Collect from '@/views/collect.vue'
import Like from '@/views/like.vue'
import User from '@/views/user.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 注意不要加 ./
    // 重定向
    { path: '/', redirect:'/article' },
    {
      path: '/',
      component: Layout,
      children:[
        { path:'article', component: Article},
        { path:'collect', component:Collect},
        { path:'like', component:Like},
        { path:'User', component:User},
      ]
    },
    // 另一个一级路由
    // 1。配置动态路由
    // 2。给article的每一个item绑定点击事件
    // 3。进入了详情页，左上角还有一个返回按钮
    {path:'/detail/:id',component:Detail},
  ]
})

export default router