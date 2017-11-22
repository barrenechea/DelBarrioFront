<template>
  <section class="container-fluid">
    <div class="container">
      <div class="row margin-top-sec">
        <div>
          <gmap-map
            :center="geocode ? geocode.geometry.location : { lat: -33.4488897, lng: -70.6692655 }"
            :zoom="15"
            style="width:500px; height:300px">
            <gmap-marker
            :position="geocode ? geocode.geometry.location : { lat: -33.4488897, lng: -70.6692655 }">
            </gmap-marker>
            <gmap-info-window v-if="geocode" :position="geocode ? geocode.geometry.location : { lat: -33.4488897, lng: -70.6692655 }">
              {{ geocode.formatted_address }}
            </gmap-info-window>
          </gmap-map>
        </div>
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
    return locationController.GETLocation(app, 'infante 1415')
  },
  data () {
    return {
      geocode: undefined
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
