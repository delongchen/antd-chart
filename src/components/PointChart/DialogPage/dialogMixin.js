import SingleRoom from "@/components/PointChart/DialogPage/SingleRoom";

export default {
  methods: {
    checkIt(room) {
      this.$dialog (
        SingleRoom,
        {
          record: room
        },
        {
          title: room.name,
          width: 700,
          centered: true,
          maskClosable: false
        })
    }
  }
}
