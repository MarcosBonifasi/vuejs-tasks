// import { createApp } from 'vue'
// import App from './App.vue'

// // Implement Bootstrap Vue
// import { BootstrapVue } from "bootstrap-vue"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// createApp(App).use(BootstrapVue).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
