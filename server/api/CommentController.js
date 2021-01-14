import comment from '../model/comment'

class CommentsController {
  // 获取评论
  async getComment(ctx) {
    const { id } = ctx.query
    console.log(id)
    const page = 1
    const result = await comment.find({ tid: id }).skip((page - 1) * parseInt(1)).limit(parseInt(1))



    ctx.body = {
      code: 200,
      data: result
    }
  }
}

export default new CommentsController()

// const data = await comment({
//   id: 1,
//   pic:
//             'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//   time: '2020-5-5',
//   content: '我是一级评论',
//   name: '我是一级评论222222',
//   children: [
//     {
//       id: 1,
//       pic:
//                     'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//       time: '2020-5-5',
//       content:
//                     '我是二级评论444444444444 //@中联设计：去央视好多年了。三星智力快车栏目吧，好像是。',
//       name: '我是一级评论'
//     },
//     {
//       id: 1,
//       pic:
//                     'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//       time: '2020-5-5',
//       content: '我是二级评论5555555555555',
//       name: '我是一级评论'
//     }
//   ]
// })
// const result = data.save()


   // const a = await comment.update({ _id: "5ffffb47837bb013b803f05a" }, {
    //   '$pull': {
    //     "children": { id: 2 }
    //   }
    // })

    // 添加
    // const a = await comment.update({ _id: '5ffffb47837bb013b803f05a' }, {
    //   $push: { children: { id: 2 } }
    // })