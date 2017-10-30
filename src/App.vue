<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  Vue.use(BootstrapVue)
  export default {
    name: 'app'
  }
  Vue.component('v-select', vSelect)
</script>