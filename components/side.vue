<template>
  <aside class="sidebar">
    <!-- 关于个人 -->
    <section class="m-top">
      <a-card title="关于"
              :bordered="false"
              :hoverable="true">
        <div class="
author">
          <div class="pic"><img src="../assets/images/pic.jpg"
                 alt="头像"></div>
          <div class="name">吴东明</div>
          <div class="content">滑稽的人就做滑稽的事</div>
          <div class="concat">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </a-card>
    </section>
    <!--热门文章-->
    <section class="m-top">
      <a-card title="热门文章"
              :bordered="false"
              :hoverable="true">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </section>
    <!--分类-->
    <section class="m-top">
      <a-card title="分类"
              :bordered="false"
              :hoverable="true">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </section>
    <!--标签-->
    <section class="m-top">
      <a-card title="标签"
              :bordered="false"
              :hoverable="true">
        <div class="box">
          <a-card-grid>
            Content
          </a-card-grid>
          <a-card-grid>
            Content
          </a-card-grid>
          <a-card-grid>
            Content
          </a-card-grid>
          <a-card-grid>
            Cont
          </a-card-grid>
          <a-card-grid>
            Content
          </a-card-grid>
          <a-card-grid>
            Content
            Content
          </a-card-grid>
          <a-card-grid>
            Content
          </a-card-grid>
          <a-card-grid>
            Content
            Content
            Content
          </a-card-grid>
          <a-card-grid>
            Content
            Content
            Content
          </a-card-grid>
        </div>
      </a-card>
    </section>

  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      categoryList: [{ categoryname: 1, total: 1 }],
      hotArticleList: [{ artTitle: 122112 }],
      tagList: [{ tagname: 1, total: 1 }]
    }
  },
  computed: {

  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="scss">
.sidebar {
  .m-top {
    margin-top: 15px;
    width: 320px;
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
      .content {
        font-size: 16px;
      }
    }
    .ant-card-head-title::before {
      content: url(http://localhost:3000/favicon1.png);
      width: 5px;
      height: 5px;
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
