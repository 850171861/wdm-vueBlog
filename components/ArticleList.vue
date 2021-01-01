<template>
  <div class="artilce">
    <a-list class="demo-loadmore-list"
            :loading="loading"
            item-layout="horizontal"
            :data-source="data">
      <div v-if="showLoadingMore"
           slot="loadMore"
           :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <a-spin v-if="loadingMore" />
        <a-button v-else
                  @click="onLoadMore">
          loading more
        </a-button>
      </div>
      <a-list-item slot="renderItem"
                   slot-scope="item, index">
        <a-list-item-meta description="在 ES5 中，函数内部有两个特殊对象：arguments 和 this。ES6 新增了 new.target 属性。">
          <a slot="title"
             href="https://www.antdv.com/">标题</a>
        </a-list-item-meta>
        2020-2-2<span>444</span>
        222
        </span>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>

export default {
  data () {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [{ id: 1 }, { id: 2 }]
    };
  },
  mounted () {

    this.loading = false;


  },
  methods: {
  },
};
</script>
<style lang="scss" scope>
.artilce {
  width: 100%;
  flex: 1;
  overflow: hidden;
  margin: 15px 0;
  .demo-loadmore-list {
    min-height: 350px;
  }
}
</style>