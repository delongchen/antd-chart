<template>
  <g v-show="showLines">
    <line
      x1="0"
      :y1="y"
      :x2="x - r"
      :y2="y"
      :stroke-width="linesWidth"
      :stroke="linesColor"/>
    <text :x="-m.left * 0.7" :y="y" font-size="20">{{ ty }}</text>
    <line
      :x2="x"
      :y2="y + r"
      :stroke="linesColor"
      :stroke-width="linesWidth"
      :x1="x"
      :y1="chartHeight"/>
    <text :x="x" :y="chartHeight + m.left / 2" font-size="20">{{ tx }}</text>
  </g>
</template>

<script>
  import BaseMixin from './baseMixin'

  export default {
    name: "Lines",
    mixins: [BaseMixin],
    props: ['chartHeight', 'm'],
    data() {
      return {
        showLines: true,
        linesColor: '#000',
        linesWidth: '1px',
        x: 10,
        y: 10,
        r: 2,
        tx: 0,
        ty: 0
      }
    },
    watch: {
      '$store.state.chart.curRoomKey'() {
        const room = this.$store.getters["chart/CUR"]
        this.r = room.infos.r
        this.tx = this.fx(room.infos)
        this.ty = this.fy(room.infos)
        this.x = this.scale_x(this.tx)
        this.y = this.scale_y(this.ty)
      }
    }
  }
</script>

<style scoped>

</style>
