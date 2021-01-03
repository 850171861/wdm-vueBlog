<template>
  <div class="about">
    <div class="about-me">
      <el-divider>关于我</el-divider>
    </div>
    <div class="clearfix about-me-detail">
      <div class="about-me-left">
        <img src="../assets/images/pic.jpg"
             alt="重庆崽儿Brand">
        <h5>吴东明</h5>
      </div>
      <ul class="about-me-right">
        <li>前端开发：2020年专科科毕业～今日</li>
        <li>90后瘦宅，篮球、羽毛球等球类</li>
        <li>工作主要使用的是Vue.js、Node.js</li>
        <li>喜欢看篮球，詹姆斯粉</li>
        <li>未完待续</li>
      </ul>
    </div>
    <div class="about-site">
      <el-divider>关于本站</el-divider>
    </div>
    <div class="site-box">
      <div class="site-descript">
        本站建立，是自己用来记录学习，工作和一切自己想记录的东西的地方。欢迎访问
        <a href="http://www.baidu.com">我的博客</a>。
        <div>
          博客界面有些丑，但是暂时不打算改了，如果你有一些简约看着又不错的博客界面，可以给我留言或者邮件，我参考参考。
        </div>
        <div style="text-align: center;">
          <img src="../assets/images/Hi-brand-dongtu.gif"
               alt="hi-brand">
        </div>
      </div>
      <div>
        本站所用技术栈：
      </div>
      <div class="site-tech">
        <div>前端：Nuxt.js+Ant Design Vue</div>
        <div>后端：Vue.js+Ant Design Vue</div>
        <div>服务端：Koa2.js</div>
        <div>数据库：Mongodb</div>
        <div>本站源码：待上线</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  head () {
    return {
      title: '关于',
    }
  },
  computed: {
    linkList () {
      return this.$store.state.link.list
    }
  },
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
.about {
  background-color: #fff;
  padding: 15px 0;
  box-sizing: border-box;
  .about-me,
  .contact-me,
  .about-site {
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    color: #333;
  }
  .about-me-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    .about-me-left {
      padding-bottom: 10px;
      img {
        display: block;
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
      }
      h5 {
        padding: 8px 0 0;
      }
    }
    .about-me-right {
      font-size: 13px;
      li {
        list-style: none;
        line-height: 20px;
      }
    }
  }
  .friends-list-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    li {
      float: left;
      background-color: #eee;
      list-style: none;
      border-radius: 4px;
      margin-bottom: 7px;
      margin-right: 7px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 38px;
        padding: 0px 10px;
      }
    }
  }
  .site-box {
    padding: 15px;
    font-size: 13px;
    line-height: 24px;
    box-sizing: border-box;
    a {
      color: #409eff;
    }
    .site-descript {
      text-indent: 2em;
      padding-bottom: 15px;
    }
    .site-tech {
      padding: 8px 0 8px 2em;
      box-sizing: border-box;
    }
  }
  @media screen and (min-width: 769px) {
    .about-me-left,
    .about-me-right {
      float: left;
    }
    .about-me-left {
      width: 100px;
      margin: 0 auto;
      text-align: center;
    }
    .about-me-right {
      max-width: 600px;
      margin-left: 20px;
      li {
        padding-bottom: 15px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .about-me-left {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    .about-me-right {
      padding-bottom: 15px;
    }
  }
}
</style>
