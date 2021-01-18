import { hotArticle, getArticleList } from '../api/article'

const state = () => ({
    hotArticle: [], // 热门文章
    articleList: [] // 文章列表
})

const mutations = {
    setHotArticle(state, value) {
        state.hotArticle = value.hotArticle
    },

    setArticleList(state, value) {
        state.articleList = value.articleList
    }
}

const actions = {
    async setArticleList({ commit, state }, id) {
        const { data } = await getArticleList(id)
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
