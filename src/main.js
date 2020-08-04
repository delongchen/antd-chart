import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import { VueAxios } from '@/utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'

Vue.config.productionTip = false

//import './mock'

import bootstrap from "@/core/bootstrap";
import './core/lazy_use'
import './global.less'

Vue.use(VueAxios)
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)

new Vue({
  render: h => h(App),
  store,
  router,
  created: bootstrap
}).$mount('#app')
