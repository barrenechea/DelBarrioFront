<template>
  <div>
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar Rubro</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:50|alpha_spaces" data-vv-as="nombre" name="name" type="text" v-model="field.NOMB_RUBRO"/>
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
  import fieldctrl from '@/components/fields/controller/fieldscontroller.js'
  export default {
    name: 'EditField',
    field: ['id'],
    data () {
      return {
        field: {},
        error: '',
        success: false
      }
    },
    mounted () {
      fieldctrl.getField(this)
    },
    methods: {
      editField (event) {
        event.preventDefault()
        fieldctrl.editField(this)
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            fieldctrl.editField(this)
          }
        })
      }
    }
  }
</script>
