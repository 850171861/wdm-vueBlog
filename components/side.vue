<template>
  <aside class="sidebar">
    <!-- 关于个人 -->
    <section class="m-top">
      <a-card title="关于" :bordered="false" :hoverable="true">
        <i class="icon"><img src="../static/img/my.png" alt="标签" /></i>

        <div class="author">
          <div class="pic">
            <img
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="头像"
            />
          </div>
          <div class="name">姓名</div>
          <div class="content">描述</div>
          <div class="concat">
            <ul>
              <li><img src="../static/img/QQ.png" alt="qq" /></li>
              <li><img src="../static/img/wx.png" alt="微信" /></li>
              <li><img src="../static/img/github.png" alt="github" /></li>
              <li><img src="../static/img/email.png" alt="邮箱" /></li>
            </ul>
          </div>
        </div>
      </a-card>
    </section>
    <!--热门文章-->
    <section class="m-top">
      <a-card title="热门文章" :bordered="false" :hoverable="true">
        <i class="icon"><img src="../static/img/remen.png" alt="热门文章" /></i>
        <div class="hot">
          <p>
            <span>1</span>
            <a href=""
              >Card contentCard contentCard contentCard contentCard contentCard
              contentCard contentCard content</a
            >
          </p>
          <p><span>1</span> <a href="">Card content</a></p>
          <p><span>1</span> <a href="">Card content</a></p>
        </div>
      </a-card>
    </section>
    <!--分类-->
    <section class="m-top">
      <a-card title="分类" :bordered="false" :hoverable="true">
        <i class="icon"><img src="../static/img/type.png" alt="分类" /></i>
        <div class="type">
          <ul>
            <li>
              <span>2111</span>
              <span>12222</span>
            </li>
            <li>
              <span>1</span>
              <span>2</span>
            </li>
          </ul>
        </div>
      </a-card>
    </section>
    <!--标签-->
    <section class="m-top">
      <a-card title="标签" :bordered="false" :hoverable="true">
        <i class="icon"><img src="../static/img/label.png" alt="标签" /></i>
        <div class="box">
          <a-card-grid> Content </a-card-grid>
          <a-card-grid> Content </a-card-grid>
          <a-card-grid> Content </a-card-grid>
          <a-card-grid> Cont </a-card-grid>
          <a-card-grid> Content </a-card-grid>
          <a-card-grid> Content Content </a-card-grid>
          <a-card-grid> Content </a-card-grid>
          <a-card-grid> Content Content Content </a-card-grid>
          <a-card-grid> Content Content Content </a-card-grid>
        </div>
      </a-card>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      categoryList: [{ categoryname: 1, total: 1 }],
      hotArticleList: [{ artTitle: 122112 }],
      tagList: [{ tagname: 1, total: 1 }],
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
.sidebar {
  .m-top {
    margin-top: 15px;
    width: 320px;
    position: relative;
    .author {
      text-align: center;
      .pic {
        img {
          width: 100px;
          height: 100px;
          border-radius: 20px;
          margin: auto;
        }
      }
      .name {
        font-size: 22px;
      }
      .concat {
        margin-top: 36px;
        ul {
          padding: 0;
          list-style: none;
          display: flex;
          li {
            width: 25%;
          }
        }
      }
      .content {
        font-size: 16px;
      }
    }
    .ant-card {
      .ant-card-head-title {
        margin-left: 12px;
        font-weight: 500;
        color: #6c6c6c;
      }
      .ant-card-body {
        padding: 12px;
      }
      // 热门文章
      .hot {
        p {
          height: 32px;
          transition: all 0.5s;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 4px;
          span {
            display: inline-block;
            font-size: 18px;
            width: 26px;
            height: 26px;
            line-height: 26px;
            background: #6c6c6c;
            text-align: center;
            color: #fff;
            margin-right: 10px;
          }
          a {
            width: 100%;
            color: #666;
            font-size: 18px;
          }
        }
        p:hover {
          a {
            color: #000;
            font-weight: 500;
          }
          padding-left: 8px;
        }
      }
      // 分类
      .type {
        ul {
          padding: 0;
          list-style: none;
          li {
            width: 100%;
            height: 32px;
            color: #666;
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            padding: 0 5px;
          }
          li:hover {
            background: #d2d2d2;
          }
        }
      }
      .icon {
        position: absolute;
        left: 8px;
        top: 15px;
      }
    }
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    .ant-card-grid {
      margin: 8px 0 0 8px;
      padding: 5px 6px;
      font-size: 13px;
      border-radius: 4px;
      width: auto;
    }
  }
}
</style>
