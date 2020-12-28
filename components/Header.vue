<template>
  <div class="m-header">
    <div class="container">
      <a-row>
        <div class="logo">
          <a-col :span="2">
            DMblog
          </a-col>
        </div>
        <a-col :span="16">
          <ul class="nav">
            <li><i></i> 首页</li>
            <li><i></i> 档案</li>
            <li><i></i> 标签</li>
            <li><i></i> 关于</li>
          </ul>
        </a-col>
        <a-col :span="6">
          <ul class="nav-user">
            <template v-if="user">
              <li>登录</li>
              <li>注册</li>
            </template>

            <template v-else>
              <li>未登录</li>
              <li>未注册</li>
            </template>
          </ul>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: true
    }
  }
}
</script>

<style lang="scss" scope>
.m-header {
  height: 60px;
  background: #393d49;
  color: #ffffff;
  overflow: hidden;
  .container {
    max-width: 1280px;
    margin: auto;
    .nav {
      list-style-type: none;
      display: flex;
      li {
        width: 110px;
        font-size: 14px;
        line-height: 60px;
        text-align: center;
      }
    }
  }
}
</style>