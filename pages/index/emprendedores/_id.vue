<template>
  <section class="container-fluid">
    <div class="container">
      <div class="row margin-top-sec">
          <gmap-map
            :center="geocode.geometry.location"
            :zoom="15"
            style="width:500px; height:300px">
            <gmap-marker
            :position="geocode.geometry.location"
            @click="center=geocode.geometry.location">
            </gmap-marker>
          </gmap-map>
      </div>
    </div><!-- /container -->
  </section><!-- /El Producto -->
</template>

<script>
import locationController from '~/controllers/location'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCpibWdwMPOk18JLBCpaJj31xN768Z870U'
  }
})

export default {
  asyncData ({ app, params }) {
    return locationController.GETLocation(app, 'antonio varas 666')
  },
  data () {
    return {
      geocode: {}
    }
  },
  head () {
    return {
      title: 'Emprendedor - Del Barrio', // this.emp.NOMB_FANTASIA + ' - Del Barrio',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
