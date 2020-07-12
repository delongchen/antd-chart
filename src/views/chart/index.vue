<template>
  <page-header-wrapper>
    <template #content>
    </template>

    <a-row :gutter="24">
      <point-chart v-if="$store.state.historyStore.length !== 0"/>
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
