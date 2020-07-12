import {getInfo} from "@/api/stu";
import {transRoomInfo} from "@/utils/info-parse";
import {parameterWrapper} from "@/utils/utils";

const user = {
  namespaced: true,
  mutations: {
    SET_TOKEN(state, token) {
      console.log(token)
    }
  },
  actions: {
    GetInfo({commit, rootGetters}, val) {
      return new Promise((resolve, reject) => {
        const parameter = parameterWrapper(val)
        const id = rootGetters.findHistory(parameter.title)
        if (id === null) {
          getInfo(parameter.parameter).then(response => {
            const count = rootGetters.ROOM_COUNT
            const result = transRoomInfo(response)
            result.title = parameter.title.join('-')
            result.id = count
            commit('ADD_ROOM_TO_HISTORY', result, {root: true})
            commit('SET_NOW', count, { root: true })
            resolve()
          }).catch(error => void reject(error))
        } else {
          commit('SET_NOW', id, { root: true })
          resolve()
        }
      })
    }
  }
}

export default user
