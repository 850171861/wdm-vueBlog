import {
  getcomment
} from '@/api/comment'

const state = () => ({
  commentList: []
})

const mutations = {
  setCommentList(state, value) {
    state.commentList = value.commentList
  }
}

const actions = {
  async setCommentList({
    commit,
    state
  }, id)

  {
    let arr = []
    const
      data = await getcomment(id)
    let result = arr.concat(data)
    console.log(result)
    commit('setCommentList', {
      commentList: result
    })
  }
}

export default {
  state,
  mutations,
  actions
}
