import { taglist } from '@/api/tag'
export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        const { data } = await taglist()
        commit('tag/setTagList', { tagList: data })
    }
}
