<template>
  <div class="comment">
    <div class="comment_tips">
      <p style="font-size: 16px;color: #000;font-weight: bold;">提示：</p>
      <p>评论会在审核通过后显示在下方</p>
      <p>昵称必填，用于展示在评论中</p>
      <p>邮箱必填，不会公开展示，方便及时收到回复</p>
      <p>网址选填，方便看到的人去访问,请完整填写,例如(http://www.wudongming.com)</p>
    </div>
    <a-form :form="form"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            @submit="handleSubmit">
      <a-form-item label="内容(必填)">
        <br>
        <a-textarea placeholder="说点什么呗，支持markdown语法哦..."
                    v-decorator="['note', { rules: [{ required: true, message: '说点什么呗，支持markdown语法哦...' }] }]" />
      </a-form-item>
      <a-form-item label="昵称">
        <a-input placeholder="昵称必填，用于展示在评论中"
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
        ]" />
      </a-form-item>
      <a-form-item label="E-mail">
        <a-input placeholder="邮箱必填，不会公开展示，方便及时收到回复"
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
        ]" />
      </a-form-item>
      <a-form-item label="网址">
        <a-input placeholder="网址选填" />
      </a-form-item>

      <a-button type="
                 primary"
                html-type="submit">
        Submit
      </a-button>
    </a-form>

    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design
      resources (Sketch and Axure).
    </p>
    <a-comment>
      <span slot="actions">回复</span>
      <a slot="author">Han Solo</a>
      <a-avatar slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo" />
      <p slot="content">
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
      <a-comment>
        <span slot="actions">回复</span>
        <a slot="author">Han Solo</a>
        <a-avatar slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo" />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </a-comment>
      <a-comment>
        <span slot="actions">回复</span>
        <a slot="author">Han Solo</a>
        <a-avatar slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo" />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </a-comment>
    </a-comment>
    </a-comment>

    <a-comment>
      <span slot="actions"
            key="comment-nested-reply-to">回复</span>
      <a slot="author">Han Solo</a>
      <a-avatar slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo" />
      <p slot="content">
        We supply a series of design principles, practical patterns and high quality design resources
        (Sketch and Axure).
      </p>
    </a-comment>
  </div>
</template>


<script>
export default {
  name: 'comment',

  data () {
    return {
      formLayout: 'horizontal',
      formItemLayout: 'formItemLayout',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange (value) {
      // console.log(value);
      this.form.setFieldsValue({
        // note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // email: `Hi, ${value === 'male' ? 'man' : 'lady'}!`

      });
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

    p {
      margin-bottom: 0;
    }
  }
}
</style>