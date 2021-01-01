<template>
  <aside class="sidebar">
    <!--热门文章-->
    <section class="m-top">
      <a-card title="Card title"
              :bordered="false">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </section>
    <!--分类-->
    <section class="m-top">
      <a-card title="Card title"
              :bordered="false">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </section>
    <!--标签-->
    <section class="m-top">

      <a-card title="Card Title"
              :bordered="false">
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
