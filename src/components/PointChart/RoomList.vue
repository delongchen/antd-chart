<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="selectedRoom">
      <span slot="member" slot-scope="members">
        <a-tag
          v-for="(v, k) in members"
          :key="k"
          @click="checkStu(v)"
          :color="v.gua ? 'red': 'green'">
          {{ v.name_stu }}
        </a-tag>
      </span>
      <span slot="actions" slot-scope="stu">
        <router-link :to="{path: '/profile/account', params: {stu}}">more</router-link>
      </span>
      <single-room
        slot="expandedRowRender"
        slot-scope="room"
        :record="room"
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
      key: 1
    }
  ]

  import SingleRoom from "@/components/PointChart/DialogPage/SingleRoom";
  import dialogMixin from "@/components/PointChart/DialogPage/dialogMixin";

  export default {
    name: "RoomList",
    components: { SingleRoom },
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
      },
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
