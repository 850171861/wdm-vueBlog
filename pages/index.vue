<template>
  <div class="index">
    <list></list>
  </div>
</template>

<script>

import list from '@/components/ArticleList.vue'
export default {
  name: 'index',
  components: {
    'list': list
  }
}
</script>

<style lang="scss" scope>
.index {
  width: 855px;
  background: #fff;
  margin-top: 15px;
  padding: 15px;
  border-radius: 6px;
}
</style>
