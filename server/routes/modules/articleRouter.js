import Router from '@koa/router'
import ArticleController from '../../api/ArticleController'

const router = new Router()

router.prefix('/api')

router.get('/articlelist', ArticleController.getArticleList)

export default router
