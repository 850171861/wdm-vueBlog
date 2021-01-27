import Router from '@koa/router'
import CategoryController from '../../api/categoryController'
import TagController from '../../api/TagController'
import CommentsController from '../../api/CommentController'
import WarehouserController from '../../api/WarehouseController'
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

// 删除评论
router.post('/deleteComment', CommentsController.deleteComment)

// 添加仓库
router.post('/addWarehouse', WarehouserController.addWarehouse)
// 修改仓库
router.post('/updateWarehouse', WarehouserController.updateWarehouse)
// 删除仓库
router.post('/deleteWarehouse', WarehouserController.deleteWarehouse)

export default router
