import comment from '../model/comment'

class CommentsController {
  // 获取评论
  async getComment(ctx) {
    const {
      id,
      page,
      limit
    } = ctx.query

    const result = await comment.find({ tid: id }).skip((page - 1) * parseInt(limit)).limit(parseInt(limit)).sort({ created: -1 })

    ctx.body = {
      code: 200,
      data: result
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
