<template>
  <div>
    <a-table :columns="columns" :data-source="selectedRoom">
      <span slot="member" slot-scope="members">
        <a-tag
          v-for="(v, k) in members"
          :key="k"
          @click="showSinglePeople(v)"
          :color="v.gua ? 'red': 'green'">
          {{ v.name_stu }}
        </a-tag>
      </span>
      <span slot="actions" slot-scope="">
        <a>加入对比</a>
      </span>
      <single-room
        slot-scope="room"
        :record="room"
        slot="expandedRowRender"
      />
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

  import SingleRoom from "@/components/PointChart/DialogPage/SingleRoom";
  import SinglePeople from "@/components/PointChart/DialogPage/SinglePeople";

  export default {
    name: "RoomList",
    components: { SingleRoom },
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
      showSinglePeople(member) {
        this.$dialog(
          SinglePeople,
          {
            record: member
          },
          {
            title: member.name_stu,
            width: 1000,
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
