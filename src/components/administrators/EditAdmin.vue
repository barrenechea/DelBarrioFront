<template>
  <div class="container">
    <h3>Editar Administrador</h3>
          <form @submit.prevent="validateBeforeSubmit">
              <div class="column is-12"> <!-- Email -->
                  <label>Correo</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Email"  @select="validarCampo" name="email" v-model="adm.EMAIL_USUARIO" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="correo@ejemplo.cl">
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                       <div>
                          <span v-show='existeerror'>El correo se encuentra registrado</span>
                      </div>
                  </p>
              </div>
              <div class="column is-12"> <!-- CLAVE Emprendedor -->
                  
                  <label>Nueva contraseña (opcional)</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Clave secreta"  @select="validarCampo" name="clave_secreta" v-model="adm.clave" v-validate="'min:6'" :class="{'input': true, 'is-danger': errors.has('clave_secreta') }" type="text" placeholder="">
                      <i v-show="errors.has('clave_secreta')" class="fa fa-warning"></i>
                      <span v-show="errors.has('clave_secreta')" class="help is-danger">{{ errors.first('clave_secreta') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- CLAVE Emprendedor -->
                  <label>Repetir contraseña</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Repite clave"  @select="validarCampo" name="repite_clave" v-model="adm.repite_clave" v-validate="'confirmed:clave_secreta'" :class="{'input': true, 'is-danger': errors.has('repite_clave') }" type="text" placeholder="">
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



      <!-- Aviso validación --> 
            <!-- Aviso de éxito --> 
      <div>
          <span v-show='success'><br>Editado exitosamente!</span>
      </div>



    </form>
  </div>
</template>

<script>
import administratorscontroller from '@/components/administrators/controller/administratorscontroller.js'

export default {
  name: 'EditAdmin',
  data () {
    return {
      adm: {},
      error: [],
      success: false,
      existeerror: false,
      errormail: ''
    }
  },
  mounted () {
    administratorscontroller.getAdmin(this)
  },
  methods: {
    updateAdmin (event) {
      event.preventDefault()
      administratorscontroller.updateAdmin(this)
    },

    validarCampo (event) {
      event.preventDefault()
      administratorscontroller.validar(this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.updateAdmin(event)
        }
      })
    }
  }
}
</script>