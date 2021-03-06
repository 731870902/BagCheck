import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import qs from 'qs'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import utils from './utils/position'
import MyBottom from './components/MyBottom.vue'

Vue.use(mintUI)
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.prototype.qs = qs
Vue.prototype.moment = moment;
Vue.prototype.utils = utils;

Vue.component("my-bottom",MyBottom)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
