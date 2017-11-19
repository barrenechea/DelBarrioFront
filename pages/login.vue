<template>
  <div class="container">
    <h3>Iniciar Sesión</h3>
    <!--<form @submit.prevent="validateBeforeSubmit">-->
      <div>
        <label>Correo electrónico</label>
          <input type="text" v-model="auth.email"/>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" v-model="auth.password"/>
      </div>
      <div v-if='message'>
          <span>{{message}}</span>
        </div>
      <button type="submit" v-on:click="authenticate">LOGIN</button>
    <!--</form>-->
  </div>
</template>

<script>
import controller from '~/controllers/main/auth'
export default {
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
