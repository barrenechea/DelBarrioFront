<template>
  <section id="el-producto" class="container-fluid">
    <div class="container">
      <div class="row margin-top-sec">
        <div class="col-sm-6">
          <div id="carousel" class="carousel slide" v-if="post.imagenes.length > 0">
            <div class="carousel-inner">
              <div class="item active">
                <img v-bind:src="'http://delbarrio.barrenechea.cl/api/' + post.imagenes[0].URL_IMAGEN" class="img-responsive" alt="">
              </div>
              <div class="item" v-bind:key="img.IDEN_IMAGEN" v-for="img in post.imagenes">
                <img v-bind:src="'http://delbarrio.barrenechea.cl/api/' + img.URL_IMAGEN" class="img-responsive" alt="">
              </div>
            </div>
          </div><!--- Carrousel Grande -->
          <div class="clearfix">
            <div id="thumbcarousel" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="item active" v-if="post.imagenes.length>1" >
                  <div data-target="#carousel" :data-slide-to="img.$index" class="thumb" v-bind:key="img.IDEN_IMAGEN" v-for="img in post.imagenes">
                      <img v-bind:src="'http://delbarrio.barrenechea.cl/api/' + img.URL_IMAGEN" class="img-responsive" alt="">
                  </div>                
                </div><!-- /item -->
              </div><!-- /carousel-inner -->
            </div> <!-- /thumbcarousel -->
          </div><!-- /clearfix -->
        </div><!-- columna -->        
        <div class="col-sm-6">
          <h2>{{post.NOMB_PUBLICACION}}</h2>
          <div class="estrellas">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <p class="margin-top-20"><i class="fa fa-eye" aria-hidden="true"></i> (15)</p>          
          <a v-on:click="divComments = !divComments">Comentarios ({{post.comentarios.length}})</a> <!--Ver Comentarios -->
          <div class="comentarios" v-show="divComments">
            <!-- AQUI VAN Todos los comentarioooooos -->
            
            <!-- AQUI VAN Todos los comentarioooooos -->
            <form id='writeComments'  @submit.prevent="validateBeforeSubmit">
            <input v-validate data-vv-rules="required" data-vv-as="comentario" name="comentario" type="text" v-model="post.DESC_COMENTARIO"/>
            &nbsp<button class="btn btn-basic">Comentar</button>
            <br><span v-show="errors.has('comentario')">{{ errors.first('comentario') }}</span>

            </form>
          </div>
          <h3>{{post.NUMR_PRECIO}}<small>C/U</small></h3>
          <h4>Descripción</h4>                    
          <p class="info-prod">{{post.DESC_PUBLICACION}}</p>
          <button type="button" class="btn btn-default margin-top-20">Contactar Vendedor</button>
          <a href="#" class="margin-top">Denunciar publicación</a>   
          <social-sharing
                      v-bind:title="post.NOMB_PUBLICACION + ' | Del Barrio - Providencia'"
                      description="Portal de emprendimientos en Providencia."
                      v-bind:quote="post.NOMB_PUBLICACION + ' - Portal de emprendimientos en Providencia.'"
                      hashtags="delbarrio,providencia"
                      inline-template>
            <div class="redes-sociales">
            <network network="facebook"><a style="cursor:pointer;"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></network>
            <network network="twitter"><a style="cursor:pointer;"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div><!-- /container -->
  </section><!-- /El Producto -->
</template>

<script>
import controller from '~/controllers/posts'
import commentscontroller from '~/controllers/comments'

var SocialSharing = require('vue-social-sharing')

export default {
  asyncData ({ params }) {
    return controller.GET(params.id)
  },
  data () {
    return {
      divComments: false
    }
  },
  components: {
    SocialSharing
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          commentscontroller.POST(this)
        } else {
          return null
        }
      })
    }
  },
  head () {
    return {
      title: this.post.NOMB_PUBLICACION + ' - Del Barrio',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
