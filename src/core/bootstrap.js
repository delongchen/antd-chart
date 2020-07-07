import storage from 'store'
import store from '@/store'
import {
  ACCESS_TOKEN
} from '@/store/mutation-types'

export default function () {
  store.commit('user/SET_TOKEN', storage.get(ACCESS_TOKEN))
}
