<template>
  <div class="comment">
    <div class="comment_tips">
      <p style="font-size: 16px; color: #000; font-weight: bold">提示：</p>
      <p>评论会在审核通过后显示在下方</p>
      <p>昵称必填，用于展示在评论中</p>
      <p>邮箱必填，不会公开展示，方便及时收到回复</p>
      <p>
        网址选填，方便看到的人去访问,请完整填写,例如(http://www.wudongming.com)
      </p>
    </div>
    <a-form
      :form="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="内容(必填)">
        <a-textarea
          placeholder="说点什么呗"
          style="height: 100px"
          v-decorator="[
            'note',
            { rules: [{ required: true, message: '说点什么呗' }] },
          ]"
        />
      </a-form-item>
      <a-form-item label="昵称">
        <a-input
          placeholder="昵称必填，用于展示在评论中"
          v-decorator="[
            'name',
            {
              rules: [
                {
                  required: true,
                  message: '昵称必填，用于展示在评论中',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="E-mail">
        <a-input
          placeholder="邮箱必填，不会公开展示，方便及时收到回复"
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: '输入的电子邮件无效!',
                },
                {
                  required: true,
                  message: '邮箱必填，不会公开展示，方便及时收到回复',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="网址">
        <a-input
          placeholder="网址选填"
          v-decorator="[
            'url',
            {
              rules: [
                {
                  required: false,
                  message: '',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <a-button
        type="
                 primary"
        html-type="submit"
        style="display: block; margin: 0 auto"
      >
        提交
      </a-button>
    </a-form>

    <div class="comment-list" v-if="commentsData.length !== 0">
      <a-comment v-for="(item, index) in commentsData" :key="index">
        <span slot="actions" key="comment-nested-reply-to" @click="reply(item)"
          >回复</span
        >
        <a slot="author">{{ item.name }}</a>
        <a-avatar slot="avatar" :src="item.pic" alt="Han Solo" />
        <p slot="datetime">{{ item.time }}</p>
        <p slot="content">
          {{ item.content }}
        </p>
        <a-comment v-for="(list, index) in item.children" :key="index">
          <span slot="actions" @click="reply(list)">回复</span>
          <a slot="author">{{ list.name }}</a>
          <a-avatar slot="avatar" :src="list.pic" alt="Han Solo" />
          <p slot="content">
            {{ list.content }}
          </p>
        </a-comment>
      </a-comment>
    </div>
    <div class="comment-null" v-else>
      <a-empty description="暂无评论，快来抢个沙发吧" />
    </div>
  </div>
</template>


<script>
import { scrollToElem } from '../utils/common'
export default {
  name: 'comment',

  data() {
    return {
      content: '',
      commentsData: [
        {
          id: 2,
          pic:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          time: '2020-5-5',
          content: '我是一级评论',
          name: '我是一级评论111111',
        },
        {
          id: 1,
          pic:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          time: '2020-5-5',
          content: '我是一级评论',
          name: '我是一级评论222222',
          children: [
            {
              id: 1,
              pic:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              time: '2020-5-5',
              content: '我是二级评论444444444444',
              name: '我是一级评论',
            },
            {
              id: 1,
              pic:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              time: '2020-5-5',
              content: '我是二级评论5555555555555',
              name: '我是一级评论',
            },
          ],
        },
      ],
      formLayout: 'horizontal',
      formItemLayout: 'formItemLayout',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    reply(index) {
      // 插入@ + name 到 content
      // 滚动页面到输入框
      // focus 输入框
      this.handleSelectChange(index)
      // 动态滚动到输入框的位置，并且进行focus
      scrollToElem('.comment_tips', 500, -65)
      document.getElementById('coordinated_note').focus()
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange(value) {
      this.form.setFieldsValue({
        note: `@${value.name}   `,
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
  .comment-null {
    background: #f6f8fa;
    margin-top: 20px;
    padding: 10px 0;
  }
  .ant-input:placeholder-shown {
    background: #f6f8fa;
  }
}
</style>