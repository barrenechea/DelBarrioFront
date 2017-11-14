<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva razón de deshabilitación de cuenta</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:100" data-vv-as="nombre" name="name" type="text" v-model="reason.NOMB_MOTIVO_DESHABILITACION"/>
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
import reasonscontroller from '@/components/deactivation-reasons/controller/deactivationreasoncontroller.js'
export default {
  name: 'NewDeactivationReason',
  data () {
    return {
      reason: {},
      error: '',
      success: false
    }
  },
  mounted () {
    reasonscontroller.listReasons(this)
  },
  methods: {
    addReason (event) {
      event.preventDefault()
      reasonscontroller.addReason(this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          reasonscontroller.addReason(this)
        }
      })
    }
  }
}
</script>
