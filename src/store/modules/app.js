import storage from 'store'

import {
  SIDEBAR_TYPE,
  TOGGLE_MOBILE_TYPE
} from '@/store/mutation-types'

const app = {
  namespaced: true,
  state: {
    sideCollapsed: false,
    isMobile: false
  },
  mutations: {
    [SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type
      storage.set(SIDEBAR_TYPE, type)
    },
    [TOGGLE_MOBILE_TYPE]: (state, isMobile) => {
      state.isMobile = isMobile
    },
  }
}

export default app
