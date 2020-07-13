<template>
  <g>
    <a-tooltip
      v-for="(v, k) in room.rooms"
      :key="k"
      :title="v.name"
    >
    <circle
      class="points"
      :r="v.infos.r"
      :fill="v.infos.color"
      :cx="scale_x(fx(v.infos))"
      :cy="scale_y(fy(v.infos))"
      @click="() => {
        $store.commit('chart/SET_ROOM_KEY', k)
        checkIt(v)
      }"
    />
    </a-tooltip>
  </g>
</template>

<script>
  import BaseMixin from './baseMixin'
  import dialogMixin from "@/components/PointChart/DialogPage/dialogMixin";

  export default {
    name: "Points",
    mixins: [BaseMixin, dialogMixin]
  }
</script>

<style scoped>

</style>
