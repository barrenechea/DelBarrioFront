<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva razón de deshabilitación de cuenta</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:100" data-vv-as="nombre" name="name" type="text" v-model="denouncereason.NOMB_MOTIVO_DENUNCIA"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div>
            <button class="btn btn-success">Agregar</button>
          </div>
        </form>
        <div v-if='message'>
          <span>{{message}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/admin/denouncereasons'

export default {
  data () {
    return {
      denouncereason: {},
      message: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) controller.POST(this)
      })
    }
  }
}
</script>
