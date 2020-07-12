export default {
  namespaced: true,
  state: {
    curRoomKey: null,
    selectedColor: null
  },
  mutations: {
    SET_ROOM_KEY(state, key) { state.curRoomKey !== key && (state.curRoomKey = key) },
    SET_SELECTED_COLOR(state, color) { state.selectedColor !== color && (state.selectedColor = color) }
  },
  getters: {
    CUR(state, getters, rootState, rootGetters) {
      return state.curRoomKey === null ? null : rootGetters.CURRENT_ROOM.rooms[state.curRoomKey]
    },
  }
}
