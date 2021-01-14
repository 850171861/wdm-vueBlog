import axios from '@/utils/request.js'

// 获取评论列表
const getcomment = (data) => axios.get('/getcomment', data)

export {
  getcomment
}
