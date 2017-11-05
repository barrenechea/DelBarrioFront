<template>
<div id="login-container">
  <div id="login-form">
    <h3>Inicia Sesión. Sorry por el diseño :(</h3>
    <form class="form" autocomplete="off" v-on:submit="authenticate">
      <input type="email" placeholder="email" v-model="auth.email" />
      <input type="password" placeholder="password" v-model="auth.password" />
      <button type="submit">LOGIN</button>
    </form>
  </div>
</div>
</template>

<script>
import controller from './auth/controller.js'
export default {
  name: 'login',
  data () {
    return {
      auth: {}
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

<style scoped>
input[type="email"], input[type="password"] {
  display: block;
  margin: 0;
  font-family: sans-serif;
  font-size: 18px;
  box-shadow: none;
  border-radius: none;
}
input[type="email"]:focus, input[type="password"]:focus {
  outline: none;
}
</style>