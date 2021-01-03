<template>
  <header class="header">
    <div class="nav">
      <h2 class="logo"><a href="/"> DMblog</a></h2>
      <ul class="nav-box">
        <nuxt-link to="/"
                   tag="li">代码</nuxt-link>
        <nuxt-link to="/"
                   tag="li">仓库</nuxt-link>
        <nuxt-link to="/archive"
                   tag="li">归档</nuxt-link>
        <nuxt-link to="/about"
                   tag="li">关于我</nuxt-link>
      </ul>
      <a-input-search placeholder="input search text"
                      style="width: 200px"
                      @search="onSearch" />
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      user: true
    }
  },
  methods: {
    onSearch (value) {
      this.$router.push({
        path: `/search?search=` + value
      })
    },
  },
}
</script>

<style lang="scss" scope>
.header {
  background-color: #fff;
  height: 60px;
  width: 100%;
  .nav {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 60px;
    .logo {
      padding-left: 20px;
    }
    .nav-box {
      display: flex;
      li {
        padding: 0 15px;
        list-style: none;
        cursor: pointer;
        font-size: 13px;
        color: #666;
      }
    }
  }
}
</style>