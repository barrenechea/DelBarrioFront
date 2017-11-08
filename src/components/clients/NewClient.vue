<template>
  <div class="container">
    <h3><br>Registro</h3>
   <div class="form-group" >

      <div class="row center">
        <div class="input-field col s12">
            <i class="material-icons large">account_circle</i>
        </div>
      </div>

      <!--Nombre-->
      <div class="row">
        <div class="input-field col s12">
          <input v-model="client.nombre" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="nombre" name="nombre" type="text" placeholder="Juan Antonio">
          <span v-show="errors.has('nombre')" class="help is-danger">{{ errors.first('nombre') }}</span>
          <label for="nombre">Nombre</label>
        </div>
      </div>

      <!--Apellidos-->
       <div class="row">
        <div class="input-field col s12">
          <input v-model="client.apellido_paterno" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="Apellido Paterno" name="apellido_paterno" type="text" placeholder="Pérez">
          <span v-show="errors.has('apellido_paterno')" class="help is-danger">{{ errors.first('apellido_paterno') }}</span>
          <label for="apellido">Apellido paterno</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input v-model="client.apellido_materno" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="apellido_materno" name="apellido_materno" type="text" placeholder="Gonzalez">
          <span v-show="errors.has('apellido_materno')" class="help is-danger">{{ errors.first('apellido_materno') }}</span>
          <label for="apellido_materno">Apellido materno</label>
        </div>
      </div>

      <!--Rut-->
      <div class="row">
        <div class="input-field col s12">
          <input v-validate data-vv-rules="required" data-vv-as="rut" name="rut" type="text" placeholder="12345678-9" v-model="client.rut">
          <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
          <label for="Rut">Rut</label>
        </div>
      </div>
      
    <!--Email-->
     <div class="column is-12">
          <label class="label" for="email">Email</label>
          <p :class="{ 'control': true }">
              <input v-model="client.email" v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text" placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
              
          </p>
      </div>

    <!--Fecha de nacimiento-->
     <div class="row">
       
        <div class="input-field col s12">
          <label for="birthdate">Fecha de nacimiento</label><br><!--WTF, conflicto con type date -->
          <input v-model="client.birthdate"  data-vv-as="Fecha de nacimiento" name="birthdate"  type="date" class="form-control">
          <span v-show="errors.has('birthdate')">{{ errors.first('birthdate') }}</span>
        </div>
      </div>

    <!--Contraseña-->
     <div class="row">
        <div class="input-field col s12">
        <input v-model="client.password" v-validate data-vv-rules="required|min:4" data-vv-as="Contraseña" name="Contraseña"  type="password" class="form-control">
          <label for="contraseña">Contraseña</label>
          <span v-show="errors.has('Contraseña')">{{ errors.first('Contraseña') }}</span>
        </div>
      </div>
      
    <!--Repetir contraseña-->
      <div class="row">
        <div class="input-field col s12">
            <p :class="{ 'control': true }">
            <input v-model="client.confirm_password" v-validate data-vv-rules="required|confirmed:Contraseña" name="Confirmar contraseña" type="password" class="form-control">
            <span v-show="errors.has('Confirmar contraseña')">{{ errors.first('Confirmar contraseña') }}</span>
            <label for="Confirmar contraseña">Confirmar contraseña</label>

          </p>
        </div>
      </div>

      <div class="row">
        <button class="waves-effect waves-light btn" v-on:click="addClient">Publicar</button>
      </div>

    </div>
  </div>
</template>

<script>
  import clientscontroller from '@/components/clients/controller/clientscontroller.js'
  export default {
    name: 'NewClient',
    data () {
      return {
        client: []
      }
    },
    methods: {
      // Llamar función addPost en controller
      addClient (event) {
        event.preventDefault()
        clientscontroller.addClient(this)
      }
    }
  }
</script>

<style>
/*
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