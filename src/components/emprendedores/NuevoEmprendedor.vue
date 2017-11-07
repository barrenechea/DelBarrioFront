<template>
  <div class="container">
    <h3><br>Nuevo Emprendedor</h3>
    <div class="form-group" >

      <div class="row center">
        <div class="input-field col s12">
            <i class="material-icons large">account_circle</i>
        </div>
      </div>
      
      <!--Nombre-->
      <div class="row">
        <div class="input-field col s12">
          <input v-validate data-vv-rules="required|alpha_spaces" data-vv-as="nombre" name="nombre" type="text" placeholder="Juan Antonio">
          <span v-show="errors.has('nombre')" class="help is-danger">{{ errors.first('nombre') }}</span>
          <label for="nombre">Nombre</label>
        </div>
      </div>

  
      <!--Apellidos-->
       <div class="row">
        <div class="input-field col s12">
          <input v-validate data-vv-rules="required|alpha_spaces" data-vv-as="apellido" name="apellido" type="text" placeholder="Pérez Gonzalez">
          <span v-show="errors.has('apellido')" class="help is-danger">{{ errors.first('apellido') }}</span>
          <label for="apellido">Apellido</label>
        </div>
      </div>


      <!--Rut-->
      <div class="row">
        <div class="input-field col s12">
          <input v-rut v-validate data-vv-rules="required" data-vv-as="rut" name="rut" type="text" placeholder="12345678-9" v-model="rut">
          <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
          <label for="Rut">Rut</label>
        </div>
      </div>
      
    <!--Email-->
     <div class="column is-12">
          <label class="label" for="email">Email</label>
          <p :class="{ 'control': true }">
              <input v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text" placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
      </div>


    <!-- Clave Emprendedor-->
     <div class="row">
        <div class="input-field col s12">
          <input placeholder="Clave secreta" name="Clave_secreta" v-validate data-vv-rules="required|min:4" data-vv-as="Clave emprendedor" type="text" v-model="post.clave" id="Clave_secreta" />
          <label for="Clave_secreta">Clave emprendedor</label>
           <span v-show="errors.has('Clave_secreta')">{{ errors.first('Clave_secreta') }}</span>
        </div>
      </div>

      <!--Rubros-->
      <div class="select">
        Rubro <br>
      <v-select  v-validate data-vv-rules="required" data-vv-as="Rubro" name="rubro" id="rubro" placeholder="(Seleccionar)" :options="['Rubro 1','Rubro 2']">
      </v-select>
      <span v-show="errors.has('rubro')">{{ errors.first('rubro') }}</span>
      </div>
     <br> 
    <!-- FALTA VALIDAR QUE SE HAYA SELECCIONADO EL SELECT.. LO QUE SALE AHI NO FUNCIONA U w U  -->

     <!-- Botón -->
      <div class="row">
        <button class="waves-effect waves-light btn" v-on:click="addPost">Ingresar</button>
      </div>

    </div>
  </div>
</template>

<script>
  import postcontroller from '@/components/demo-posts/controller/postcontroller.js'
  export default {
    name: 'demo-newposts',
    data () {
      return {
        post: {},
        rut: null
      }
    },
    methods: {
      // Llamar función addPost en controller
      addPost (event) {
        event.preventDefault()
        postcontroller.addPost(this)
      }
    }
  }
</script>

<style>
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


</style>