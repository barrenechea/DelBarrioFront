<template>
  <div>
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar Rubro</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:50|alpha_spaces" data-vv-as="nombre" name="name" type="text" v-model="workfield.NOMB_RUBRO"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div>
            <button class="btn btn-success" v-on:click="editField">Actualizar</button>
          </div>
        </form>
        <div>
          <span v-show='error.length>0'>{{error}}</span>
          <span v-show='success'>Editado exitosamente!</span>
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
      error: '',
      success: false
    }
  },
  asyncData ({ params }) {
    return controller.GET(params.id)
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) controller.PUT(this)
      })
    }
  }
}
</script>
