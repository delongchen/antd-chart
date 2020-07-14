<template>
  <page-header-wrapper>
    <template #content>
    </template>

    <a-row :gutter="24">
      <point-chart v-if="$store.state.historyStore.length !== 0"/>
      <a-spin size="large" v-show="$store.state.loading" tip="Loading...">
        <div class="spin-content">
          稍等片刻
        </div>
      </a-spin>
      <a-empty v-show="!$store.state.loading && $store.state.historyStore.length === 0">
        <span slot="description">No Data</span>
        <a-button @click="$router.push('/form')">Go To Form</a-button>
      </a-empty>
    </a-row>
  </page-header-wrapper>
</template>

<script>
  import PointChart from '@/components/PointChart'

  export default {
    name: "Chart",
    components: {
      PointChart
    }
  }
</script>

<style scoped>
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
