<template>
  <page-header-wrapper content="">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="标题"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入标题' }]}
            ]"
            name="name"
            placeholder="给目标起个名字" />
        </a-form-item>
        <a-form-item
          label="班级"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        >
          <a-cascader :options="data" change-on-select @change="onChange" placeholder="学院/专业/班级" />
        </a-form-item>
        <a-form-item
          :wrapperCol="{ span: 24 }"
          style="text-align: center"
        >
          <a-button htmlType="submit" type="primary">提交</a-button>
          <a-button style="margin-left: 8px" htmlType="reset">重置</a-button>
        </a-form-item>
        <p>{{ cmc }}</p>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
  import { data } from "@/views/form/form";

  export default {
    name: "BaseForm",
    data() {
      return {
        form: this.$form.createForm(this),
        data,
        cmc: {
          college: null,
          major: null,
          class: null
        }
      }
    },
    methods: {
      handleSubmit(event) {
        event.preventDefault()
      },
      onChange(val) {
        val[0] && (this.cmc.college = val[0])
        val[1] && (this.cmc.major = val[1])
        val[2] && (this.cmc.class = val[2])
      }
    }
  }
</script>

<style scoped>

</style>
