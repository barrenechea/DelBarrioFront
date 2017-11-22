<template>
    <section id="publicacion" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1 fondo-beige">
            <h2 class="text-center">Editar Publicación</h2>            
            <form class="margin-top" @submit.prevent="validateBeforeSubmit">
              <div class="row margin-top"> <!-- Corregir estilos -->
                <div class="col-sm-3">
                  <croppa v-model="images.image1"
                          :width="200"
                          :height="200"
                          placeholder="Subir imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          :initial-image="post.imagenes.length > 0 ? 'https://delbarrio.barrenechea.cl/'+post.imagenes[0].URL_IMAGEN : ''"
                          ></croppa>
                </div>
                <div class="col-sm-3">
                  <croppa v-model="images.image2"
                          :width="200"
                          :height="200"
                          placeholder="Subir imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          :initial-image="post.imagenes.length > 1 ? 'https://delbarrio.barrenechea.cl/'+post.imagenes[1].URL_IMAGEN : ''"
                          ></croppa>
                </div>
                <div class="col-sm-3">
                  <croppa v-model="images.image3"
                          :width="200"
                          :height="200"
                          placeholder="Subir imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          :initial-image="post.imagenes.length > 2 ? 'https://delbarrio.barrenechea.cl/'+post.imagenes[2].URL_IMAGEN : ''"
                          ></croppa>
                </div>
                <div class="col-sm-3">
                  <croppa v-model="images.image4"
                          :width="200"
                          :height="200"
                          placeholder="Subir imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          :initial-image="post.imagenes.length > 3 ? 'https://delbarrio.barrenechea.cl/'+post.imagenes[3].URL_IMAGEN : ''"
                          ></croppa>
                </div>
              </div>
              <div class="form-group margin-top">
                <label for="tipo">Tipo</label>
                <select v-model="post.CODI_TIPO_PUBLICACION" v-validate data-vv-rules="required" data-vv-as="tipo de publicación" name="type" class="form-control">
                  <option value="undefined">Seleccionar</option>
                  <option value="P">Producto</option>
                  <option value="S">Servicio</option>
                </select>
                <small class="text-danger" v-show="errors.has('type')">{{ errors.first('type') }}</small>
              </div>
              <div class="form-group">
                <label for="name">Título</label>
                <input type="text" class="form-control" v-validate data-vv-rules="required|min:5|max:100" data-vv-as="título" name="name" v-model="post.NOMB_PUBLICACION">
                <small class="text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</small>
              </div>              
              <div class="form-group">
                <label for="price">Precio</label>
                <input type="text" class="form-control" v-model="post.NUMR_PRECIO" v-validate data-vv-rules="required|numeric" data-vv-as="precio" name="price">
                <small class="text-danger" v-show="errors.has('price')">{{ errors.first('price') }}</small>
              </div>              
              <div class="form-group">
                <label for="descripcion">Descripcion</label>
                  <textarea v-model="post.DESC_PUBLICACION" v-validate data-vv-rules="required|max:5000" data-vv-as="descripción" name="description" class="form-control" rows="3"></textarea>
                <small class="text-danger" v-show="errors.has('description')">{{ errors.first('description') }}</small>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="category">Categoría</label>
                      <select v-model="post.IDEN_CATEGORIA" v-validate data-vv-rules="required" data-vv-as="categoría" name="category" class="form-control" size=5>
                      <option @click="selected(c.subcategorias)" :key="c.IDEN_CATEGORIA" v-for="(c, i) in categories" :value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
                    </select>
                    <small class="text-danger" v-show="errors.has('category')">{{ errors.first('category') }}</small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="category">Sub categoría</label>
                    <select v-model="post.IDEN_SUBCATEGORIA" name="subcategory" class="form-control" size=5>
                      <option :key="sc.IDEN_CATEGORIA" v-for="sc in subcategorias" :value="sc.IDEN_CATEGORIA">{{sc.NOMB_CATEGORIA}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="post.FLAG_CONTENIDO_ADULTO">Producto para mayores de 18
                </label>
              </div>
              <div v-if='message'>
                <span>{{message}}</span>
              </div>
              <button type="submit" class="btn btn-default">Publicar</button>
            </form>
          </div>
        </div>
      </div><!-- /container -->
    </section>
</template>

<script>
import controller from '~/controllers/posts'
import categoriescontroller from '~/controllers/admin/categories'

export default {
  name: 'EditPost',
  data () {
    return {
      message: false,
      images: {},
      subcategorias: {}
    }
  },
  asyncData ({ app, params }) {
    return categoriescontroller.GETAll(app)
      .then(categories => {
        return controller.GET(app, params.id)
          .then(post => {
            return {
              id: post.id,
              post: post.post,
              categories: categories.categories,
              subcategories: categories.subcategorias
            }
          })
      })
  },
  methods: {
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
    },
    selected (i) {
      this.subcategorias = i
    }
  }
}
</script>

<style>
.croppa-container canvas {
  cursor: pointer !important;
  border-style: groove;
  background-color: #fff !important;
  border-width: 1px;
  border-color: #fcfcfc !important;
}
</style>
