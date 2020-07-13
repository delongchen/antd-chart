<template>
  <div>
    <a-table :columns="columns" :data-source="selectedRoom">
      <span slot="member" slot-scope="members">
        <a-tag
          v-for="(v, k) in members"
          :key="k"
          :color="v.gua ? 'red': 'green'">
          {{ v.name_stu }}
        </a-tag>
      </span>
      <span slot="actions" slot-scope="record">
        <a @click="checkIt(record)">查看详细</a>
        <a-divider type="vertical"/>
        <a>加入对比</a>
      </span>
    </a-table>
  </div>
</template>

<script>

  const columns = [
    {
      dataIndex: 'name',
      title: 'ROOM'
    },
    {
      dataIndex: 'list',
      title: 'Member',
      scopedSlots: {customRender: 'member'},
    },
    {
      title: 'Actions',
      scopedSlots: {customRender: 'actions'},
      key: 'actions'
    }
  ]

  import dialogMixin from "@/components/PointChart/DialogPage/dialogMixin";

  export default {
    name: "RoomList",
    mixins: [dialogMixin],
    data() {
      return {
        columns,
      }
    },
    computed: {
      curRoom() {
        return this.$store.getters.CURRENT_ROOM
      },
      curColor() {
        return this.$store.state.chart.selectedColor
      },
      selectedRoom() {
        return this.curRoom.gradeCounter[this.curColor]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
