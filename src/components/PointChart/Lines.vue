<template>
  <g v-show="showLines">
    <line
      x1="0"
      :y1="y"
      :x2="x - r"
      :y2="y"
      :stroke-width="linesWidth"
      :stroke="linesColor"/>
    <text :x="-m.left / 2" :y="y">{{ ty }}</text>
    <line
      :x2="x"
      :y2="y + r"
      :stroke="linesColor"
      :stroke-width="linesWidth"
      :x1="x"
      :y1="chartHeight"/>
    <text :x="x" :y="chartHeight + m.left / 2">{{ tx }}</text>
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
    }
  }
</script>

<style scoped>

</style>
