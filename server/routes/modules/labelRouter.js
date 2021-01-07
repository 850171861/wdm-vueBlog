import Router from '@koa/router'
import LabelController from '../../api/LabelController'

const router = new Router()

router.prefix('/api')

router.get('/labellist', LabelController.getLabelList)

export default router
