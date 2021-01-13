<template>
  <section class="m-top">
    <a-card title="分类"
            :bordered="false"
            :hoverable="true">
      <i class="icon"><img src="@/static/img/type.png"
             alt="分类" /></i>
      <div class="type">
        <ul>
          <li>
            <span>2111</span>
            <span>12222</span>
          </li>
          <li>
            <span>1</span>
            <span>2</span>
          </li>
        </ul>
      </div>
    </a-card>
  </section>
</template>

<script>
export default {
  name: 'category'
}
</script>

<style lang="scss" scope>
.m-top {
  margin-top: 15px;
  width: 100%;
  position: relative;
  // 分类
  .type {
    ul {
      padding: 0;
      list-style: none;
      li {
        width: 100%;
        height: 32px;
        color: #666;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
      }
      li:hover {
        background: #d2d2d2;
      }
    }
  }
}
</style>