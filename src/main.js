// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import messagesEs from '@/components/validator/messages/es.js'
import attributesEs from '@/components/validator/attributes/es.js'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  locale: 'en',
  dictionary: {
    en: {
      messages: messagesEs,
      attributes: attributesEs
    }
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
