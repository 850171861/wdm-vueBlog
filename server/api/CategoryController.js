import category from '../model/Category.js'

class CategoryController {
  async getCategoryList(ctx) {
    const data = await category({ name: 'react' })
    const result = await data.save()
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

export default new CategoryController()
