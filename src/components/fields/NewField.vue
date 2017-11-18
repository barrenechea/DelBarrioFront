<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nuevo Rubro</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:50|alpha_spaces" data-vv-as="nombre" name="name" type="text" v-model="field.NOMB_RUBRO"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div>
            <button class="btn btn-success">Agregar</button>
          </div>
        </form>
        <div>
          <span v-show='error.length>0'>{{error}}</span>
          <span v-show='success'>Agregado exitosamente!</span>
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
      error: '',
      success: false
    }
  },
  methods: {
    // Llamar función addCategory en controller
    addField (event) {
      event.preventDefault()
      fieldcontroller.addField(this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          fieldcontroller.addField(this)
        }
      })
    }
  }
}
</script>
