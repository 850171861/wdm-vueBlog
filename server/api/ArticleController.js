import article from '../model/Article.js'

class ArticleController {
  async getArticleList (ctx) {
    const data = await article.find()
    // const result = await data.find()
    ctx.body = {
      code: 200,
      data: data
    }
  }
}

export default new ArticleController()
