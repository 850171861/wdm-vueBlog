import label from '../model/Label.js'

class LabelController {
  async getLabelList(ctx) {
    const data = await label.findOne({ name: '123' }).populate({
      path: '_id', select: 'content'
    })


    ctx.body = {
      code: 200,
      data: data
    }
  }
}

export default new LabelController()
