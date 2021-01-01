<template>
  <main class="main">
    <nuxt class="main-article" />
    <side class="main-aside"></side>
  </main>
</template>

<script>
import side from '@/components/Side'
export default {
  name: 'Main',
  components: { side },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}
</style>
