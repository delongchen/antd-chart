<template>
  <div>
    <h1>人数: {{ record.list.length }}</h1>
  <a-table
    :pagination="pagination"
    :size="size"
    :columns="columns"
    :data-source="record.list"
  >
    <span slot="action" slot-scope="stu">
      <a @click="() => void checkStu(stu)">more</a>
    </span>
    <single-people
      slot="expandedRowRender"
      slot-scope="room"
      :record="room"
    />
  </a-table>
  </div>
</template>

<script>
  import SinglePeople from "@/views/account/stu"
  import dialogMixin from "@/components/PointChart/DialogPage/dialogMixin";

  export default {
    name: "SingleRoom",
    components: {SinglePeople},
    mixins: [dialogMixin],
    props: {
      record: {
        type: Object,
      },
      size: {
        type: String,
        default: 'default'
      },
      pagination: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onOk() {
        return new Promise(resolve => {
          resolve(true)
        })
      },
      onCancel() {
        return new Promise(resolve => {
          resolve(true)
        })
      },
    },
    data() {
      return {
        columns: [
          {
            dataIndex: 'name_stu',
            title: '姓名'
          },
          {
            dataIndex: 'num_stu',
            title: '学号'
          },
          {
            title: 'action',
            scopedSlots: { customRender: 'action' }
          }
        ]
      }
    },
    computed: {
      standards() {
        return this.$store.state.stuTag.standards
      }
    }
  }
</script>

<style scoped>

</style>
