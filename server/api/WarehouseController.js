import warehouse from '../model/warehouse'

class WarehouseController {
  // 获取仓库的数据列表
  async getWarehouse(ctx) {


    const result = await warehouse.find().sort({
      created: -1
    })

    ctx.body = {
      code: 200,
      data: result
    }
  }
}

export default new WarehouseController
