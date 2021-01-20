<template>
  <div class="comment">
    <div class="comment_tips">
      <p style="font-size: 16px; color: #000; font-weight: bold">提示：</p>
      <p>昵称必填，用于展示在评论中</p>
      <p>邮箱必填，不会公开展示，方便及时收到回复</p>
      <p>
        网址选填，方便看到的人去访问,请完整填写,例如(http://www.wudongming.com)
      </p>
    </div>

    <!-- 评论表单 -->
    <div class="wrap">
      <div class="wrap-input">
        <input type="text"
               placeholder="昵称">
        <input type="text"
               placeholder="邮箱">
        <input type="text"
               placeholder="网站(http://)">
      </div>

      <a-textarea placeholder="说点什么吧~~"
                  :auto-size="{ minRows: 5, maxRows: 6 }" />
      <a-button>提交</a-button>
    </div>
    <div class="comment-list"
         v-if="commentList.length !== 0">
      <a-comment v-for="(item, index) in commentList"
                 :key="index">
        <span slot="actions"
              key="comment-nested-reply-to"
              @click="reply(item)">回复</span>
        <a slot="author">{{ item.name }}</a>
        <a-avatar slot="avatar"
                  :src="item.pic"
                  alt="Han Solo" />
        <p slot="datetime">{{ item.time | moment }}</p>
        <p slot="content">
          {{ item.content }}
        </p>
        <a-comment v-for="(list, index) in item.children"
                   :key="index">
          <span slot="actions"
                @click="reply(list)">回复</span>
          <a slot="author">{{ list.name }}</a>
          <a-avatar slot="avatar"
                    :src="list.pic"
                    alt="Han Solo" />
          <p slot="content">
            {{ list.content }}
          </p>
        </a-comment>
      </a-comment>
      <div class="loading-more">
        <a-spin v-if="loadingMore" />
        <a-button v-else
                  @click="onLoadMore">
          {{ this.$store.state.comment.more }}
        </a-button>
      </div>
    </div>
    <div class="comment-null"
         v-else>
      <a-empty description="暂无评论，快来抢个沙发吧" />
    </div>
  </div>
</template>


<script>
import { scrollToElem } from '../utils/common'
import filters from '@/directive/relativeTime'

export default {
  name: 'comment',
  computed: {
    commentList () {
      return this.$store.state.comment.commentList
    },
  },
  filters: filters,
  // watch: {
  //   commentList: {
  //     handler(newvalue, oldvalue) {
  //       console.log(newvalue)
  //       console.log(oldvalue)
  //     },
  //   },
  // },
  data () {
    return {
      textarea: 'min',
      page: 1,
      limit: 10,
      content: '',
      loading: true,
      loadingMore: false,
      formLayout: 'horizontal',
      formItemLayout: 'formItemLayout',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  mounted () {
    this.$store.dispatch('comment/setCommentList', {
      id: '6003da01f20ae72cbcf04bdf',
      page: this.page,
      limit: this.limit,
    })
  },
  methods: {
    onLoadMore () {
      this.loadingMore = true
      console.log(this.page)
      setTimeout(() => {
        this.$store.dispatch('comment/setCommentList', {
          id: '6002ed983233404d4c092040',
          page: this.page,
          limit: this.limit,
        })
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      }, 500)
      this.page += 1
    },
    reply (index) {
      // 插入@ + name 到 content
      // 滚动页面到输入框
      // focus 输入框
      this.handleSelectChange(index)
      // 动态滚动到输入框的位置，并且进行focus
      scrollToElem('.comment_tips', 500, -65)
      document.getElementById('coordinated_note').focus()
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      this.form.setFieldsValue({
        note: `//@${value.name}   `,
      })
    },
  },
}
</script>


<style lang="scss" scoped>
.comment {
  .comment_tips {
    font-size: 12px;
    line-height: 24px;
    padding-top: 15px;
    color: #999;
    margin-bottom: 20px;
    p {
      margin-bottom: 0;
    }
  }

  .loading-more {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    .ant-btn {
      height: 24.5px;
    }
  }
  .wrap {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    padding: 10px;
    .wrap-input {
      display: flex;
      flex-wrap: wrap;
      input {
        width: 33.33%;
        background: transparent;
        border: none;
        resize: none;
        outline: none;
        padding: 10px 5px;
        font-size: 14px;
        border-bottom: 1px dashed #dedede;
      }
      input:focus {
        border-bottom: 1px dashed #f5bc29;
      }
      @media screen and (max-width: 420px) {
        input {
          width: 100%;
        }
      }
    }
    .ant-input {
      background: transparent;
    }
    textarea {
      width: 100%;
      font-size: 14px;
      background: transparent;
      padding: 10px 5px;
      border: none;
    }
    textarea:focus {
      box-shadow: none;
    }
    .ant-btn {
      float: right;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }
}
</style>