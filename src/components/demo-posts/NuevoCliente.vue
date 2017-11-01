<template>
  <div class="container">
    <h3><br>Registro</h3>
    <form id="someform">

      <div class="row center">
        <div class="input-field col s12">
            <i class="material-icons large">account_circle</i>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Juan" type="text" v-model="post.nombre" id="nombre" />
          <label for="nombre">Nombre</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Pérez" type="text" v-model="post.apellido" id="apellido" />
          <label for="apellido">Apellido</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input placeholder="1234567-8" type="number" v-model="post.rut" id="rut" />
          <label for="precio">Rut</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Ejemplo@mail.com" type="text" v-model="post.email" id="email" />
          <label for="email">Email</label>
        </div>
      </div>

     <div class="row">
        <div class="input-field col s12">
          <input placeholder="********" type="password" v-model="post.password" id="password" />
          <label for="password">Contraseña</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input placeholder="********" type="password" v-model="post.rep_password" id="rep_password" />
          <label for="rep_password">Confirmación de contraseña</label>
        </div>
      </div>

      <div class="row">
        <button class="waves-effect waves-light btn" v-on:click="addPost">Publicar</button>
      </div>

    </form>
  </div>
</template>

<script>
  import postcontroller from '@/components/demo-posts/controller/postcontroller.js'
  export default {
    name: 'demo-newposts',
    data () {
      return {
        post: {},
        checkedNames: []
      }
    },
    methods: {
      // Llamar función addPost en controller
      addPost (event) {
        event.preventDefault()
        postcontroller.addPost(this)
      }
    }
  }
</script>

<style>
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


</style>