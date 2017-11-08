<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nuevo Rubro</h1>
        <div>
          <label>Nombre</label>
          <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="field.NOMB_RUBRO"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
          <button class="btn btn-success" v-on:click="addField">Agregar</button>
        </div>
        <div>
          <span v-show='error'>{{error}}}</span>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import fieldcontroller from '@/components/fields/controller/fieldscontroller.js'
export default {
  name: 'NewField',
  data () {
    return {
      field: {},
      error: false
    }
  },
  methods: {
    // Llamar función addCategory en controller
    addField (event) {
      event.preventDefault()
      fieldcontroller.addField(this)
    }
  }
}
</script>
