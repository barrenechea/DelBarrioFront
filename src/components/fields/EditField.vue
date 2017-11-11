<template>
  <div>
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar Rubro</h1>
        <div>
          <label>Nombre</label>
          <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="field.NOMB_RUBRO"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
          <button class="btn btn-success" v-on:click="editField">Actualizar</button>
        </div>
        <div>
          <span v-show='error'>Error</span>
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
        error: false,
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
      }
    }
  }
</script>