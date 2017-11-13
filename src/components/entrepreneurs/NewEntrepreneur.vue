<script type="text/javascriptxD" src="../validator/validarut.js"> </script>
<template>
  <div class="container">
    <h3><br>Nuevo Emprendedor</h3>
          <form @submit.prevent="validateBeforeSubmit">
              <div class="column is-12"> <!-- Descripción de la empresa -->
                  <label class="label">Descripción de la empresa</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Descripción de la empresa" name="desc_empresa" v-model="emp.desc_empresa" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('desc_empresa') }" type="text" placeholder=" Dedicado a la comercialización de mermeladas desde 1970...">
                      <i v-show="errors.has('desc_empresa')" class="fa fa-warning"></i>
                      <span v-show="errors.has('desc_empresa')" class="help is-danger">{{ errors.first('desc_empresa') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- RUT -->
                  <label class="label">RUT</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="RUT" @change="validarCampo" name="rut" v-model="emp.RUT_USUARIO" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('rut') }" type="text" placeholder="12345678-2">
                      <i v-show="errors.has('rut')" class="fa fa-warning"></i>
                      <span v-show="errors.has('rut')" class="help is-danger">{{ errors.first('rut') }}</span>
                      <span> {{error.rut}}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Email -->
                  <label class="label">Correo</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Email"  @select="validarCampo" name="email" v-model="emp.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="correo@ejemplo.cl">
                      <i v-show="errors.has('email')" class="fa fa-warning"></i>
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- CLAVE Emprendedor -->
                  <label class="label">Clave</label>
                  <p class="control has-icon has-icon-right">
                      <input  data-vv-as="Clave secreta"  @select="validarCampo" name="clave_secreta" v-model="emp.clave" v-validate="'required|min:6'" :class="{'input': true, 'is-danger': errors.has('clave_secreta') }" type="text" placeholder="1p9W7yt5RE#">
                      <i v-show="errors.has('clave_secreta')" class="fa fa-warning"></i>
                      <span v-show="errors.has('clave_secreta')" class="help is-danger">{{ errors.first('clave_secreta') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Nombre de fantasía -->
                  <label class="label">Nombre de Fantasía</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Nombre de la empresa" name="nombre_fantasia" v-model="emp.nombre_fantasia" v-validate="''" :class="{'input': true, 'is-danger': errors.has('') }" type="text" placeholder="Opcional">
                      <i v-show="errors.has('')" class="fa fa-warning"></i>
                      <span v-show="errors.has('')" class="help is-danger">{{ errors.first('') }}</span>
                  </p>
              </div>
              <div class="column is-12"> <!-- Nombre de la empresa -->
                  <label class="label">Nombre de la empresa</label>
                  <p class="control has-icon has-icon-right">
                      <input data-vv-as="Nombre de la empresa" name="nombre_empresa" v-model="emp.nombre_empresa" v-validate="''" :class="{'input': true, 'is-danger': errors.has('') }" type="text" placeholder="Opcional">
                      <i v-show="errors.has('')" class="fa fa-warning"></i>
                      <span v-show="errors.has('')" class="help is-danger">{{ errors.first('') }}</span>
                  </p>
              </div>
                    <!--Rubros-->
              <div>
                <label class="typo__label">Rubros</label>
                <multiselect v-model="emp.rubros" :options="fieldss" :multiple="true" :close-on-select="false" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="Seleccione rubro(s)" label="NOMB_RUBRO" track-by="NOMB_RUBRO">
                  <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.NOMB_RUBRO }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
                </multiselect>
              </div>
          <br><br>
              <!-- Botón -->
              <div class="column is-12">
                  <p class="control">
                    <button  class="button is-primary"  type="submit" >Agregar nuevo Emprendedor</button>
                  </p>
              </div>
          </form>



      <!-- Aviso validación --> 
      <div>
          <span> {{error.exclusivo}} </span>
      </div>



    </form>
  </div>
</template>
<script>
  import entrepreneurscontroller from '@/components/entrepreneurs/controller/entrepreneurscontroller.js'
  import fieldscontroller from '@/components/fields/controller/fieldscontroller.js'

  // import validarut from '@/components/validator/validarut.js'
  // import validarRut from '@/components/entrepreneurs/validarRut.js'

  export default {
    name: 'NewEntrepreneur',
    data () {
      return {
        emp: {},
        fieldss: [],
        options: [],
        error: []
      }
    },
    mounted () {
      fieldscontroller.listFields(this)
    },
    methods: {
      // Llamar función addPost en controller
      addEntrepreneur (event) {
        event.preventDefault()
        entrepreneurscontroller.addEntrepreneur(this)
      },
      validarCampo (event) {
        event.preventDefault()
        entrepreneurscontroller.validar(this)
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.addEntrepreneur(event)
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
