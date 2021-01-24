import Router from '@koa/router'
import CategoryController from '../../api/categoryController'

const router = new Router()

router.prefix('/admin')

router.post('/deleteCategory', CategoryController.deleteCategory)

export default router
