import article from '../model/Article.js'
class ArticleController {
  async getArticleList(ctx) {
    for (let i = 0; i < 10; i++) {
      const items = ['vue', 'node', 'js']
      const item = items[Math.floor(Math.random() * items.length)]
      const data = await article({
        title: '标题',
        content: '内容内容内容',
        tag: [item, 'react'],
        cid: {
          id: '5ffefcb3138a861ea06514df',
          name: 'vue'
        }
      })
      const result = await data.save()
    }
    ctx.body = {
      code: 200,
      data: 1
    }
  }

  // 热门文章
  async hotArticle(ctx) {
    const result = await article.find().sort({
      reads: -1
    }).limit(10)

    ctx.body = {
      code: 200,
      data: result
    }
  }
}

export default new ArticleController()
