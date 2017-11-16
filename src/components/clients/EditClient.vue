<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Registro</h1><br>
        <form @submit.prevent="validateBeforeSubmit">
              <div class="column is-12"> <!-- Nombres -->
                  <label class="label">Apellido paterno</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Nombre" name="nombres" v-model="client.NOMBRES" v-validate="'required|alpha_spaces|max:255'" :class="{'input': true, 'is-danger': errors.has('nombres') }" type="text" placeholder="Juan Andrés">
                      <i v-show="errors.has('nombres')" class="fa fa-warning"></i>
                      <span v-show="errors.has('nombres')" class="help is-danger">{{ errors.first('nombres') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- APELLIDO PATERNO -->
                  <label class="label">Apellido paterno</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Apellido paterno" name="apellido_pat" v-model="client.APELLIDO_PATERNO" v-validate="'required|alpha_spaces|max:255q'" :class="{'input': true, 'is-danger': errors.has('apellido_pat') }" type="text" placeholder="Pérez">
                      <i v-show="errors.has('apellido_pat')" class="fa fa-warning"></i>
                      <span v-show="errors.has('apellido_pat')" class="help is-danger">{{ errors.first('apellido_pat') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- APELLIDO MATERNO -->
                  <label class="label">Apellido materno</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Apellido materno"  name="apellido_mat" v-model="client.APELLIDO_MATERNO" v-validate="'required|alpha_spaces|max:255'" :class="{'input': true, 'is-danger': errors.has('apellido_mat') }" type="text" placeholder="González">
                      <i v-show="errors.has('apellido_mat')" class="fa fa-warning"></i>
                      <span v-show="errors.has('apellido_mat')" class="help is-danger">{{ errors.first('apellido_mat') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Email -->
                  <label class="label">Correo</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Email"  name="email" v-model="client.EMAIL_USUARIO" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="correo@ejemplo.cl">
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Fecha de nacimiento -->
                <label>Fecha de nacimiento</label>
                <p class="control has-icon has-icon-right">
                    <datepicker 
                    language="es"
                    :format='format'
                    v-model="client.FECH_FECHA_NACIMIENTO"
                    v-validate data-vv-rules="required" :class="{'datepicker': true, 'is-danger': errors.has('birthdate') }" data-vv-as="Fecha de nacimiento"
                    data-vv-value-path="innerValue"
                    name= "birthdate"
                    ></datepicker>
                    <i v-show="errors.has('birthdate')" class="fa fa-warning"></i>
                    <span v-show="errors.has('birthdate')" class="help is-danger">{{ errors.first('birthdate') }}</span>
                </p>
              </div>

              <div class="column is-12"> <!-- Contraseña -->
                  <label class="label">Contraseña actual</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Contraseña"  name="contrasena" v-model="client.password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('contrasena') }" type="password" placeholder="******">
                      <i v-show="errors.has('contrasena')" class="fa fa-warning"></i>
                      <span v-show="errors.has('contrasena')" class="help is-danger">{{ errors.first('contrasena') }}</span>
                  </p>
              </div>

              <div class="column is-12"> <!-- Nueva Contraseña -->
                  <label class="label">Contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Contraseña"  name="nuevacontrasena" v-model="client.nuevapassword" v-validate="'min:6'" :class="{'input': true, 'is-danger': errors.has('nuevacontrasena') }" type="password" placeholder="******">
                      <i v-show="errors.has('nuevacontrasena')" class="fa fa-warning"></i>
                      <span v-show="errors.has('nuevacontrasena')" class="help is-danger">{{ errors.first('nuevacontrasena') }}</span>
                  </p>
              </div>

              <div class="column is-12"> <!-- Repetir Contraseña -->
                  <label class="label">Repetir contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Repetir contraseña"  name="repitecontrasena" v-model="client.repitepassword" v-validate="'confirmed:nuevacontrasena'" :class="{'input': true, 'is-danger': errors.has('repitecontrasena') }" type="password" placeholder="******">
                      <i v-show="errors.has('repitecontrasena')" class="fa fa-warning"></i>
                      <span v-show="errors.has('repitecontrasena')" class="help is-danger">{{ errors.first('repitecontrasena') }}</span>
                  </p>
              </div>
              <div style="display: none">
                 <p style="display: 'none'"> {{auth.password = client.password}} </p>
              </div>
                    
              <!-- Botón -->
              <div class="column is-12">
                  <p class="control">
                    <button  class="button is-primary"  type="submit" >Actualizar datos</button>
                  </p>
              </div>
          </form>
      <hr>
      <hr>
          <label style = "text-decoration: underline; color: blue" @click="CambiarEstado">Deshabilitar cuenta</label>
          <div v-if="mostrar"> 
            <br>
                <div v-for="reason in reasons">
                    <div v-show="reason.FLAG_VIGENTE">
                        <input type="radio" v-model="inhab.reason" :value="reason.IDEN_MOTIVO_DESHABILITACION"> {{ reason.NOMB_MOTIVO_DESHABILITACION }}
                    </div>
                </div>



            <br><br>
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
  import reasonscontroller from '@/components/deactivation-reasons/controller/deactivationreasoncontroller.js'
  import VeeValidate from 'vee-validate'
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'EditClient',
    data () {
      return {
        client: [],
        usuario: [],
        mostrar: false,
        inhab: [],
        auth: [],
        error: [],
        reason: {},
        format: 'dd MMM, yyyy' // ATENTO AQUI !!! //

      }
    },
    mounted () {
      clientscontroller.getClient(this)
      reasonscontroller.listReasons(this)
    },
    components: {
      VeeValidate,
      Datepicker
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
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.EditClient(event)
          }
        })
      }
    }
  }
</script>


<style>
</style>