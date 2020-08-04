<template>
  <div>
    <a-descriptions title="基本信息">
      <a-descriptions-item label="姓名">{{ record.name_stu }}</a-descriptions-item>
      <a-descriptions-item label="学号">{{ record.num_stu }}</a-descriptions-item>
    </a-descriptions>
    <a-descriptions title="成绩">
      <a-descriptions-item label="有无挂科">{{ record.gua ? '有': '无' }}</a-descriptions-item>
      <a-descriptions-item label="操行成绩">{{ record.vx }}</a-descriptions-item>
      <a-descriptions-item label="综合成绩">{{ Math.floor(record.score) }}</a-descriptions-item>
    </a-descriptions>
    <a-descriptions title="奖励/补助">
      <p v-if="record.tag.length === 0">暂无</p>
      <a-descriptions-item
        v-for="(v, k) in record.tag"
        :key="k">
        <a-tag :color="standards[v].color">{{ standards[v].title }}</a-tag>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
  export default {
    name: "SinglePeople",
    props: {
      record: {
        type: Object,
        default: null
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
