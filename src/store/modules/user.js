import { getInfo } from "@/api/stu";
import { transRoomInfo } from "@/utils/info-parse";

const user = {
  namespaced: true,
  state: {
    token: '',
    history: [],
    count: 0,
    now: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    ADD_ROOM_TO_HISTORY: (state, room) => {
      state.history.push(room)
    },
    ADD_COUNT: state => void state.count++,
    SET_NOW: (state, id) => void (state.now = id)
  },
  actions: {
    GetInfo({ commit, state }, userInfo) {
      if (userInfo.title === "") userInfo.title = "All Students"
      return new Promise((resolve, reject) => {
        getInfo(userInfo).then(response => {
          const result = transRoomInfo(response)
          result.title = userInfo.title
          result.id = state.count
          commit('ADD_COUNT')
          commit('ADD_ROOM_TO_HISTORY', result)
          resolve(result)
        }).catch(error => void reject(error))
      })
    }
  }
}

export default user
