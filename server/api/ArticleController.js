import article from '../model/Article.js'
import label from '../model/Label'
class ArticleController {
  async getArticleList (ctx) {
    // const data = await article({ title: '123', label: ['vue', 'react'], category: '5ff5851fcd1d45ec94819c12' })
    // const result = await data.save()
    const arr = await label.find()
    const data = []
    for (const i in arr) {
      const result = await article.find().count({ label: { $elemMatch: { $eq: arr[i].name } } })
      const obj = {}
      obj[arr[i].name] = result
      data.push(obj)
    }

    const a = await article.find()
    console.log(a)
    ctx.body = {
      code: 200,
      data: data
    }
  }
}

export default new ArticleController()
