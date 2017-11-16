<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva publicación</h1>
        <div>
          <label>Título</label>
          <input v-validate data-vv-rules="required" data-vv-as="titulo" name="name" type="text" v-model="post.NOMB_PUBLICACION"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div>
          <label>Categoria</label>
          <select v-model="post.IDEN_CATEGORIA">
            <option value="undefined">-- Seleccionar --</option>
            <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
          </select>
        </div>
        <div>
          <label>Tipo de publicación</label>
          <select v-model="post.CODI_TIPO_PUBLICACION">
            <option value="undefined">-- Seleccionar --</option>
            <option value="p">Producto</option>
            <option value="s">Servicio</option>
          </select>
        </div>
        <div>
          <label>Descripción</label>
          <textarea v-model="post.DESC_PUBLICACION"></textarea>
        </div>
        <div>
          <label>Precio</label>
          <input type="number" v-model="post.NUMR_PRECIO"/>
        </div>
        <div>
          <label for="contenido-adulto">Contenido Adulto</label>
          <input id="contenido-adulto" type="checkbox" v-model="post.FLAG_CONTENIDO_ADULTO"/>
        </div>
        <div>
          <croppa v-model="images"></croppa>
          <button class="btn btn-success" v-on:click="addPost">Agregar</button>
        </div>
        <div>
          <span v-show='error'>Error</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postscontroller from '@/components/posts/controller/postscontroller.js'
import categoriescontroller from '@/components/categories/controller/categoriescontroller.js'
import Croppa from 'vue-croppa'
import Vue from 'vue'

Vue.use(Croppa)

export default {
  name: 'NewPost',
  data () {
    return {
      post: { FLAG_CONTENIDO_ADULTO: false },
      categories: {},
      subcategories: {},
      error: false,
      images: {}
    }
  },
  mounted () {
    categoriescontroller.listCategories(this)
  },
  methods: {
    // Llamar función addCategory en controller
    addPost (event) {
      event.preventDefault()
      this.images.generateBlob((blob) => {
        postscontroller.addPost(this, blob)
      })
    }
  }
}
</script>
