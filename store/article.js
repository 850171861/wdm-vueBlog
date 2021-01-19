import {
  hotArticle,
  getArticleList
} from '../api/article'

const state = () => ({
  hotArticle: [], // 热门文章
  articleList: [] // 文章列表
})

const mutations = {
  setHotArticle (state, value) {
    state.hotArticle = value.hotArticle
  },

  setArticleList (state, value) {
    state.articleList = value.articleList
  }
}

const actions = {
  async setArticleList ({
    commit,
    state
  }, obj) {
    const data1 = { page: '1', limit: '10', search: '刘德华' }
    const { data } = await getArticleList(data1)

    console.log(data)
    commit('setArticleList', {
      articleList: data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
