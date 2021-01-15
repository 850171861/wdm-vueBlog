import {
  getcomment
} from '@/api/comment'

const state = () => ({
  commentList: []
})

const mutations = {
  setCommentList(state, value) {

    const data = state.commentList.concat(value.commentList)

    console.log(data)
    state.commentList = data
  }
}

const actions = {
  async setCommentList({
    commit,
    state
  }, id) {
    const { data } = await getcomment(id)

    commit('setCommentList', { commentList: data })
  }
}

export default {
  state,
  mutations,
  actions
}
