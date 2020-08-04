<template>
  <div>
    <h1>人数: {{ record.list.length }}</h1>
  <a-table
    :pagination="pagination"
    :size="size"
    :columns="columns"
    :data-source="record.list"
  >
    <span slot="mark" slot-scope="stu">
      {{ Math.floor(stu.score) }}
    </span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="(v, k) in tags"
        :key="k"
        :color="standards[v].color">
        {{ standards[v].title }}
      </a-tag>
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
  import SinglePeople from "@/components/PointChart/DialogPage/SinglePeople";

  export default {
    name: "SingleRoom",
    components: {SinglePeople},
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
            title: '平均成绩',
            scopedSlots: {customRender: 'mark'}
          },
          {
            title: '标签',
            dataIndex: 'tag',
            scopedSlots: {customRender: 'tags'}
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
