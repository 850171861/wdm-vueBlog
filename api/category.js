import axios from '@/utils/request.js'

// 获分类列表
const categoryList = () => axios.get('/categorylist')

export {
    categoryList
}
