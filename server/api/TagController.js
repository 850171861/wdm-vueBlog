import tag from '../model/Tag'
import article from '../model/Article'
class TagController {
  // 获标签列表
  async getTagList (ctx) {
    const arr = await tag.find()
    const data = []
    for (const i in arr) {
      const result = await article.find().count({ tag: { $elemMatch: { $eq: arr[i].name } } })
      const obj = {}
      obj.name = arr[i].name,
      obj.number = result
      data.push(obj)
    }
    ctx.body = {
      code: 0,
      data: data
    }
  }
}

export default new TagController()
