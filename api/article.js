import axios from '@/utils/request.js'
// 获热门文章前10篇
const hotArticle = () => axios.get('/hotArticle')

export {
  hotArticle
}
