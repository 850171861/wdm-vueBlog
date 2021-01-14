const state = () => ({
  commentList: []
})

const mutations = {
  setCommentList (state, value) {
    state.commentList = value.commentList
  }
}

const actions = {
  setA ({ commit, state }) {
    console.log(state)
  }
}

export default {
  state,
  mutations,
  actions
}
