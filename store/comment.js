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
    const data = state.commentList.concat(value.commentList)
    state.commentList = data
  },
  // 改变commentList更新评论视图
  updateCommentList(state, value) {
    if (value.beReplyName === '') {
      state.commentList.unshift(value)
    } else {
      state.commentList.forEach(element => {
        if (element._id === value.id) {
          if (!element.childrenData) {
            element.childrenData = []
            element.childrenData.unshift(value)
          } else {
            element.childrenData.unshift(value)
          }
        }
      })
    }
  }
}

const actions = {
  async setCommentList({
    commit,
    state
  }, query) {
    const {
      data
    } = await getcomment(query)

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
