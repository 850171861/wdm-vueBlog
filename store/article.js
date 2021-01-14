import { hotArticle } from "../api/article"

const state = () => ({
    hotArticle: []
})

const mutations = {
    setHotArticle(state, value) {
        state.hotArticle = value.hotArticle
    }
}


export default {
    state,
    mutations
}