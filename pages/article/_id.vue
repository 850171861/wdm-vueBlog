<template>
  <div class="article_id clearfix">
    <div class="left-content"
         v-if="articleDetail.artTitle">
      <h2 class="article-title">标题</h2>
      <p class="article-info"><span>发布于：2020-2-2</span><span>4次浏览</span><span>2 条评论</span>
      </p>
      <div class="article-content"
           id="r-md-preview">
        <div v-html="msg">

        </div>
      </div>

    </div>
    <div v-else>
      <a-empty description="咦，你要找的东西好像不见了" />
    </div>

  </div>
</template>

<script>

export default {
  name: 'article',
  data () {
    return {
      articleDetail: { artTitle: false },
      msg: "<h1>内容</h1>"
    }
  }
}
</script>

<style lang="scss">
.el-message {
  top: 65px !important;
}

.article_id {
  background-color: #fff;
  padding: 15px;
  .article-title {
    text-align: center;
    font-size: 20px;
    color: #666;
    margin: 16px 0;
  }

  .article-info {
    text-align: center;
    font-size: 12px;
    color: #999;
    padding-bottom: 15px;

    span {
      padding: 0 6px;
    }
  }

  .article-content {
    img {
      border-radius: 8px;
    }
  }
  #r-md-preview {
    @media screen and (max-width: 920px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .article-type {
    /*border-top: 2px solid #ccc;*/
    border-left: 2px solid #ccc;
    background-color: #f6f8fa;
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 15px 0 15px 15px;
    font-size: 14px;

    p {
      padding-bottom: 5px;
    }

    a {
      color: #409eff;
      text-decoration: underline;
      font-weight: bold;
    }
  }

  .art_tag {
    a {
      padding: 0 6px;
    }
  }

  .not-found {
    text-align: center;
  }
}
</style>
