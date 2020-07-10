<template>
  <g>
    <g
      id="axis_x"
      class="axis axis--x"
      :transform="`translate(0,${height})`"
      ref="axis_x"
    >
      <text
        :x="width"
        y="26"
        dy=".71em"
        style="fill: #2c3e50; text-anchor: end"
      >寝室平均</text>
    </g>

    <!-- y axis -->
    <g class="axis axis--y" id="axis_y">
      <text
        x="-16"
        y="-16"
        dy=".71em"
        style="text-anchor: start; fill: #2c3e50"
      >寝室平均</text>
    </g>
    <p>{{ room }}</p>
  </g>
</template>

<script>
  import { select } from 'd3-selection'
  import { axisBottom, axisLeft } from 'd3-axis'
  import BaseMixin from './baseMixin'

  export default {
    name: "Axis",
    mixins: [BaseMixin],
    props: {
      height: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
    },
    methods: {
      mount_axis_x() {
        select('#axis_x').call(axisBottom(this.scale_x))
      },
      mount_axis_y() {
        select('#axis_y').call(axisLeft(this.scale_y))
      },
    },
    watch: {
      width() {
        this.mount_axis_x()
      }
    },
    mounted() {
      this.mount_axis_y()
    }
  }
</script>

<style scoped>

</style>
