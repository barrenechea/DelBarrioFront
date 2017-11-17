<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Multiselect from 'vue-multiselect'

  Vue.component('v-select', vSelect)
  Vue.component('multiselect', Multiselect)

  export default {
    name: 'app'
  }
</script>