import article from '../model/Article.js'
class ArticleController {
  // 文章列表
  async getArticleList(ctx) {
    const {
      tag,
      category,
      search,
      page,
      limit
    } = ctx.query
    const query = {}
    if (tag) {
      query.tag = tag
    }
    if (category) {
      query.category = category
    }
    if (search) {
      const regexp = new RegExp(search, 'i')
      query.$or = [{
        title: {
          $regex: regexp
        }
      }, {
        content: {
          $regex: regexp
        }
      }]
    }

    const data = await article.find(query).skip((page - 1) * parseInt(limit)).limit(parseInt(limit)).sort({
      created: -1
    })
    const total = await article.find(query).count()


    ctx.body = {
      code: 200,
      data: data,
      total: total
    }
  }

  // 文章内容
  async getArticleInfo(ctx) {
    const {
      id
    } = ctx.query
    const result = await article.findOne({
      _id: id
    })
    // 更新文章阅读记数
    const updateReads = await article.updateOne({
      _id: id
    }, {
      $inc: {
        reads: 1
      }
    })

    // 将字符串切割相隔3个
    function splitChunks(string) {
      var regex = RegExp(".{1," + Math.ceil(string.length / (string.length / 3)) + "}", 'g');
      return string.match(regex);
    }
    // 相关文章查询
    let query = {}
    let title = result.title
    let str = splitChunks(title)
    let strArr = []
    for (let i = 0; i < str.length; i++) {
      let title = {
        title: {
          $regex: new RegExp(str[i], 'i')
        }
      }
      strArr.push(title)
    }
    query.$or = strArr
    const relatedResult = await article.find(query).limit(6)
    const related = relatedResult.filter(item => item.id != id)

    ctx.body = {
      code: 200,
      data: result,
      related: related
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

  // 获取文章归档数据
  async getArchive(ctx) {
    // 获取总条数
    const total = await article.find().count()
    // 获取归档数据
    const data = await article.aggregate([{
        $project: {
          title: '$title',
          reads: '$reads',
          createdTime: {
            $substr: [{
              $add: ['$created', 28800000]
            }, 0, 10]
          },
          created: {
            $substr: [{
              $add: ['$created', 28800000]
            }, 0, 4]
          }
        }
      },
      {
        $group: {
          _id: '$created',
          yearList: {
            $push: {
              id: '$_id',
              title: '$title',
              reads: '$reads',
              created: '$createdTime'
            }
          },
          count: {
            $sum: 1
          }
        }
      },
      {
        $sort: {
          _id: -1 // 执行完 $group，得到的结果集按照_id排列
        }
      }
    ])

    ctx.body = {
      code: 200,
      data: data,
      total
    }
  }
}

export default new ArticleController()

// for (let i = 0; i < 12; i++) {
//   const items = ['vue', 'node', 'js']
//   const item = items[Math.floor(Math.random() * items.length)]
//   const data = await article({
//     title: '测试' + i,
//     content: '内容内容内容+i',
//     description: '描述' + i,
//     tag: [item, 'react'],
//     category: item
//   })
//   const result = await data.save()
// }
// ctx.body = {
//   code: 200,
//   data: 1
// }
