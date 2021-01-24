import category from '../model/Category.js'
import moment from 'dayjs'

class CategoryController {
  // 文章分类
  async getCategoryList(ctx) {
    const data = await category.aggregate([{
      $lookup: {
        from: 'articles',
        localField: 'name',
        foreignField: 'category',
        as: 'articleCount',
      }
    }])

    data.forEach(item => {
      item.articleCount = item.articleCount.length
      item.created = moment(item.created).format('YYYY-MM-DD HH:mm:ss')
    })
    ctx.body = {
      code: 200,
      data: data
    }
  }
  // 分类删除
  async deleteCategory(ctx) {

    const {
      id
    } = ctx.request.body
    const result = await category.deleteOne({
      _id: id
    })
    if (result.ok === 1) {
      ctx.body = {
        code: 200,
        msg: '删除成功'
      }
    }
  }
}

export default new CategoryController()
