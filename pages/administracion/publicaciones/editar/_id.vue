<template>
  <div class="container">
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
          <select v-model="post.IDEN_CATEGORIA" v-validate data-vv-rules="required" data-vv-as="categoría" name="category">
            <option value="undefined">Seleccionar</option>
            <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
          </select>
          <span v-show="errors.has('category')">{{ errors.first('category') }}</span>
        </div>
        <div>
          <label>Tipo de publicación</label>
          <select v-model="post.CODI_TIPO_PUBLICACION" v-validate data-vv-rules="required" data-vv-as="tipo de publicación" name="type">
            <option value="undefined">Seleccionar</option>
            <option value="P">Producto</option>
            <option value="S">Servicio</option>
          </select>
          <span v-show="errors.has('type')">{{ errors.first('type') }}</span>
        </div>
        <div>
          <label>Descripción</label>
          <textarea v-model="post.DESC_PUBLICACION" v-validate data-vv-rules="required" data-vv-as="descripción" name="description"></textarea>
          <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
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
          <croppa v-model="images.image1"
                  :width="200"
                  :height="200"
                  placeholder="Subir Imagen"
                  :placeholder-font-size="18"
                  :prevent-white-space="true"
                  :initial-image="'https://delbarrio.barrenechea.cl/'+post.imagenes[0].URL_IMAGEN"
          ></croppa>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="validateBeforeSubmit()">Agregar</button>
        </div>
        <div v-if='message'>
          <span>{{message}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/posts'
import categoriescontroller from '~/controllers/admin/categories'
import VeeValidate from 'vee-validate'
import Croppa from 'vue-croppa'
import Vue from 'vue'

Vue.use(Croppa)
export default {
  name: 'NewPost',
  data () {
    return {
      message: false,
      images: {},
      categories: {}
    }
  },
  asyncData ({ params }) {
    return categoriescontroller.GETAll()
      .then(categories => {
        return controller.GET(params.id)
          .then(post => {
            return {
              id: post.id,
              post: post.post
            }
          })
      })
  },
  components: {
    VeeValidate
  },
  methods: {
    deleteImage: function (id) {
      event.preventDefault()
      controller.deleteImage(id, this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.images !== {}) {
            this.images.generateBlob((blob) => {
              controller.PUT(this, blob)
            })
          } else {
            controller.PUT(this)
          }
        }
      })
    }
  }
}
</script>

<style>
.croppa-container canvas {
  cursor: pointer !important;
  border-style: dashed;
}
</style>
