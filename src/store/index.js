import Vue from "vue"
import Vuex from "vuex"

import app from "@/store/modules/app";
import user from "@/store/modules/user";
import {HS} from "@/utils/historyStore";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
  },
  state: {
    cur: -1,
    historyStore: [],
    count: 0,
    historyMap: new HS(),
    fuck: 0
  },
  mutations: {
    ADD_ROOM_TO_HISTORY: (state, room) => {
      state.historyMap.add(room.title, room.id)
      state.historyStore.push(room)
      state.count++
    },
    SET_NOW(state, id) {id !== state.cur && (state.cur = id)},
    FUCK: state => state.fuck++
  },
  getters: {
    findHistory: state => hash => {
      return state.historyMap.find(hash)
    },
    CURRENT_ROOM(state) {
      return state.history[state.cur]
    },
    ROOM_COUNT(state) {
      return state.count
    }
  }
})
