<template>
  <page-header-wrapper
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="handleTabChange"
  >
    <template v-slot:content>
      <div class="ant-pro-page-header-search">
        <a-input-search size="large" style="width: 80%; max-width: 522px;">
          <template v-slot:enterButton>
            搜索
          </template>
        </a-input-search>
      </div>
    </template>
    <router-view />
  </page-header-wrapper>
</template>

<script>
  const getActiveKey = (path) => {
    switch (path) {
      case '/recommend/search':
        return '1'
      case '/recommend/scholarship':
        return '2'
      case '/recommend/subsidy':
        return '3'
      default:
        return '1'
    }
  }
  export default {
    name: 'SearchLayout',
    data () {
      return {
        tabList: [
          { key: '1', tab: '检索' },
          { key: '3', tab: '补助情况' },
          { key: '2', tab: '奖励情况' }
        ],
        tabActiveKey: '1',
        search: true
      }
    },
    created () {
      this.tabActiveKey = getActiveKey(this.$route.path)

      this.$watch('$route', (val) => {
        this.tabActiveKey = getActiveKey(val.path)
      })
    },
    methods: {
      handleTabChange (key) {
        this.tabActiveKey = key
        switch (key) {
          case '1':
            this.$router.push('/recommend/search')
            break
          case '2':
            this.$router.push('/recommend/scholarship')
            break
          case '3':
            this.$router.push('/recommend/subsidy')
            break
          default:
            this.$router.push('/form')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ant-pro-page-header-search {
    text-align: center;
    margin-bottom: 16px;
  }
</style>
