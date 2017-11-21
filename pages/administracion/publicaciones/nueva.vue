<template>
  <div>
    <section id="publicacion" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 fondo-beige">
            <h2 class="text-center">Nueva Publicación</h2>            
            <form class="margin-top" @submit.prevent="validateBeforeSubmit">
              <div class="upload" upload-image="">
                <input type="file" id="files" name="files" class="input-file ng-pristine ng-valid ng-touched" files-model="" ng-model="project.fileList">
                <label for="files">
                  <span class="add-image">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                  </span>
                  <output id="list"></output>
                </label>
              </div>
              <p class="help-block text-center">Selecciona una imagen desde tu ordenador.</p>                        
              <div class="form-group">
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
              <div class="checkbox">
                <label>
                  <input type="checkbox" v-model="isSale"> Oferta
                </label>
              </div>
              <div class="row"> <!-- Corregir estilos -->
                <div class="col-sm-6">
                  <croppa v-model="images.image1"
                          :width="200"
                          :height="200"
                          placeholder="Subir Imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          ></croppa>
                </div>
                <div class="col-sm-6">
                  <croppa v-model="images.image2"
                          :width="200"
                          :height="200"
                          placeholder="Subir Imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          ></croppa>
                </div>
                <div class="col-sm-6">
                  <croppa v-model="images.image3"
                          :width="200"
                          :height="200"
                          placeholder="Subir Imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          ></croppa>
                </div>
                <div class="col-sm-6">
                  <croppa v-model="images.image4"
                          :width="200"
                          :height="200"
                          placeholder="Subir Imagen"
                          :placeholder-font-size="18"
                          :prevent-white-space="true"
                          ></croppa>
                </div>
              </div>          
              <div v-if="isSale">
                <hr>
                <h3>Datos de la Oferta</h3>
                <div class="form-group">
                  <label for="precio-oferta">Precio Oferta</label>
                  <input type="text" name="price" class="form-control" v-validate :data-vv-rules="isSale ? 'required|numeric|min:0|max:2.000.000.000': ''" />
                  <small class="text-danger" v-show="errors.has('price')">{{ errors.first('price') }}</small>
                </div>
                <div class="form-group">
                  <label for="fecha-inicio">Fecha Inicio</label>
                  <datepicker 
                    language="es"
                    :format='format'
                    v-model="sale.FECH_INICIO"
                    v-validate :data-vv-rules="isSale ? 'required': ''"
                    data-vv-value-path="innerValue"
                    :name= "'start_date'"
                    :bootstrapStyling = "true"
                  ></datepicker>
                  <small class="text-danger" v-show="errors.has('start_date')">{{ errors.first('start_date') }}</small>
                </div>
                <div class="form-group">
                  <label for="fecha-termino">Fecha Término</label>
                  <datepicker 
                    language="es"
                    :format='format'
                    v-model="sale.FECH_TERMINO"
                    v-validate :data-vv-rules="isSale ? 'required': ''"
                    data-vv-value-path="innerValue"
                    name= "end_date"
                    :bootstrapStyling="true"
                  ></datepicker>
                  <small class="text-danger" v-show="errors.has('end_date')">{{ errors.first('end_date') }}</small>
                </div>
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
  </div>
</template>

  

<script>
import controller from '~/controllers/posts'
import categoriescontroller from '~/controllers/admin/categories'
import Datepicker from 'vuejs-datepicker'

export default {
  data () {
    return {
      format: 'dd MMM, yyyy',
      post: { FLAG_CONTENIDO_ADULTO: false },
      sale: { },
      subcategorias: {},
      message: false,
      selectedIndex: null,
      isSale: false,
      images: {
        image1: {},
        image2: {},
        image3: {},
        image4: {}
      }
    }
  },
  asyncData () {
    return categoriescontroller.GETAll()
  },
  components: {
    Datepicker
  },
  methods: {
    addPost () {
      event.preventDefault()
      controller.POST(this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then(async (result) => {
        if (result) {
          let blobs = []
          for (var key in this.images) {
            if (this.images[key].imageSet) {
              let blob = await this.images[key].promisedBlob()
              blobs.push(blob)
            }
          }
          if (blobs.length > 0) {
            controller.POST(this, blobs)
          } else {
            controller.POST(this)
          }
        }
      })
    },
    selected (i) {
      this.subcategorias = i
      console.log(i)
    }
  },
  head () {
    return {
      title: 'Nueva publicación - Del Barrio',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
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