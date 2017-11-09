<script type="text/javascriptxD" src="../validator/validarut.js"> </script>
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
          <input v-validate data-vv-rules="required|alpha_spaces" data-vv-as="Descripción del Empredendor" name="desc_empresa" v-model="emp.desc_empresa"  type="text" placeholder="Pequeña descripción del emprendimientoz">
          <span v-show="errors.has('desc_empresa')" class="help is-danger">{{ errors.first('desc_empresa') }}</span>
          <label for="desc_empresa">Descripción del Emprendedor</label>
        </div>
      </div>


      <!--Rut-->
      <div class="row">
        <div class="input-field col s12">
          <input name="rut" type="text" placeholder="12345678-9" v-model="emp.rut" >
          <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
          <label for="Rut">Rut</label>
        </div>
      </div>
      
    <!--Email-->
     <div class="column is-12">
          <label class="label" for="email">Email</label>
          <p :class="{ 'control': true }">
              <input v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text"  v-model="emp.email" placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
      </div>


    <!-- Clave Emprendedor-->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Clave secreta" name="Clave_secreta" v-validate data-vv-rules="required|min:4" data-vv-as="Clave emprendedor" type="text" v-model="emp.clave" id="Clave_secreta" />
          <label for="Clave_secreta">Clave emprendedor</label>
           <span v-show="errors.has('Clave_secreta')">{{ errors.first('Clave_secreta') }}</span>
        </div>
      </div>

     <!-- Nombre de Fantasía-->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Opcional" name="nombre_fantasia" v-validate data-vv-rules="min:0|max:255" data-vv-as="Nombre de fantasía " type="text" v-model="emp.nom_fantasia" id="nombre_fantasia" />
          <label for="nombre_fantasia">Nombre Fantasía</label>
           <span v-show="errors.has('nombre_fantasia')">{{ errors.first('nombre_fantasia') }}</span>
        </div>
      </div>


       <!-- Nombre de empresa -->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Opcional" name="nombre_empresa" v-validate data-vv-rules="min:0|max:255" data-vv-as="Nombre de la empresa" type="text" v-model="emp.nom_empresa" id="nombre_empresa" />
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
        <button class="waves-effect waves-light btn" v-on:click="addEntrepreneur" >Ingresar</button>
      </div>

    </form>
  </div>
</template>
<script src="./validarRUT.js"></script>
<script>
  import entrepreneurcontroller from '@/components/entrepreneurs/controller/entrepreneurcontroller.js'
  // import validarut from '@/components/validator/validarut.js'
  // import validarRut from '@/components/entrepreneurs/validarRut.js'
  export default {
    name: 'NewEntrepreneur',
    data () {
      return {
        emp: {},
        rubros: []
      }
    },
    methods: {
      // Llamar función addPost en controller
      addEntrepreneur (event) {
        event.preventDefault()
        entrepreneurcontroller.addEntrepreneur(this)
      }
      /* validaRut (event) {
        validarut.Rut(this.emp.rut)
      } */
    }
  }
</script>

<style>/*
  .btn {
    background-color: #372d57;
  }
  .btn:hover {
    background-color: #3c4c78;
  }
  .btn:focus {
    background-color: #484456;
  }
  .input-field input[type=text]:focus + label {
    color: #888 !important;
  }
  .input-field input[type=text]:focus {
    border-bottom: 1px solid #888 !important;
    box-shadow: 0 1px 0 0 #888 !important;
  }
*/

</style>