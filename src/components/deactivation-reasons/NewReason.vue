<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva razón de deshabilitación de cuenta</h1>
        <div>
          <label>Nombre</label>
          <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="reason.NOMB_MOTIVO_DESHABILITACION"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="addReason">Agregar</button>
        </div>
        <div>
          <span v-show='error'>Error</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reasonscontroller from '@/components/deactivation-reasons/controller/deactivationreasoncontroller.js'
export default {
  name: 'NewDeactivationReason',
  data () {
    return {
      reason: {},
      error: false
    }
  },
  mounted () {
    reasonscontroller.listReasons(this)
  },
  methods: {
    addReason (event) {
      event.preventDefault()
      reasonscontroller.addReason(this)
    }
  }
}
</script>
