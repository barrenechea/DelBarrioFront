<template>
  <div class="container">
    <h3><br>Nuevo Emprendedor</h3>
    <form class="form-group" name="form1" id="form1" >

      <div class="row center">
        <div class="input-field col s12">
            <i class="material-icons large">account_circle</i>
        </div>
      </div>
      
      <!--Nombre-->
      <div class="row">
        <div class="input-field col s12">
          <input v-validate data-vv-rules="required|alpha_spaces" data-vv-as="nombre" name="nombre" v-model="emp.nosmbres" type="text" placeholder="Juan Antonio">
          <span v-show="errors.has('nombre')" class="help is-danger">{{ errors.first('nombre') }}</span>
          <label for="nombre">Nombre</label>
        </div>
      </div>

  
      <!--Apellidos-->
       <div class="row">
        <div class="input-field col s12">
          <input v-validate data-vv-rules="required|alpha_spaces" data-vv-as="apellido" name="apellido" v-model="emp.apellido"  type="text" placeholder="Pérez Gonzalez">
          <span v-show="errors.has('apellido')" class="help is-danger">{{ errors.first('apellido') }}</span>
          <label for="apellido">Apellido</label>
        </div>
      </div>


      <!--Rut-->
      <div class="row">
        <div class="input-field col s12">
          <input name="rut" type="text" placeholder="12345678-9" v-model="emp.rut" oninput="checkRut(this)" >
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


<script>
import entrepreneurcontroller from '@/components/entrepreneurs/controller/entrepreneurcontroller.js'
export default {
  name: 'EditEntrepreneur',
  data () {
    return {
      emp: {},
      entrepreneurs: {},
      error: false
    }
  },
  mounted () {
    entrepreneurcontroller.listEntrepreneur(this)
  },
  methods: {
    // Llamar función addCategory en controller
    addEntrepreneur (event) {
      event.preventDefault()
      entrepreneurcontroller.editEntrepreneur(this)
    }
  }
}
</script>