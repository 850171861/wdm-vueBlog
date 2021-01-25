import Router from '@koa/router'
import CategoryController from '../../api/categoryController'
import TagController from '../../api/TagController'

const router = new Router()

router.prefix('/admin')
// 新增分类
router.post('/addCategory', CategoryController.addCategory)
// 修改分类
router.post('/updateCategory', CategoryController.updateCategory)
// 分类删除
router.post('/deleteCategory', CategoryController.deleteCategory)

// 新增标签
router.post('/addTag', TagController.addTag)
// 修改标签
router.post('/updateTag', TagController.updateTag)
// 删除标签
router.post('/deleteTag', TagController.deleteTag)

export default router
