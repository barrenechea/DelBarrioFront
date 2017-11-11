<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1><br>Registro</h1>
          <!--Nombre-->
          <div>
                <label for="nombre">Nombre</label>
                <input v-model="client.nombres" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="nombre" name="nombre" type="text" placeholder="Juan Antonio">
                <span v-show="errors.has('nombre')" class="help is-danger">{{ errors.first('nombre') }}</span>
          </div>

          <!--Apellidos-->
          <div>
                <label for="apellido">Apellido paterno</label>            
                <input v-model="client.apellido_paterno" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="Apellido Paterno" name="apellido_paterno" type="text" placeholder="Pérez">
                <span v-show="errors.has('apellido_paterno')" class="help is-danger">{{ errors.first('apellido_paterno') }}</span>

          </div>
          <div >
                <label for="apellido_materno">Apellido materno</label>
                <input v-model="client.apellido_materno" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="apellido_materno" name="apellido_materno" type="text" placeholder="Gonzalez">
                <span v-show="errors.has('apellido_materno')" class="help is-danger">{{ errors.first('apellido_materno') }}</span>
          </div>

            <!--Rut-->
          <div>
                <label for="Rut">Rut</label>
                <input v-validate data-vv-rules="required" data-vv-as="rut" name="rut" type="text" placeholder="12345678-9" v-model="client.RUT_USUARIO">
                <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
          </div>

          <!--Email-->
          <div>
                <label class="label" for="email">Email</label>
                    <input v-model="client.email" v-validate data-vv-rules="required|email" data-vv-as="email" name="email" type="text" placeholder="Email">
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </div>

          <!--Fecha de nacimiento-->
          <div>
                <label for="birthdate">Fecha de nacimiento</label><br>
                <input v-model="client.birthdate" data-vv-as="Fecha de nacimiento" name="birthdate"  type="date">
                <span v-show="errors.has('birthdate')">{{ errors.first('birthdate') }}</span>
          </div>

          <!--Contraseña-->
          <div>
              <label for="contraseña">Contraseña</label>
              <input v-model="client.password" v-validate data-vv-rules="required|min:4" data-vv-as="Contraseña" name="Contraseña"  type="password" >
              <span v-show="errors.has('Contraseña')">{{ errors.first('Contraseña') }}</span>
          </div>
          
          <!--Repetir contraseña-->
          <div>
                <label for="Confirmar contraseña">Confirmar contraseña</label>
                <input v-model="client.confirm_password" v-validate data-vv-rules="confirmed:Contraseña" name="Confirmar contraseña" type="password">
                <span v-show="errors.has('Confirmar contraseña')">{{ errors.first('Confirmar contraseña') }}</span>
          </div>

          <!--Botón-->
          <div>
            <button class="btn btn-success" v-on:click="addClient">Agegar</button>
          </div>

          <div>
          <!--  <span v-show='error'>Error</span> -->
          </div>
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
        client: [],
        error: []
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
