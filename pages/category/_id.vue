<template>
  <div class="category">
    <section class="artList-by-type">
      <p class="type-title">搜索<span>{{$route.query.id}}</span>相关的文章</p>
      <p class="type-total"
         v-if="total">共找到<span>{{1 || 0}}</span>篇</p>
    </section>
    <list></list>
  </div>
</template>

<script>

import list from '@/components/ArticleList.vue'
export default {
  name: 'category',
  components: {
    'list': list
  },
  data () {
  }
}
</script>

<style lang="scss" scope>
.category {
  display: flex;
  flex-direction: column;
  .artList-by-type {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 16px;
    .type-title {
      padding-bottom: 10px;
      span {
        color: orange;
        font-weight: bold;
        border-radius: 4px;
        padding: 5px;
        margin: 0 5px;
      }
    }
    .type-total {
      span {
        margin: 0 5px;
        color: orange;
        font-weight: bold;
      }
    }
  }
}
</style>
