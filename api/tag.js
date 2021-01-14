import axios from '@/utils/request.js'

// 获标签列表
const tagList = () => axios.get('/taglist')

export {
  tagList
}
