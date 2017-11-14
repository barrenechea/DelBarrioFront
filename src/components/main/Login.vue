<template>
<div class="container">
  <h3>Iniciar Sesión</h3>
  <!--<form @submit.prevent="validateBeforeSubmit">-->
    <div>
      <label>Correo electrónico</label>
        <input v-validate data-vv-rules="required|email" data-vv-as="correo electrónico" name="email" type="text" v-model="auth.email"/>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </div>
    <div>
      <label>Contraseña</label>
      <input type="password" v-model="auth.password" v-validate data-vv-rules="required" data-vv-as="contraseña" name="pass" />
      <span v-show="errors.has('pass')">{{ errors.first('pass') }}</span>
    </div>
    <div>
      <span v-if="error">{{message}}</span>
    </div>
    <button type="submit" v-on:click="authenticate">LOGIN</button>
  <!--</form>-->
</div>
</template>

<script>
import controller from '@/components/main/auth/controller.js'
export default {
  name: 'login',
  data () {
    return {
      auth: {},
      error: false,
      message: ''
    }
  },
  methods: {
    authenticate (event) {
      event.preventDefault()
      controller.login(this)
    }
    /* validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          controller.authenticate(this)
        }
      })
     } */
  },
  mounted () {
    controller.authCheck()
  }
}
</script>
