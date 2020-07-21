import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueFeather from 'vue-feather';

Vue.use(VueMaterial)
Vue.use(VueFeather);

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
