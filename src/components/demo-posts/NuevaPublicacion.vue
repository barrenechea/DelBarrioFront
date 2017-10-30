<template>
  <div class="container">
    <h3>Nueva publicación</h3>
    <form id="someform">

      <div class="row">
        <div class="input-field col s12">
          <label>Subir imagen...</label><br><br>PENDIENTE !<br>
          <input type="file" id="imagen" />
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Nombre" type="text" v-model="post.nombre" id="nombre" />
          <label for="nombre">Nombre</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input placeholder="$0.000" type="number" v-model="post.precio" id="Precio" />
          <label for="precio">Precio</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Descripción..." type="text" v-model="post.descripcion" id="descripcion" />
          <label for="descripcion">Descripción</label>
        </div>
      </div>

      <div class="row">        
        <div class="input-field col s12">
          <input type="checkbox" id="mayores" value="1" v-model="checkedNames">
          <label for="mayores">Mayores de 18</label><br>
          <br>
        </div>
      </div>

      <div >
      <div class="select">
        Categoría <br>
     <v-select placeholder="(Seleccionar)" :options="['categoría 1','categoría 2']">
      </v-select>
      </div>
     </div>
     <br>
      <div class="select">
        Subcategoria
        <v-select id="subcategoria" placeholder="(Seleccionar)" :options="['subcategoría 1','subcategoría 2',                                                       'subcategoría 3','subcategoría 4']">
      </v-select>
      </div>
      <br>
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
  .select {
    width: 25%;
  }
  
  .input-field input[type=text]:focus {
    border-bottom: 1px solid #888 !important;
    box-shadow: 0 1px 0 0 #888 !important;
  }


</style>