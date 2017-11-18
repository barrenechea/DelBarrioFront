<template>
  <div class="container">
    <h3>Nuevo Administrador</h3>
          <form @submit.prevent="validateBeforeSubmit">
              <div class="column is-12"> <!-- RUT -->
                  <label>RUT</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="RUT" @change="validarCampo" name="rut" v-model="adm.RUT_USUARIO" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('rut') }" type="text" placeholder="12345678-2">
                      <i v-show="errors.has('rut')" class="fa fa-warning"></i>
                      <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
                      <span> {{error.rut}}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Email -->
                  <label>Correo</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Email"  @select="validarCampo" name="email" v-model="adm.EMAIL_USUARIO" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="correo@ejemplo.cl">
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- CLAVE Emprendedor -->
                  <label>Contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Clave secreta"  @select="validarCampo" name="clave_secreta" v-model="adm.clave" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('clave_secreta') }" type="text" placeholder="">
                      <i v-show="errors.has('clave_secreta')" class="fa fa-warning"></i>
                      <span v-show="errors.has('clave_secreta')" class="help is-danger">{{ errors.first('clave_secreta') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- CLAVE Emprendedor -->
                  <label>Repetir contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Repite clave"  @select="validarCampo" name="repite_clave" v-model="adm.repite_clave" v-validate="'required|confirmed:clave_secreta'" :class="{'input': true, 'is-danger': errors.has('repite_clave') }" type="text" placeholder="">
                      <i v-show="errors.has('repite_clave')" class="fa fa-warning"></i>
                      <span v-show="errors.has('repite_clave')" class="help is-danger">{{ errors.first('repite_clave') }}</span>
                  </p>
              </div>
              
          <br><br>
              <!-- Botón -->
              <div class="column is-12">
                  <p class="control">
                    <button  class="button is-primary"  type="submit" >Agregar nuevo Administrador</button>
                  </p>
              </div>
          </form>

      <!-- Aviso de éxito --> 
      <div>
          <span v-show='success'><br>Administrador exitosamente!</span>
      </div>

    </form>
  </div>
</template>
<script>
  import VeeValidate from 'vee-validate'
  import administratorscontroller from '@/components/administrators/controller/administratorscontroller.js'
  // import validarut from '@/components/validator/validarut.js'
  // import validarRut from '@/components/entrepreneurs/validarRut.js'

  export default {
    name: 'NewAdmin',
    data () {
      return {
        adm: {},
        error: [],
        success: false
      }
    },
    components: {
      VeeValidate
    },
    methods: {
      // Llamar función addPost en controller
      addAdmin (event) {
        event.preventDefault()
        administratorscontroller.addAdmin(this)
      },
      validarCampo (event) {
        event.preventDefault()
        administratorscontroller.validar(this)
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.addAdmin(event)
          }
        })
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
