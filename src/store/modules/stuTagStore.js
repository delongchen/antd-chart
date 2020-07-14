import { TagStandard } from "@/config/tagStandard";

const standards = {}

TagStandard.forEach(item => {
  standards[item.key] = item
})

export default {
  namespaced: true,
  state: {
    standards
  }
}
