import { getInfo } from "@/api/stu";
import { transRoomInfo } from "@/utils/info-parse";
import { Trie } from "@/utils/trie";

const user = {
  namespaced: true,
  state: {
    token: '',
    history: [],
    count: 0,
    now: null,
    idTrie: new Trie(null)
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
    GetInfo({ commit, state }, val) {
      return new Promise((resolve, reject) => {
        const parameter = val
        const title = []
        const cmc = parameter['cmc']
        delete parameter['cmc']
        cmc[0] !== undefined && (parameter['num_college'] = cmc[0]) && (title.push(cmc[0]))
        cmc[1] !== undefined && (parameter['num_major'] = cmc[1]) && (title.push(cmc[1]))
        cmc[2] !== undefined && (parameter['num_college'] = cmc[2]) && (title.push(cmc[2]))
        val['num_gr'] !== 0 && title.push(val['num_gr'] + '级')
        val['sex'] !== null && title.push(val['sex'] === 0 ? '女': '男')

        parameter.title = title.join('-')
        getInfo(val).then(response => {
          const result = transRoomInfo(response)
          result.title = val.title
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
