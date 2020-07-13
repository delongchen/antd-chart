<template>
  <page-header-wrapper>
    <template #content>
    </template>

    <a-row :gutter="24">
      <point-chart v-if="$store.state.historyStore.length !== 0"/>
      <a-empty v-show="$store.state.historyStore.length === 0">
        <span slot="description">No Data</span>
        <router-link to="/form">Go To Form</router-link>
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

</style>
