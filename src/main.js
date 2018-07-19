import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import Helpers from 'muse-ui/lib/Helpers'
import 'muse-ui/dist/muse-ui.css'
import './assets/material-font/material-icons.css'
import './assets/iconfont/iconfont.css'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import Progress from 'muse-ui-progress'

Progress.config({
  zIndex: 2000,
  top: 0,
  size: 2.8
})

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(Helpers)
Vue.use(Progress)

new Vue({
  el: '#app',
  router,
  components: { App }
})
