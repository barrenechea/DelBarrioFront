<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Registro</h1><br>
      <!--Nombre-->
      <div class="row">
        <div class="input-field col s12">
          <input v-model="client.NOMBRES" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="nombre" name="nombre" type="text" placeholder="Juan Antonio">
          <span v-show="errors.has('nombre')" class="help is-danger">{{ errors.first('nombre') }}</span>
          <label for="nombre">Nombre</label>
        </div>
      </div>

      <!--Apellidos-->
       <div class="row">
        <div class="input-field col s12">
          <input v-model="client.APELLIDO_PATERNO" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="Apellido Paterno" name="apellido_paterno" type="text" placeholder="Pérez">
          <span v-show="errors.has('apellido_paterno')" class="help is-danger">{{ errors.first('apellido_paterno') }}</span>
          <label for="apellido">Apellido paterno</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input v-model="client.APELLIDO_MATERNO" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="apellido_materno" name="apellido_materno" type="text" placeholder="Gonzalez">
          <span v-show="errors.has('apellido_materno')" class="help is-danger">{{ errors.first('apellido_materno') }}</span>
          <label for="apellido_materno">Apellido materno</label>
        </div>
      </div>

    <!--Email-->
     <div class="column is-12">
          <label class="label" for="email">Email</label>
          <p :class="{ 'control': true }">
              <input v-model="client.usuario.EMAIL_USUARIO" v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text" placeholder="Email">
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
              
          </p>
      </div>

    <!--Fecha de nacimiento-->
     <div class="row">
       
        <div class="input-field col s12">
          <label for="birthdate">Fecha de nacimiento</label><br>
          <input v-model="client.FECH_FECHA_NACIMIENTO" data-vv-as="Fecha de nacimiento" name="birthdate"  type="date" class="form-control">
          <span v-show="errors.has('birthdate')">{{ errors.first('birthdate') }}</span>
        </div>
      </div>


    <!--Contraseña-->
     <div class="row">
        <div class="input-field col s12">
        <input v-model="client.password_antigua" v-validate data-vv-rules="required|min:4" data-vv-as="Nueva contraseña" name="nueva_contraseña"  type="password" class="form-control">
          <label for="nueva_contraseña">Contraseña</label>
          <span v-show="errors.has('Contraseña')">{{ errors.first('Contraseña') }}</span>
        </div>
      </div>

    <!--Nueva Contraseña-->
     <div class="row">
        <div class="input-field col s12">
        <input v-model="client.password_nueva" v-validate data-vv-rules="min:4" data-vv-as="Nueva contraseña" name="nueva contraseña"  type="password" >
          <label for="nueva contraseña">Contraseña</label>
          <span v-show="errors.has('Nueva contraseña')">{{ errors.first('Nueva contraseña') }}</span>
        </div>
      </div>
      
    <!--Repetir contraseña-->
      <div class="row">
        <div class="input-field col s12">
            <p :class="{ 'control': true }">
            <label for="Confirmar nueva contraseña">Confirmar contraseña</label>
            <input v-model="client.confirm_password_nueva" v-validate data-vv-rules="required|confirmed:Nueva contraseña" name="Confirmar nueva contraseña" type="password">
            <span v-show="errors.has('Confirmar nueva contraseña')">{{ errors.first('Confirmar nueva contraseña') }}</span>
          </p>
        </div>
      </div>
      <hr>
      <div>
        <button class="btn btn-success" v-on:click="EditClient">Actualizar datos</button>
      </div>
      <hr>
          <label style = "text-decoration: underline; color: blue" @click="CambiarEstado">Deshabilitar cuenta</label>
          <div v-if="mostrar"> 
            <br>
            <input type="radio" id="one" value="One" v-model="inhab.motivo">
              <label for="one">Motivo 1</label>
              <br>
              <input type="radio" id="one" value="Two" v-model="inhab.motivo">
              <label for="two">Motivo 2</label>
              <br>
              <input type="radio" id="one" value="Three" v-model="inhab.motivo">
              <label for="two">Motivo 2</label>
              <br>
              <input type="radio" id="one" value="Four" v-model="inhab.motivo">
              <label for="two">Motivo 2</label>
              <br>
              <input type="radio" id="one" value="Otro" v-model="inhab.motivo">
              <label for="two">Otro </label><br>
              <label> {{client.NOMBRES}}, comentanos porqué tomas esta decisión :( </label>
              <br><textarea rows="4" cols="75%" name = 'inhab.comentario' v-model="inhab.comentario">
              </textarea>
              <br>
              <label style = "font-size: 70%"> <b>Puedes volver a habilitar tu cuenta iniciando sesión y siguiendo las instrucciones.</b> </label>
              <br>
              <button class="btn btn-danger" v-on:click="DeshabilitarCuenta(client.IDEN_USUARIO, false)">Deshabilitar Cuenta </button> <!---->
              <br>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import clientscontroller from '@/components/clients/controller/clientscontroller.js'
  import userscontroller from '@/components/users/controller/userscontroller.js'

  export default {
    name: 'EditClient',
    data () {
      return {
        client: [],
        mostrar: false,
        inhab: []
      }
    },
    mounted () {
      clientscontroller.getClient(this)
    },
    methods: {
      // Llamar función addPost en controller
      EditClient (event) {
        event.preventDefault()
        clientscontroller.EditClient(this)
      },
      CambiarEstado (event) {
        this.mostrar = !this.mostrar
      },
      DeshabilitarCuenta: function (id, state) {
        event.preventDefault()
        userscontroller.DeshabilitarCuenta(id, state, this)
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