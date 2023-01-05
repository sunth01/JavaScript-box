const Router = require('@koa/router');
const Mock = require('mockjs')
// 路由前缀 ，在实例化的时候传入
const router = new Router({
    // prefix:'/api/v1'  // 回到insomnia发请求，不行了，加前缀
});
router.get('/news', async ctx => {
    // console.log(ctx.query)
    // console.log(ctx.query)
    console.log(ctx.params)
    ctx.body = 'news-list'
})

// router.url('test',)

router.get('/bar', ctx => {
    ctx.redirect('/api/v1/news')
})
// 处理 mock
const list = require('../mock/list');
router.get('/list', ctx => {

    // 构造返回对象的格式
    const res = {
        code:10000, // 后端自定义的状态码
        data:list
    }
    ctx.body = res
})

router.get('/mock', ctx => {
    const Random = Mock.Random
    const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'img':`@image()`,
            'user':'@cname',
            'title':'@cparagraph()',
            "city":"@city"
        }]
    })
    console.log(ctx.query)
    // 构造返回对象的格式
    const res = {
        code:10000, // 后端自定义的状态码
        data:data
    }
    ctx.body = res
})


// router.get('/news/:id/:age', async ctx => {
//     // console.log(ctx.query)
//     console.log(ctx.query)
//     ctx.body = 'news-list'
// })

router.post('/login',  async (ctx, next) => {
    // JSON.parse('')
    console.log(ctx.request.body)
    ctx.body = '登录成功哟'
    await next()
})

// 使用模块化 导出去  
module.exports = router  