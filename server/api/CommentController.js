import comment from '../model/comment'
import article from '../model/Article'
// import uuid from 'node-uuid';
class CommentsController {
  // 获取评论
  async getComment(ctx) {
    const {
      id,
      page,
      limit
    } = ctx.query

    const result = await comment.find({
      tid: id
    }).skip((page - 1) * parseInt(limit)).limit(parseInt(limit)).sort({
      created: -1
    })



    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 增加评论
  async addComment(ctx) {
    const {
      id,
      pic,
      tid,
      name,
      email,
      url,
      textareaValue
    } = ctx.request.body
    // 有id代表发送过来的是二级评论，直接插入children数组
    if (id) {
      const childrenResult = await comment.updateOne({
        _id: id
      }, {
        $push: {
          children: {
            $each: [{
              pic: pic,
              name: name,
              email: email,
              url: url,
              content: textareaValue,
              time: new Date()
            }],
            $position: 0
          }
        }
      })

      if (childrenResult.ok === 1) {
        const articleAnswer = await article.updateOne({
          _id: tid
        }, {
          $inc: {
            answer: 1
          }
        })
      }

    } else {
      const data = await comment({
        tid: tid,
        pic: pic,
        name: name,
        content: textareaValue
      })
      const result = await data.save()
      if (result) {
        const articleAnswer = await article.updateOne({
          _id: tid
        }, {
          $inc: {
            answer: 1
          }
        })
      }
    }

    ctx.body = {
      code: 200,
      message: '评论成功'
    }
  }
}

export default new CommentsController()

// for (let i = 0; i < 11; i++) {
//   const data = await comment({
//     children: [
//       {
//         id: 1,
//         pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         time: '2020-5-5',
//         content: '我是二级评论444444444444 //@中联设计：去央视好多年了。三星智力快车栏目吧，好像是。',
//         name: '我是一级评论'
//       },
//       {
//         id: 2
//       }
//     ],
//     tid: '5fffb4957484362910b39ef7',
//     pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     content: '我是一级评论',
//     name: '我是一级评论222222',
//     __v: 0
//   })
//   const result = await data.save()
// }

// const a = await comment.update({ _id: "5ffffb47837bb013b803f05a" }, {
//   '$pull': {
//     "children": { id: 2 }
//   }
// })

// 添加
// const a = await comment.update({ _id: '5ffffb47837bb013b803f05a' }, {
//   $push: { children: { id: 2 } }
// })
