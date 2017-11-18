<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nuevo Rubro</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:50|alpha_spaces" data-vv-as="nombre" name="name" type="text" v-model="workfield.NOMB_RUBRO"/>
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
import controller from '~/controllers/admin/workfields'

export default {
  data () {
    return {
      workfield: {},
      error: '',
      success: false
    }
  },
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          controller.POST(this)
        }
      })
    }
  }
}
</script>
