import {
  getcomment
} from '@/api/comment'

const state = () => ({
  more: '查看更多评论',
  commentList: []
})

const mutations = {
  setCommentList(state, value) {
    if (value.commentList.length === 0) {
      state.more = '没有更多了'
    }
    // const data = state.commentList.concat(value.commentList)

    state.commentList = value.commentList
  }
}

const actions = {
  async setCommentList({
    commit,
    state
  }, id) {
    console.log(id)
    const {
      data
    } = await getcomment(id)
    commit('setCommentList', {
      commentList: data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
