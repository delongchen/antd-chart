<template>
  <page-header-wrapper>
    <template #content>
    </template>

    <a-row :gutter="24">
      <a-card :bordered="false" :body-style="{ padding: '0'}">
        <point-chart/>
      </a-card>
    </a-row>
  </page-header-wrapper>
</template>

<script>
  import PointChart from '@/components/PointChart'

  export default {
    name: "Chart",
    components: {
      PointChart
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>

</style>
