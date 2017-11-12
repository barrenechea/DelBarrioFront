<template>
<div id="login-container">
  <div id="login-form">
    <h3>Inicia Sesión. Sorry por el diseño :(</h3>
      <div>
        <input type="email" placeholder="email" v-model="auth.email" v-validate data-vv-rules="required" data-vv-as="e-mail" name="email"/>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div>
        <input type="password" placeholder="password" v-model="auth.password" v-validate data-vv-rules="required" data-vv-as="contraseña" name="pass" />
        <span v-show="errors.has('pass')">{{ errors.first('pass') }}</span>
      </div>
      <div>
        <span v-if="error">{{message}}</span>
      </div>
      <button type="submit" v-on:click="authenticate">LOGIN</button>
  </div>
</div>
</template>

<script>
import controller from './auth/controller.js'
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
  },
  mounted () {
    controller.authCheck()
  }
}
</script>
