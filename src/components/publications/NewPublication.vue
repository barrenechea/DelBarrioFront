<template>
  <div class="container">
    <h3><br>Nuevo <span> {{ publ.picked }}</span>
</h3>
    <form id="someform">

      <div class="row">
        <div class="input-field col s12">
          <label>Subir imagen...</label><br><br>PENDIENTE !<br>
          <input type="file" id="imagen" />
        </div>
      </div>

      <!--Tipo publicacion-->
      <div class="row">
        <div class="input-field col s12">
          <input type="radio" id="producto" value="Producto" checked="checked" v-model="publ.picked">
          <label for="Producto">Producto</label>
          <br>
          <input type="radio" id="servicio" value="Servicio" v-model="publ.picked">
          <label for="servicio">Servicio</label>
          <br>
        </div>
      </div>

      <!--Nombre publicacion-->
      <div class="row">
        <div class="input-field col s12">
          <input v-model="publ.nombre" v-validate data-vv-rules="required|alpha_spaces" data-vv-as="nombre" name="nombre" type="text" placeholder="Nombre de tu producto o servicio">
          <span v-show="errors.has('nombre')" class="help is-danger">{{ errors.first('nombre') }}</span>
          <label for="nombre">Nombre</label>
        </div>
      </div>

      <!--Precio-->
       <div class="row">
        <div class="input-field col s12">
          <input v-model="publ.precio" v-validate data-vv-rules="required|numeric|min_value:1|max_value:4294967295|numeric" data-vv-as="Precio" name="precio" type="text" placeholder="10000">
          <span v-show="errors.has('precio')" class="help is-danger">{{ errors.first('precio') }}</span>
          <label for="precio">Precio</label>
        </div>
      </div>
      
      <!--Descripción-->
      <div class="row">
        <div class="input-field col s12">
          <input v-model="publ.precio" v-validate data-vv-rules="required|max:10000" data-vv-as="descripcion" name="descripcion" type="text" placeholder="Escriba aqui la descripción de su publicación...">
          <span v-show="errors.has('descripcion')" class="help is-danger">{{ errors.first('descripcion') }}</span>
          <label for="descripcion">Descripción</label>
        </div>
      </div>

      <!--Contenido Adultos -->
      <div class="row">        
        <div class="input-field col s12">
          <input type="checkbox" id="mayores" value="1" v-model="publ.adultcontent">
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
        <button class="waves-effect waves-light btn" v-on:click="addPublication">Publicar</button>
      </div>

    </form>
  </div>
</template>

<script>
  import publicationcontroller from '@/components/publications/controller/publicationcontroller.js'
  export default {
    name: 'addPublication',
    data () {
      return {
        publ: { picked: 'Producto', adultcontent: false }
      }
    },
    methods: {
      // Llamar función addPost en controller
      addPost (event) {
        event.preventDefault()
        publicationcontroller.addPublication(this)
      }
    }
  }
</script>

<style>
/*
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