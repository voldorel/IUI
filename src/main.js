import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {store} from './store/store'
import Vuetify from 'vuetify'
require('./assets/fonts/flaticon/flaticon.css');

Vue.config.productionTip = false

new Vue({
	store,
  render: h => h(App)
}).$mount('#app')
