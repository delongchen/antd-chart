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
      @mouseenter="() => {
        $store.commit('chart/SET_ROOM_KEY', k)
        $store.state.chart.showLines = true
      }"
      @mouseleave="() => {$store.state.chart.showLines = false}"
      @click="() => {checkIt(v)}"
    />
    </a-tooltip>
  </g>
</template>

<script>
  import BaseMixin from './baseMixin'
  import SingleRoom from "@/components/PointChart/DialogPage/SingleRoom";

  export default {
    name: "Points",
    mixins: [BaseMixin],
    methods: {
      checkIt(room) {
        this.$dialog(
          SingleRoom,
          {
            record: room,
            size: 'small'
          },
          {
            title: room.name,
            width: 1200,
            centered: true,
            maskClosable: false,
            'ok-text': '关闭',
            'cancel-text': '加入对比'
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
