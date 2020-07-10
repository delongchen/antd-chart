import {getInfo} from "@/api/stu";
import {transRoomInfo} from "@/utils/info-parse";
import {parameterWrapper} from "@/utils/utils";

const user = {
  namespaced: true,
  actions: {
    GetInfo({commit, rootGetters}, val) {
      return new Promise((resolve, reject) => {
        const parameter = parameterWrapper(val)
        const history = rootGetters.findHistory(parameter.title)
        let id = rootGetters.ROOM_COUNT
        if (history === null)
          getInfo(parameter.parameter).then(response => {
            const result = transRoomInfo(response)
            result.title = parameter.title.join('-')
            result.id = id
            commit('ADD_ROOM_TO_HISTORY', result, { root: true })
          }).catch(error => void reject(error))
        else id = history
        resolve(id)
      })
    }
  }
}

export default user
