<template>
  <a-list item-layout="vertical"
          size="large"
          :pagination="pagination"
          :data-source="articleList">
    <a-list-item slot="renderItem"
                 key="item.title"
                 slot-scope="item, index">
      <template slot="actions">
        <span>{{item.created | moment}}</span>
      </template>
      <template slot="actions">
        <span>
          <a-icon type="eye"
                  style="margin-right: 8px" /> {{item.reads}}
        </span>
      </template>
      <template slot="actions">
        <span>
          <a-icon type="message"
                  style="margin-right: 8px" /> {{item.answer}}
        </span>
      </template>
      <template slot="actions">
        <span>
          <a-icon type="bars"
                  style="margin-right: 8px" /> {{item.category}}
        </span>
      </template>
      <img slot="extra"
           v-if="item.avatar !== ''"
           width="200"
           alt="logo"
           :src="item.url" />
      <a-list-item-meta :description="item.description">
        <nuxt-link to="article/1"
                   slot="title"
                   :href="item.href">{{ item.title }}</nuxt-link to="/artilce/1">
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
import moment from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
moment.extend(relativeTime)
export default {
  data () {
    return {
      page: 1,
      limit: 2,
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10,
      },
    }
  },
  computed: {
    articleList () {
      return this.$store.state.article.articleList
    }

  },
  filters: {
    moment (date) {
      // 超过7天，显示日期
      if (moment(date).isBefore(moment().subtract(7, 'days'))) {
        return moment(date).format('YYYY-MM-DD')
      } else {
        // 1小前，xx小时前，X天前
        return moment(date).locale('zh-cn').from(moment())
      }
    }
  },
  mounted () {
    let obj = { page: this.page, limit: this.limit }
    let route = this.$route
    if (route.name === 'search-id') {
      obj['sreach'] = route.query.search
    }
    if (route.name === 'category-id') {
      obj['category'] = route.params.id
    }
    if (route.name === 'tags-id') {
      obj['tag'] = route.params.id
    }

    this.$store.dispatch('article/setArticleList', obj)
  },
}
</script>
<style lang="scss" scope>
.ant-list-item {
  position: relative;
  flex-direction: row-reverse;
  border-bottom: 2px dotted #e8e8e8 !important;
  .ant-list-item-extra {
    margin-right: 40px;
  }
  .ant-list-item-meta {
    margin-bottom: 32px;
    a {
      font-size: 18px;
    }
  }
  .ant-list-item-action {
    position: absolute;
    bottom: 10px;
  }
}
</style>