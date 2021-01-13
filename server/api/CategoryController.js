import category from '../model/Category.js'
import article from '../model/Article'

class CategoryController {
  async getCategoryList(ctx) {

    const data = await article.aggregate([{
      $group: {
        _id: {
          cid: "$cid"
        },
        count: {
          $sum: 1
        }
      }
    }])


    ctx.body = {
      code: 200,
      data: data
    }
  }
}

export default new CategoryController()
