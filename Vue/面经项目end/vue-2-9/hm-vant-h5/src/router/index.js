import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

// import { get } from 'core-js/core/dict'
import { getToken } from '@/utils/storage'
import { Toast } from 'vant'

const Detail = () => import('@/views/detail')
const Register = () => import('@/views/register')
const Login = () => import('@/views/login')
const Article = () => import('@/views/second/article')
const Collect = () => import('@/views/second/collect')
const Like = () => import('@/views/second/like')
const User = () => import('@/views/second/user')

// import { from } from 'core-js/core/array'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    // detail文章详情页
    { path: '/detail/:id', component: Detail },
    {
      path: '/',
      component: Layout,
      redirect: '/article', // 可以直接在这写重定向,让默认页显示article
      // 二级路由
      children: [
        { path: 'article', component: Article },
        { path: 'collect', component: Collect },
        { path: 'like', component: Like },
        { path: 'user', component: User }
      ]
    }

  ]
})
// 只要一加上守卫，什么逻辑都不写，直接拦截路由，不能访问了
// 导航守卫
// 全局前置守卫：beforeEach
// 1. 在跳转到每一个路由之前，都会经过这个全局前置守卫
// 2. 只有前置守卫放行了，才能访问到对应的组件页面

// /login  ==>  /

// to:Route  往哪儿去，即将进入的那个路由对象
// from:Route 从哪儿来，当前导航正要离开的路由对象
// next:Function  是否放行
//              1. next()  直接调用，不传参，不做处理，放行
//              2. next('/路径') 拦截到一个不同的地址去
//              3. 确保next函数，只调用一次
const whiteList = ['/login', '/register'] // 白名单列表，记录无需权限访问的所有页面
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  // next()
  // 每次跳转路由的时候,才去取
  const token = getToken()
  // 如果有token，直接放行
  if (token) {
    next()
  } else {
    // 判断一个字符串再数组中存在 includes / indexOf
    if (whiteList.includes(to.path)) {
      next()
    } else {
      Toast.fail({
        message: '还没有登录',
        duration: 2000
      })
      next('/login')
    }

    // 导航守卫存在的意义：可以加拦截判断
    // 1. 判断用户有没有token，如果有，直接放行
    // 2. 没有token，白名单的页面（登录，注册），这些可以访问
    // 3. 没有token，要去的还是首页等需要授权的页面，拦截到登录
  }
})

export default router
