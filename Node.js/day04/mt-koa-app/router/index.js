const Router = require('@koa/router')
const router = new Router()

// 配置路由
router.get('/news', async (ctx, next) => {
    // 所有访问/news这个路由，都会在这里处理
    console.log('GET --- news')
    ctx.body = 'hello news Router'
    
})

router.get('/list', async (ctx, next) => {
    // 所有访问/news这个路由，都会在这里处理
    console.log('GET --- list')
    ctx.body = 'list'
})

// 使用模块化的方式导出router对象
module.exports = router