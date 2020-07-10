<template>
  <g>
    <circle
      v-for="(v, k) in room.rooms"
      class="points"
      :key="k"
      :id="`point-${k}`"
      :r="v.infos.r"
      :fill="v.infos.color"
      :cx="scale_x(fx(v.infos))"
      :cy="scale_y(fy(v.infos))"
      @click="null"
  />
  </g>
</template>

<script>
  import BaseMixin from './baseMixin'

  export default {
    name: "Points",
    mixins: [BaseMixin]
  }
</script>

<style scoped>

</style>
