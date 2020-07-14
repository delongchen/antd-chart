<template>
  <page-header-wrapper>
    <template #content>
      <h1>TTTT</h1>
      <p>adasd</p>
    </template>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="班级"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        >
          <a-cascader
            :options="data"
            change-on-select
            v-decorator="['cmc', {
              initialValue: []
            }]"
            placeholder="学院/专业/班级" />
        </a-form-item>
        <a-form-item
          label="年级"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        >
          <a-select
            v-decorator="['num_gr', {
              initialValue: 2019,
              rules: [{ required: false }]
            }]"
          >
            <a-select-option :value="0">
              All
            </a-select-option>
            <a-select-option
              v-for="(v, k) in grade"
              :key="k"
              :value="v">{{ v }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="性别"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
        >
          <a-radio-group v-decorator="['sex', { initialValue: null }]">
            <a-radio :value="null">全部</a-radio>
            <a-radio :value="1">男</a-radio>
            <a-radio :value="0">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">提交</a-button>
          <a-button style="margin-left: 8px" htmlType="reset">重置</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
  import { data } from "@/views/form/form";

  const grade = []
  for (let i = 2012; i < 2020; i++) grade.push(i)

  export default {
    name: "BaseForm",
    data() {
      return {
        form: this.$form.createForm(this),
        data,
        grade,
      }
    },
    methods: {
      handleSubmit(event) {
        event.preventDefault()
        this.form.validateFields((err, val) => {
          if (!err) {
            this.$router.push('/chart')
            this.$store
              .dispatch('user/GetInfo', val)
              .then(() => {})
              .catch(() => {
                this.$message.error('错误')
            }).finally(() => void this.$store.commit('SET_LOADING', false))
          }
        })
      },
    },
  }
</script>

<style scoped>

</style>
