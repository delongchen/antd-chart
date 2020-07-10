export default {
  props: {
    room: {
      type: Object,
      required: true
    },
    scale_x: { required: true },
    scale_y: { required: true },
    info: { required: true }
  },
  computed: {
    fy() { return this.info.y.f },
    fx() { return this.info.x.f }
  }
}
