<template>
  <div class="warehouse">
    <a-card hoverable>
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <template slot="actions" class="ant-card-actions"> 访问 </template>
      <a-card-meta title="Card title" description="This is the description">
      </a-card-meta>
    </a-card>

    <a-card hoverable>
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <template slot="actions" class="ant-card-actions"> 访问 </template>
      <a-card-meta title="Card title" description="This is the description">
      </a-card-meta>
    </a-card>

    <a-card hoverable>
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <template slot="actions" class="ant-card-actions"> 访问 </template>
      <a-card-meta title="Card title" description="This is the description">
      </a-card-meta>
    </a-card>

    <a-card hoverable>
      <img
        slot="cover"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
      <template slot="actions" class="ant-card-actions"> 访问 </template>
      <a-card-meta title="Card title" description="This is the description">
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'warehouse',
}
</script>

<style lang="scss" scope>
.warehouse {
  .ant-card {
    margin-bottom: 8px;
    margin-right: 5px;
    float: left;
  }
  @media screen and (max-width: 590px) {
    .ant-card {
      width: 100%;
    }
  }
}
</style>