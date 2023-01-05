// 1. 导入
const Router = require('@koa/router')
const Mock = require('mockjs')

const db = require('../db')
// 2. 实例化
const router = new Router({
    // 实例化router的时候，可以写路由前缀
    prefix:'/api/v1'
})

// post请求 router.post
router.post('/login', async (ctx, next) => {
    // 解析post请求的参数 application/json
    console.log(ctx.request.body)
    ctx.body = '登录页'
})

// get请求 router.get
router.get('/user', async ctx => {
    // 假设user这个接口不用了 我们可以在这里做一个重定向
    // 坑点，如果设置了prefix，重定向的时候也要加
    ctx.redirect('/api/v1/news')
    ctx.body = '用户信息9999'
})

router.get('/news/:id/:page', async ctx => {
    // 1. ctx.query获取 以？和 &的参数
    // console.log(ctx.query.id)
    // console.log(ctx.query.page)

    // 2. 动态路由的参数 ctx.params获取 写在路由上
    console.log(ctx.params)
    ctx.body = '新闻列表'
})

router.get('/list', async ctx => {

    const news = db.news() 
    // 构造一个返回给前端的数据结构
    const res = {
        code: 10000,
        data: news
    }
    ctx.body = res9 
})

router.get('/mock', async ctx => {

    const data = Mock.mock({


        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'arrList|100': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': "@email",
            "user" :"@cname",
            "city" :"@city",
            "title":"@cparagraph",
            "ip" : "@ip",
            "img":"@image",
            "color":"@color",
            "test" : {
                "food":"@time"
            }
        }],
        "demo":6666
    })

    // 构造一个返回给前端的数据结构
    const res = {
        // code: 10005, // 返回
        // data: data

    }
    ctx.body = res
})

// 使用模块化导出router
module.exports = router
