import SinglePeople from "@/views/account/stu/index";

export default {
  methods: {
    checkStu(stu) {
      this.$dialog(
        SinglePeople,
        {
          record: stu
        },
        {
          title: `个人详情-${stu.name_stu}`,
          width: 1200,
          centered: true,
          maskClosable: true,
          'ok-text': '关闭',
          'cancel-text': '加入对比'
        }
      )
    }
  }
}
