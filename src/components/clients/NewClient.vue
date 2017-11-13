<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1 >Registro</h1>

          <form @submit.prevent="validateBeforeSubmit">
              <div class="column is-12"> <!-- Nombres -->
                  <label class="label">Nombres</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Nombre" @change="validarCampo" name="nombres" v-model="client.nombres" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('nombres') }" type="text" placeholder="Juan Andrés">
                      <i v-show="errors.has('nombres')" class="fa fa-warning"></i>
                      <span v-show="errors.has('nombres')" class="help is-danger">{{ errors.first('nombres') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- APELLIDO PATERNO -->
                  <label class="label">Apellido paterno</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Apellido paterno" @change="validarCampo" name="apellido_pat" v-model="client.apellido_pat" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('apellido_pat') }" type="text" placeholder="Pérez">
                      <i v-show="errors.has('apellido_pat')" class="fa fa-warning"></i>
                      <span v-show="errors.has('apellido_pat')" class="help is-danger">{{ errors.first('apellido_pat') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- APELLIDO MATERNO -->
                  <label class="label">Apellido materno</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Apellido materno"  @change="validarCampo" name="apellido_mat" v-model="client.apellido_mat" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('apellido_mat') }" type="text" placeholder="González">
                      <i v-show="errors.has('apellido_mat')" class="fa fa-warning"></i>
                      <span v-show="errors.has('apellido_mat')" class="help is-danger">{{ errors.first('apellido_mat') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- RUT -->
                  <label class="label">RUT</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="RUT" @change="validarCampo" name="rut" v-model="client.RUT_USUARIO" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('rut') }" type="text" placeholder="12345678-2">
                      <i v-show="errors.has('rut')" class="fa fa-warning"></i>
                      <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
                      <span> {{error.rut}}</span>

                  </p>
              </div>
              <div class="column is-12"> <!-- Email -->
                  <label class="label">Correo</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Email"  @select="validarCampo" name="email" v-model="client.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="correo@ejemplo.cl">
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Fecha de nacimiento -->
                  <label class="label">Fecha de nacimiento</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Fecha de nacimiento"  name="birthdate" v-model="client.FECH_FECHA_NACIMIENTO" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('birthdate') }" type="date" >
                      <i v-show="errors.has('birthdate')" class="fa fa-warning"></i>
                      <span v-show="errors.has('birthdate')" class="help is-danger">{{ errors.first('birthdate') }}</span>
                  </p>
              </div>

              <div class="column is-12"> <!-- Contraseña -->
                  <label class="label">Contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Contraseña"  @select="validarCampo" name="contrasena" v-model="client.password" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('contrasena') }" type="password" placeholder="******">
                      <i v-show="errors.has('contrasena')" class="fa fa-warning"></i>
                      <span v-show="errors.has('contrasena')" class="help is-danger">{{ errors.first('contrasena') }}</span>
                  </p>
              </div>

              <div class="column is-12"> <!-- Repetir Contraseña -->
                  <label class="label">Repetir contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Repetir contraseña"  @select="validarCampo" name="repitecontrasena" v-model="client.repitepassword" v-validate="'required|confirmed:contrasena'" :class="{'input': true, 'is-danger': errors.has('repitecontrasena') }" type="password" placeholder="******">
                      <i v-show="errors.has('repitecontrasena')" class="fa fa-warning"></i>
                      <span v-show="errors.has('repitecontrasena')" class="help is-danger">{{ errors.first('repitecontrasena') }}</span>
                  </p>
              </div>

              <!-- Botón -->
              <div class="column is-12">
                  <p class="control">
                    <button  class="button is-primary"  type="submit" >Agegar</button>
                  </p>
              </div>
          </form>

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
      },
      validarCampo (event) {
        event.preventDefault()
        clientscontroller.validar(this)
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.addClient(event)
          }
        })
      }
    }
  }
</script>
