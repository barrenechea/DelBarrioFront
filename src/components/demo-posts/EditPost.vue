<template>
  <div class="container">
    <h3>Editar Post</h3>
    <div class="row">
      <div class="input-field col s6">
        <input placeholder="Título" type="text" v-model="post.title" id="title" />
        <label for="title">Título</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input placeholder="Contenido" type="text" v-model="post.body" id="body" />
        <label for="body">Contenido</label>
      </div>
    </div>
    <div class="row">
      <button class="waves-effect waves-light btn" v-on:click="updatePost">Guardar</button>
    </div>
  </div>
</template>

<script>
import postcontroller from '@/components/demo-posts/controller/postcontroller.js'
export default {
  name: 'editposts',
  data () {
    return {
      post: {}
    }
  },
  mounted () {
    postcontroller.getPost(this, 1)
  },
  methods: {
    // Llamar a la función updatePost en controller
    updatePost (event) {
      event.preventDefault()
      postcontroller.updatePost(this)
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
