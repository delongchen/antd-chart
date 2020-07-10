<template>
  <div>
    <svg :width="pageWidth" :height="defaultHeight">
      <g :transform="`translate(${m.left}, ${m.top})`">
        <axis v-if="false" :width="chartWidth" :height="chartHeight" :scale_x="scale_x" :scale_y="scale_y"/>
      </g>
    </svg>
    <p>{{ $store.state.fuck }}</p>
  </div>
</template>

<script>
  import Axis from "@/components/PointChart/Axis";

  export default {
    name: "index",
    components: {
      Axis
    },
    data() {
      return {
        defaultHeight: 700,
        pageWidth: 1000,
        m: {
          top: 80,
          right: 20,
          bottom: 40,
          left: 26
        },
        test: 1
      }
    },
    computed: {
      chartHeight() {
        return this.defaultHeight - this.m.top - this.m.bottom
      },
      chartWidth() {
        return this.pageWidth - this.m.right - this.m.left
      },
    },
    watch: {
      '$store.state.fuck'() {
        console.log('1111')
      }
    }
  }
</script>

<style scoped>

</style>
