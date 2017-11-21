<template>
  <div class="container">
    <h3>Iniciar Sesión</h3>
    <form @submit.prevent="validateBeforeSubmit">
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
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
import controller from '~/controllers/auth'
export default {
  middleware: 'anonymous',
  data () {
    return {
      auth: {},
      error: false,
      message: ''
    }
  },
  methods: {
    validateBeforeSubmit () {
      // this.$validator.validateAll().then((result) => {
      //   if (result) {
      //     controller.authenticate(this)
      //   }
      // }
      controller.login(this)
        .then(() => {
          if (!this.error) {
            this.$router.push({ path: '/' })
          }
        })
    }
  }
}
</script>
