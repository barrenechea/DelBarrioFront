<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Multiselect from 'vue-multiselect'
  import VueSession from 'vue-session'

  Vue.component('v-select', vSelect)
  Vue.component('multiselect', Multiselect)

  Vue.use(VueSession)
  export default {
    name: 'app'
  }
</script>