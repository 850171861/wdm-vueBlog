import axios from '@/utils/request.js'

// 获标签列表
const taglist = () => axios.get('/taglist')

export {
  taglist
}
