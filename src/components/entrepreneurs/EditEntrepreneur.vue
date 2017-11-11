<template>
  <div class="container">
    <h3><br>Nuevo Emprendedor</h3>
    <form class="form-group" name="form1" id="form1" >

      <div class="row center">
        <div class="input-field col s12">
            <i class="material-icons large">account_circle</i>
        </div>
      </div>
      
      <!--Descripciòn de Emprendedor-->
       <div class="row">
        <div class="input-field col s12">
          <input v-validate data-vv-rules="required|alpha_spaces" data-vv-as="Descripción del Empredendor" name="desc_empresa" v-model="emp.DESC_EMPRENDEDOR"  type="text" placeholder="Pequeña descripción del emprendimientoz">
          <span v-show="errors.has('desc_empresa')" class="help is-danger">{{ errors.first('desc_empresa') }}</span>
          <label for="desc_empresa">Descripción del Emprendedor</label>
        </div>
      </div>

    <!--Email-->
     <div class="column is-12">
       
          <p :class="{ 'control': true }">
              <input v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text"  v-model="emp.usuario.EMAIL_USUARIO" placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
            <label class="label" for="email">Email</label>
      </div>


    <!-- Clave Emprendedor-->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Clave secreta" name="Clave_secreta" v-validate data-vv-rules="required|min:4" data-vv-as="Clave emprendedor" type="text" v-model="emp.DESC_CLAVE_MUNICIPALIDAD" id="Clave_secreta" />
          <label for="Clave_secreta">Clave emprendedor</label>
           <span v-show="errors.has('Clave_secreta')">{{ errors.first('Clave_secreta') }}</span>
        </div>
      </div>

     <!-- Nombre de Fantasía-->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Opcional" name="nombre_fantasia" v-validate data-vv-rules="min:0|max:255" data-vv-as="Nombre de fantasía " type="text" v-model="emp.DESC_NOMBRE_FANTASIA" id="nombre_fantasia" />
          <label for="nombre_fantasia">Nombre Fantasía</label>
           <span v-show="errors.has('nombre_fantasia')">{{ errors.first('nombre_fantasia') }}</span>
        </div>
      </div>


       <!-- Nombre de empresa -->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Opcional" name="nombre_empresa" v-validate data-vv-rules="min:0|max:255" data-vv-as="Nombre de la empresa" type="text" v-model="emp.DESC_NOMBRE_EMPRESA" id="nombre_empresa" />
          <label for="nombre_empresa">Nombre Empresa</label>
           <span v-show="errors.has('nombre_empresa')">{{ errors.first('nombre_empresa') }}</span>
        </div>
      </div>

      <!--Rubros-->
      <div class="select">
        Rubro <br>
      <v-select  v-model="emp.rubro"  v-validate data-vv-rules="required" data-vv-as="Rubro" name="rubro" id="rubro" placeholder="(Seleccionar)" :options="['Rubro 1','Rubro 2']">
      </v-select>
      <span v-show="errors.has('rubro')">{{ errors.first('rubro') }}</span>
      </div>
     <br> 
     <!-- Botón -->
      <div class="row">
        <button class="waves-effect waves-light btn" v-on:click="updateEntrepreneur" >Ingresar</button>
      </div>

    </form>
  </div>
</template>


<script>
import entrepreneurscontroller from '@/components/entrepreneurs/controller/entrepreneurscontroller.js'

export default {
  name: 'EditEntrepreneur',
  data () {
    return {
      emp: {},
      entrepreneurs: {},
      error: false,
      success: false
    }
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