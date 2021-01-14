import Router from '@koa/router'
import ArticleController from '../../api/ArticleController'

const router = new Router()

router.prefix('/api')

router.get('/articlelist', ArticleController.getArticleList)
router.get('/hotArticle', ArticleController.hotArticle)

export default router
