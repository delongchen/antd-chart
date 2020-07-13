<template>
  <p>{{ record }}</p>
</template>

<script>
  export default {
    name: "SingleRoom",
    props: {
      record: {
        type: Object,
        default: null
      }
    },
  }
</script>

<style scoped>

</style>
