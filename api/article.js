import axios from '@/utils/request.js'

// 获取文章数据列表数据
const getArticleList = (data) => axios.get('/articlelist')

// 获热门文章前10篇
const hotArticle = () => axios.get('/hotArticle')

export {
  getArticleList,
  hotArticle
}
