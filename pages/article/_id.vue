<template>
  <div class="article_id clearfix">
    <div class="left-content"
         v-if="articleDetail.artTitle">
      <h2 class="article-title">{{ data.title }}</h2>
      <p class="article-info">
        <span>发布于：{{ data.created | moment }}</span><span>{{ data.reads }}次浏览</span><span>{{ data.answer }} 条评论</span>
      </p>
      <div class="article-content"
           id="r-md-preview">
        <div v-html="data.content"></div>
      </div>
      <!-- 相关文章 -->
      <div class="related-articles">
        <div class="related">相关文章</div>
        <ul class="ul-related">
          <li v-for="(item,index) in related">
            <nuxt-link tag="a"
                       :to="item._id">{{item.title}}</nuxt-link>
          </li>
        </ul>
        <ul class="ul-copyright">
          <li><span>本文作者：</span> var author='wdm'</li>
          <li><span>本文链接：</span> http://{{$nuxt.$route.path}}</li>
          <li>
            <span>版权声明：</span> 本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！
          </li>
        </ul>
      </div>
      <comment />
    </div>
    <div v-else>
      <a-empty description="咦，你要找的东西好像不见了" />
    </div>
  </div>
</template>

<script>
import comment from '../../components/Comment'
import { getArticleInfo } from '@/api/article'
import filters from '@/directive/relativeTime'

export default {
  name: 'Article',
  components: { comment },
  filters: filters,
  data () {
    return {
      articleDetail: { artTitle: true },
      msg: '<h1>内容</h1>',
    }
  },

  async asyncData ({ params, error }) {
    const { code, data, related } = await getArticleInfo(params)
    if (code === 200) {
      return {
        data: data,
        related: related
      }
    }
  },
}
</script>

<style lang="scss">
.related-articles {
  .related {
    height: 30px;
    border-bottom: 1px solid #eee;
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 60px;
  }
  .ul-related {
    li {
      a {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: #666;
        text-decoration: underline;
      }
      a:hover {
        color: #000;
        padding-left: 10px;
        transition: all 0.5s;
      }
    }
  }
  .ul-copyright {
    background: #f5f5f5;
    border-left: 3px solid #ff2a2a;
    list-style: none;
    margin: 12px 0 0;
    padding: 0.5em 1em;
  }
}
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
