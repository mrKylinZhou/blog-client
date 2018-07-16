import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/iconfont/material-icons.css'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import Progress from 'muse-ui-progress'
Progress.config({
  zIndex: 2000,
  top: 0,
  size: 2.8
})

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(Progress)

new Vue({
  el: '#app',
  router,
  components: { App }
})
