<template>
  <div>
    <a-table :columns="columns" :data-source="selectedRoom">
      <span slot="member" slot-scope="members">
        <a-tag
          v-for="(v, k) in members"
          :key="k"
          :color="v.gua ? 'red': 'green'"
        >
        {{ v.name_stu }}
      </a-tag>
      </span>
      <span slot="actions" slot-scope="record">
        <a>{{ record.key }}</a>
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
      scopedSlots: { customRender: 'member' },
    },
    {
      title: 'Actions',
      scopedSlots: { customRender: 'actions' },
      key: 'actions'
    }
  ]

  export default {
    name: "RoomList",
    data() {
      return {
        columns
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
    }
  }
</script>

<style scoped>

</style>
