<template>
  <footer class="footer">
    <p>Powered By <a href="https://zh.nuxtjs.org/"
         rel="nofollow"
         target="_blank">Nuxt.js</a>，Designed By blog</p>
    <p class="copyright">Copyright© 2020 <a href="https://github.com/CQBoyBrand"
         target="_blank">
        blog</a></p>
    <div style="height: 17px;">
      <a target="_blank"
         rel="nofollow"
         href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011702500392"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">

        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">备
          50011702500392号</p>
      </a>
    </div>
    <p><a href="http://beian.miit.gov.cn"
         rel="nofollow"
         target="_blank">ICP备17014610号</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  padding: 10px 0;
  min-width: 320px;
  color: #939393;
  margin-top: 15px;
  a {
    color: #939393;
  }
  .copyright {
    a {
      font-style: italic;
    }
  }
}
</style>
