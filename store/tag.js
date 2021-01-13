export const state = () => ({
  tagList: []
})
export const mutations = {
  setTagList(state, value) {
    state.tagList = value.tagList
  }
}
