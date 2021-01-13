<template>
  <!-- 关于个人 -->
  <section class="m-top">
    <a-card title="关于" :bordered="false" :hoverable="true">
      <i class="icon"><img src="@/static/img/my.png" alt="标签" /></i>

      <div class="author">
        <div class="pic">
          <img
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="头像"
          />
        </div>
        <div class="name">var author='wdm'</div>
        <div class="content">指尖改变世界</div>
        <div class="concat">
          <ul>
            <li><img src="@/static/img/QQ.png" alt="qq" /></li>
            <li><img src="@/static/img/wx.png" alt="微信" /></li>
            <li><img src="@/static/img/github.png" alt="github" /></li>
            <li><img src="@/static/img/email.png" alt="邮箱" /></li>
          </ul>
        </div>
      </div>
    </a-card>
  </section>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="scss" scpoe>
.m-top {
  margin-top: 15px;
  width: 100%;
  position: relative;
  .author {
    text-align: center;
    .pic {
      img {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        margin: auto;
      }
    }
    .name {
      font-size: 22px;
    }
    .concat {
      margin-top: 36px;
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        li {
          width: 25%;
        }
      }
    }
  }
}
</style>