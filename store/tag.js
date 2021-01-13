export const state = () => ({
  tagList: []
})
export const mutations = {
  setTagList (state, value) {
    state.tagList = value.tagList
  }
}
// export const actions = {
//   setTagList ({ commit }, value) {
//     commit('setTagList', value)
//   }
// }
