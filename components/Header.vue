<template>
  <header class="header">
    <div class="nav">
      <h2 class="logo">
        <nuxt-link to="/"
                   tag="a"
                   href="/">logo</nuxt-link>
      </h2>
      <ul class="nav-box">
        <nuxt-link to="/"
                   tag="li">代码</nuxt-link>
        <nuxt-link to="/warehouse"
                   tag="li">仓库</nuxt-link>
        <nuxt-link to="/archive"
                   tag="li">归档</nuxt-link>
        <nuxt-link to="/about"
                   tag="li">关于我</nuxt-link>
      </ul>
      <a-input-search placeholder="请输入文章关键词"
                      style="width: 200px"
                      @search="onSearch" />
    </div>
    <div class="mobile">
      <div class="type-nav"
           @click="isMenu">
        <img src="../static/img/type.png"
             alt="导航" />
      </div>
      <div class="mobile-menu"
           :class="{ ismenu: ismenu }">
        <ul class="nav-box"
            @click="isMenu">
          <nuxt-link to="/"
                     tag="li">代码</nuxt-link>
          <nuxt-link to="/warehouse"
                     tag="li">仓库</nuxt-link>
          <nuxt-link to="/archive"
                     tag="li">归档</nuxt-link>
          <nuxt-link to="/about"
                     tag="li">关于我</nuxt-link>
        </ul>
        <div class="serach">
          <a-input-search placeholder="请输入文章关键词"
                          style="width: 200px"
                          @search="onSearch" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      ismenu: true,
    }
  },
  methods: {
    isMenu () {
      this.ismenu = !this.ismenu
    },
    onSearch (value) {
      this.ismenu = !this.ismenu
      this.$store.dispatch('article/setArticleList', value)
      this.$router.push({
        path: `/search?search=` + value,
      })
    },
  },
}
</script>

<style lang="scss" scope>
@keyframes myleft {
  from {
    top: -300px;
  }
  to {
    top: 0;
  }
}
.header {
  background-color: #fff;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  .nav {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 60px;
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
  input {
    margin-left: 20px;
  }

  @media screen and (min-width: 420px) {
    .mobile {
      display: none;
    }
  }

  @media screen and (max-width: 420px) {
    .mobile {
      .type-nav {
        z-index: 100;
        position: absolute;
        top: 18px;
        right: 30px;
        width: 25px;
        height: 25px;
      }

      .mobile-menu {
        background: #fff;
        position: relative;
        animation: myleft 1s;
        .nav-box {
          padding: 0;
          li {
            list-style: none;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-top: 1px solid #ebedf0;
          }
        }
        .serach {
          width: 100%;
          height: 70px;
          line-height: 70px;
          border-top: 1px solid #ebedf0;
          border-bottom: 1px solid #ebedf0;
          margin-bottom: 20px;
          text-align: center;
        }
      }
      .ismenu {
        display: none;
        transition: all 1s;
      }
    }
    .nav {
      .nav-box {
        display: none;
      }
      .ant-input-search {
        display: none;
      }
    }
  }
}
</style>