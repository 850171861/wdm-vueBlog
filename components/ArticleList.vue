<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        v-if="item.avatar !== ''"
        width="200"
        alt="logo"
        :src="item.avatar"
      />
      <a-list-item-meta :description="item.description">
        <nuxt-link to="article/1" slot="title" :href="item.href">{{ item.title }}</nuxt-link to="/artilce/1">
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part`,
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description:
            'Ant Design, a design langAnt Design, a design language for background applications, is refined by Ant UED Team.uage for background applications, is refined by Ant UED Team.',
        },
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part`,
          avatar: '',
          description:
            'Ant Design, a design language for background applications, Ant Design, a design language for background applications, is refined by Ant UED Team.is refined by Ant UED Team.',
        },
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part`,
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description:
            'Ant Design, a design langAnt Design, a design language for background applications, is refined by Ant UED Team.uage for background applications, is refined by Ant UED Team.',
        },
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part`,
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description:
            'Ant Design, a design langAnt Design, a design language for background applications, is refined by Ant UED Team.uage for background applications, is refined by Ant UED Team.',
        },
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part`,
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description:
            'Ant Design, a design langAnt Design, a design language for background applications, is refined by Ant UED Team.uage for background applications, is refined by Ant UED Team.',
        },
      ],
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10,
      },
      actions: [
        { type: ' ', text: '2020-2-2' },
        { type: 'eye', text: '156' },
        { type: 'message', text: '2' },
        { type: 'bars', text: '2' },
      ],
    }
  },
}
</script>
<style lang="scss" scope>
.ant-list-item {
  position: relative;
  flex-direction: row-reverse;
  border-bottom: 2px dotted #e8e8e8 !important;
  .ant-list-item-extra {
    margin-right: 40px;
  }
  .ant-list-item-meta {
    margin-bottom: 32px;
    a {
      font-size: 18px;
    }
  }
  .ant-list-item-action {
    position: absolute;
    bottom: 10px;
  }
}
</style>