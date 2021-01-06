import combineRoutes from 'koa-combine-routers'

// 引入路由
import articleRouter from './modules/articleRouter'


// 使用combineRoutes组合多个路由的实例
export default combineRoutes(
    articleRouter
)
