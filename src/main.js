import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://192.168.1.2:8080/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
