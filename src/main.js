// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate, { Validator } from 'vee-validate'
import messagesEs from './components/validator/messages/es.js'
import attributesEs from './components/validator/attributes/es.js'

var vueRut = require('vue-rut')
Vue.use(vueRut)

Vue.config.productionTip = false
Validator.localize('es', messagesEs, attributesEs)
Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: {
    es: { messages: messagesEs, attributes: attributesEs }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    rut: ''
  }
})
