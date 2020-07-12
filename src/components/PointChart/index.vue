<template>
  <a-card :bordered="false" :body-style="{ padding: '0'}" id="" :loading="$store.state.loading">
    <svg :width="pageWidth" :height="defaultHeight">
      <g :transform="`translate(${m.left}, ${m.top})`">
        <chart-title :width="chartWidth" :room="room"/>
        <axis
          :width="chartWidth"
          :height="chartHeight"
          :info="f"
          :room="room"
          :scale_y="scale_y"
          :scale_x="scale_x"/>
        <points
          :room="room"
          :scale_x="scale_x"
          :scale_y="scale_y"
          :info="f"/>
        <lines
          :room="room"
          :chart-height="chartHeight"
          :m="m"
          :scale_x="scale_x"
          :scale_y="scale_y"
          :info="f"/>
      </g>
    </svg>
    <controller/>
    <room-list v-if="$store.state.chart.selectedColor !== null"/>
  </a-card>
</template>

<script>
  import Axis from "@/components/PointChart/Axis";
  import ChartTitle from '@/components/PointChart/Title'
  import Points from "@/components/PointChart/Points";
  import Lines from "@/components/PointChart/Lines"
  import Controller from "@/components/PointChart/Controller";
  import RoomList from "@/components/PointChart/RoomList";

  import { fs } from "@/components/PointChart/fs";
  import {scaleLinear} from "d3-scale";

  export default {
    name: "index",
    components: {
      Axis,
      ChartTitle,
      Points,
      Lines,
      Controller,
      RoomList
    },
    data() {
      return {
        defaultHeight: 700,
        pageWidth: 1000,
        m: {
          top: 80,
          right: 50,
          bottom: 50,
          left: 70
        },
        fs,
        curF: 0,

      }
    },
    methods: {
      near_max(num) {
        return (Math.floor(num / 10) + 1) * 10
      },
      near_min(num) {
        return (Math.ceil(num / 10) - 1) * 10
      }
    },
    computed: {
      chartHeight() {
        return this.defaultHeight - this.m.top - this.m.bottom
      },
      chartWidth() {
        return this.pageWidth - this.m.right - this.m.left
      },
      room() {
        return this.$store.getters.CURRENT_ROOM
      },
      f() {
        return this.fs[this.curF]
      },
      scale_x() {
        return scaleLinear().domain([
          this.near_min(this.f.x.f(this.room.min)),
          this.near_max(this.f.x.f(this.room.max))
        ]).range([0, this.chartWidth])
      },
      scale_y() {
        return scaleLinear().domain([
          this.near_max(this.f.y.f(this.room.max)),
          this.near_min(this.f.y.f(this.room.min))
        ]).rangeRound([0, this.chartHeight])
      }
    },
    mounted() {
      this.pageWidth = this.$el.offsetWidth
    }
  }
</script>

<style scoped>
</style>
