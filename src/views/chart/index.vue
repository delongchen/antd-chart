<template>
  <page-header-wrapper>
    <template #content>

    </template>

    <a-row :gutter="24">
      <a-card :bordered="false" :body-style="{ padding: '0'}">
        <p />
      </a-card>
    </a-row>
  </page-header-wrapper>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "Chart",
    data() {
      return {
        r: 1
      }
    },
    computed: {
      ...mapState('user', ['now'])
    },
    mounted() {
      this.r = this.now + ''
    }
  }
</script>

<style scoped>

</style>
