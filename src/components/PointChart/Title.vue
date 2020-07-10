<template>
  <g>
    <text
      :x="width / 2"
      y="-20"
      fill="#2c3e50"
      font-size="16px"
      font-weight="700"
      text-anchor="middle"
    >{{ room.title }}</text>
  </g>
</template>

<script>
  export default {
    name: "Title",
    props: {
      room: {
        type: Object,
        required: true
      },
      width: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
