import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// @require '~vuetify/src/stylus/settings/_theme'

Vue.use(Vuetify, {
  theme: {
    primary: '#4F9BE7',
    secondary: '#424242',
    accent: '#4F9BE7',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  darkTheme: {
  	background : '#4F9BE7'
  }
})
