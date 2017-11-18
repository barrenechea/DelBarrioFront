<template>
  <div class="container">
    <h1><br>Editar Emprendedor</h1>
    <form class="form-group" name="form1" id="form1" >
      <!--Descripciòn de Emprendedor-->
       <div>
          <label for="desc_empresa">Descripción del Emprendedor</label><br>
          <input v-validate data-vv-rules="required" data-vv-as="Descripción del Empredendor" name="desc_empresa" v-model="emp.DESC_EMPRENDEDOR"  type="text" placeholder="Pequeña descripción del emprendimientoz">
          <span v-show="errors.has('desc_empresa')" class="help is-danger">{{ errors.first('desc_empresa') }}</span>

      </div>
    <br>

    <!--Email-->
     <div>
          <label for="email">Correo</label><br>
              <input v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text"  v-model="emp.EMAIL_USUARIO" placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </div>
    <br>


    <!-- Clave Emprendedor-->
      <div>
          <label for="Clave_secreta">Clave emprendedor</label><br>
          <input placeholder="Clave secreta" name="Clave_secreta" v-validate data-vv-rules="required|min:6" data-vv-as="Clave emprendedor" type="text" v-model="emp.DESC_CLAVE_MUNICIPALIDAD" id="Clave_secreta" />
           <span v-show="errors.has('Clave_secreta')">{{ errors.first('Clave_secreta') }}</span>
      </div>
    <br>
     <!-- Nombre de Fantasía-->
     <div>
          <label for="nombre_fantasia">Nombre Fantasía</label><br>
          <input placeholder="Opcional" name="nombre_fantasia" v-validate data-vv-rules="min:0|max:255" data-vv-as="Nombre de fantasía " type="text" v-model="emp.DESC_NOMBRE_FANTASIA" id="nombre_fantasia" />
           <span v-show="errors.has('nombre_fantasia')">{{ errors.first('nombre_fantasia') }}</span>
      </div>

    <br>

       <!-- Nombre de empresa -->
     <div>
          <label for="nombre_empresa">Nombre Empresa</label><br>
          <input placeholder="Opcional" name="nombre_empresa" v-validate data-vv-rules="min:0|max:255" data-vv-as="Nombre de la empresa" type="text" v-model="emp.DESC_NOMBRE_EMPRESA" id="nombre_empresa" />
           <span v-show="errors.has('nombre_empresa')">{{ errors.first('nombre_empresa') }}</span>
      </div>
    <br>

      <!--Rubros
      <div class="select">
        Rubro <br>
      <multi-select  v-model="emp.rubro"  v-validate data-vv-rules="required" data-vv-as="Rubro" name="rubro" id="rubro" placeholder="(Seleccionar)" :options="['Rubro 1','Rubro 2']">
      </multi-select>
      <span v-show="errors.has('rubro')">{{ errors.first('rubro') }}</span>
      </div>
     <br> -->
     <!-- Botón -->
      <div class="row">
        <button class="waves-effect waves-light btn" v-on:click="updateEntrepreneur" >Actualizar</button>
      </div>
      <!-- Aviso validación --> 
        <span v-show='success'><br>Editado exitosamente!</span>
    </form>
  </div>
</template>

<script>
import entrepreneurscontroller from '@/components/entrepreneurs/controller/entrepreneurscontroller.js'
import VeeValidate from 'vee-validate'
import Multiselect from 'vue-multiselect'

export default {
  name: 'EditEntrepreneur',
  data () {
    return {
      emp: {},
      entrepreneurs: {},
      mensaje: {},
      success: false
    }
  },
  components: {
    VeeValidate,
    Multiselect
  },
  mounted () {
    entrepreneurscontroller.listEntrepreneurs(this)
    entrepreneurscontroller.getEntrepreneur(this)
  },
  methods: {
    updateEntrepreneur (event) {
      event.preventDefault()
      entrepreneurscontroller.updateEntrepreneur(this)
    }
  }
}
</script>