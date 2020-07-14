<template>
  <a-table
    :pagination="false"
    :columns="columns"
    :data-source="record.list">
    <span slot="mark" slot-scope="stu">
      {{(stu.vx + stu.vy) / 2}}
    </span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="(v, k) in tags"
        :key="k"
      >
        {{ v }}
      </a-tag>
    </span>
  </a-table>
</template>

<script>
  export default {
    name: "SingleRoom",
    props: {
      record: {
        type: Object,
        default: null
      }
    },
    methods: {
      onOk () {
        return new Promise(resolve => {
          resolve(true)
        })
      },
      onCancel () {
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
            scopedSlots: { customRender: 'mark' }
          },
          {
            title: '标签',
            dataIndex: 'tag',
            scopedSlots: { customRender: 'tags' }
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
