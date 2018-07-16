import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/iconfont/material-icons.css'
Vue.config.productionTip = false

Vue.use(MuseUI)

new Vue({
  el: '#app',
  router,
  components: { App }
})
