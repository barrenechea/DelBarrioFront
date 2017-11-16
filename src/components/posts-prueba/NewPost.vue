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
            <option value="undefined">-- Seleccionar --</option>
            <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
          </select>
          <span v-show="errors.has('category')">{{ errors.first('category') }}</span>
        </div>
        <div>
          <label>Tipo de publicación</label>
          <select v-model="post.CODI_TIPO_PUBLICACION" v-validate data-vv-rules="required" data-vv-as="tipo de publicación" name="type">
            <option value="undefined">-- Seleccionar --</option>
            <option value="p">Producto</option>
            <option value="s">Servicio</option>
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
          <croppa v-model="images"
                  :width="200"
                  :height="200"
                  placeholder="Subir Imagen"
                  :placeholder-font-size="18"
                  :prevent-white-space="true"
                  ></croppa>
        </div>
        <div>
          <label for="oferta">Oferta</label>
          <input id="oferta" type="checkbox" v-model="selected"/>
        </div>
        <div v-if="selected">
          <p>Oferta</p>
          <div>
            <label>Fecha de inicio</label>
            <datepicker 
              language="es"
              :format='format'
              v-model="sale.FECH_INICIO"
              v-validate data-vv-rules="required"
              data-vv-value-path="innerValue"
              name= "start_date"
            ></datepicker>
            <span v-show="errors.has('start_date')">{{ errors.first('start_date') }}</span>
          </div>
          <div>
            <label>Fecha de término</label>
            <datepicker 
              language="es"
              :format='format'
              v-model="sale.FECH_TERMINO"
              v-validate data-vv-rules="required|after:start_date"
              data-vv-value-path="innerValue"
              name= "end_date"
            ></datepicker>
            <span v-show="errors.has('end_date')">{{ errors.first('end_date') }}</span>
          </div>
          <div>
            <label>Precio</label>
            <input type="number" v-model="sale.NUMR_PRECIO" v-validate data-vv-rules="required|numeric" data-vv-as="precio" name="price"/>
            <span v-show="errors.has('price')">{{ errors.first('price') }}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="validateBeforeSubmit()">Agregar</button>
        </div>
        <div>
          <span v-show='error'>{{error}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postscontroller from '@/components/posts-prueba/controller/postcontroller.js'
import categoriescontroller from '@/components/categories/controller/categoriescontroller.js'
import VeeValidate from 'vee-validate'
import Datepicker from 'vuejs-datepicker'
import Croppa from 'vue-croppa'
import Vue from 'vue'

Vue.use(Croppa)
export default {
  name: 'NewPost',
  data () {
    return {
      format: 'dd MMM, yyyy',
      post: { FLAG_CONTENIDO_ADULTO: false },
      sale: { },
      categories: {},
      subcategories: {},
      error: '',
      selected: false,
      images: {}
    }
  },
  mounted () {
    categoriescontroller.listCategories(this)
  },
  components: {
    VeeValidate,
    Datepicker
  },
  methods: {
    addPost () {
      event.preventDefault()
      if (this.images !== {}) {
        this.images.generateBlob((blob) => {
          postscontroller.addPost(this, blob)
        })
      } else {
        postscontroller.addPost(this)
      }
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        alert('Result ' + result)
        if (result) {
          if (this.images !== {}) {
            this.images.generateBlob((blob) => {
              postscontroller.addPost(this, blob)
            })
          } else {
            postscontroller.addPost(this)
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