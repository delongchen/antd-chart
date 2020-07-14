<template>
  <div>{{ record }}</div>
</template>

<script>
  export default {
    name: "SinglePeople",
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
