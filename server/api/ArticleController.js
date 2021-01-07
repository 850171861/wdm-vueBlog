import article from '../model/Article.js'

class ArticleController {
  async getArticleList (ctx) {
    // const data = await article({ title: '123', label: ['vue', 'react'], category: '5ff5851fcd1d45ec94819c12' })
    // const result = await data.save()
    const depts = ['vue']
    const department = []
    article.aggregate([
      { $group: { _id: '$dept', count: { $sum: 1 } } }
    ]).exec((err, doc) => {
      department.push(doc)
    })

    ctx.body = {
      code: 200,
      data: department
    }
  }
}

export default new ArticleController()
