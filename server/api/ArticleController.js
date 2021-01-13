import article from '../model/Article.js'
class ArticleController {
  async getArticleList(ctx) {
    for (let i = 0; i < 10; i++) {
      let items = ['vue', 'node', 'js']
      var item = items[Math.floor(Math.random() * items.length)]
      const data = await article({
        title: '标题',
        content: '内容内容内容',
        tag: [item, 'react'],
        cid: '5ffe5a36c8abac1fd8616e12'
      })
      const result = await data.save()
    }

    ctx.body = {
      code: 200,
      data: 1
    }
  }
}

export default new ArticleController()
