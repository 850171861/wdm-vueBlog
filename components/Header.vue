<template>
  <header class="header">
    <div class="nav">
      <h2 class="logo"><a href="/">logo</a></h2>
      <ul class="nav-box">
        <nuxt-link to="/" tag="li">代码</nuxt-link>
        <nuxt-link to="/warehouse" tag="li">仓库</nuxt-link>
        <nuxt-link to="/archive" tag="li">归档</nuxt-link>
        <nuxt-link to="/about" tag="li">关于我</nuxt-link>
      </ul>
      <a-input-search
        placeholder="input search text"
        style="width: 200px"
        @search="onSearch"
      />
    </div>
    <div class="mobile">
      <a-collapse>
        <a-collapse-panel :accordion="true" :show-arrow="false">
          <ul class="mobile-nav-box">
            <nuxt-link to="/" tag="li">代码</nuxt-link>
            <nuxt-link to="/warehouse" tag="li">仓库</nuxt-link>
            <nuxt-link to="/archive" tag="li">归档</nuxt-link>
            <nuxt-link to="/about" tag="li">关于我</nuxt-link>
          </ul>
          <a-input-search
            placeholder="input search text"
            style="width: 200px"
            @search="onSearch"
          />
        </a-collapse-panel>
      </a-collapse>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      props: '1',
      user: true,
      text: `A  found as `,
    }
  },
  methods: {
    expandIcon() {},
    onSearch(value) {
      this.$router.push({
        path: `/search?search=` + value,
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
      z-index: 100;
      position: absolute;
      top: 0;
      width: 100%;
      .ant-collapse-content-box {
        z-index: 99;
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