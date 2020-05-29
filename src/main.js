import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import Components from "src/components/index"
Components(Vue)

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
