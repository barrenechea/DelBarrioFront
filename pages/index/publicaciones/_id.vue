<template>
<div>
  <section id="el-producto" class="container-fluid">
    <div class="container">
      <div class="row margin-top-sec">
        <div class="col-sm-6">
          <div id="carousel" class="carousel slide" v-if="post.imagenes.length > 0">
            <div class="carousel-inner">
              <div class="item active">
                <img v-bind:src="imageUrl + post.imagenes[0].URL_IMAGEN" class="img-responsive" alt="">
              </div>
              <div class="item" :key="img.IDEN_IMAGEN" v-for="img in post.imagenes">
                <img v-bind:src="imageUrl + img.URL_IMAGEN" class="img-responsive" alt="">
              </div>
            </div>
          </div><!--- Carrousel Grande -->
          <div class="clearfix">
            <div id="thumbcarousel" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="item active" v-if="post.imagenes.length>1" >
                  <div data-target="#carousel" :data-slide-to="img.$index" class="thumb" v-bind:key="img.IDEN_IMAGEN" v-for="img in post.imagenes">
                      <img v-bind:src="imageUrl + img.URL_IMAGEN" class="img-responsive" alt="">
                  </div>                
                </div><!-- /item -->
              </div><!-- /carousel-inner -->
            </div> <!-- /thumbcarousel -->
          </div><!-- /clearfix -->
        </div><!-- columna -->
        <div class="col-sm-6">
          <h2>{{post.NOMB_PUBLICACION}}</h2>
          <div class="estrellas">
            <no-ssr>
              <star-rating 
                v-model="post.NUMR_CALIFICACION"
                :increment="0.1"
                :star-size="35"
                :inline="true"
                :read-only="true">
              </star-rating>
            </no-ssr>
            <p><a href="#" data-toggle="modal" data-target="#modal"> ({{ post.calificaciones.length }} {{ post.calificaciones.length === 1 ? 'calificación' : 'calificaciones' }})</a></p>
          </div>
          <p class="margin-top-20"><i class="fa fa-eye" aria-hidden="true"></i> ({{post.NUMR_CONTADOR}})</p>
          <a v-if="isAuthenticated" href="#" v-scroll-to="'#comentarios'">({{ post.comentarios.length }} {{ post.comentarios.length === 1 ? 'comentario' : 'comentarios' }})</a>
          <a v-else data-toggle="modal" data-target="#modal">({{ post.comentarios.length }} {{ post.comentarios.length === 1 ? 'comentario' : 'comentarios' }})</a>
          <h3>$ {{ post.NUMR_PRECIO.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") }}</h3>
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

  <div id="interacciones" v-if="isAuthenticated">
    <section id="calificaciones" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <hr>
            <h2 class="margin-top">Calificaciones</h2>
            <p>Ingresa tu calificación</p>
            <no-ssr>
              <star-rating
                v-model="rating.NUMR_VALOR"
                :increment="1"
                :star-size="35">
              </star-rating>
            </no-ssr>
            <form @submit.prevent="ratingPOST">
              <div class="form-group margin-top-20">
                <textarea class="form-control" rows="3" v-model="rating.DESC_CALIFICACION"></textarea>
              </div>
              <button type="submit" class="btn btn-default">Calificar</button>
            </form>
          </div>
        </div>
              
        <div class="row margin-top" v-if="post.calificaciones.length > 0">
          <div class="col-xs-12 contorno">
            <h3>Última calificación</h3>
            <div class="estrellas">
              <no-ssr>
                <star-rating
                  v-model="post.calificaciones[0].NUMR_VALOR"
                  :increment="1"
                  :star-size="35"
                  :read-only="true">
                </star-rating>
              </no-ssr>
            </div>
            <small>{{post.calificaciones[0].FECH_CREACION | dateFormat}}</small>
            <p class="margin-top-20">{{post.calificaciones[0].DESC_CALIFICACION}}</p>
            <p><a href="#" class="margin-top">Denunciar</a></p>
            <p class="text-center"><a data-toggle="modal" data-target="#modal" href="#">Ver más</a></p>
          </div>
        </div>
      </div><!-- /container -->
    </section><!-- /Calificaciones -->

    <section id="comentarios" name="comentarios" class="container-fluid">
      <div class="container">
        <div class="row">
          <hr>
          <h2 class="margin-top">Comentarios</h2>
          <p>Ingresa tu comentario</p>

          <!--FORM DE COMENTAR-->
          <form @submit.prevent="commentPOST">
            <div class="form-group margin-top-20">
              <textarea class="form-control" rows="3" v-validate data-vv-rules="required" data-vv-as="comentario" name="com" v-model="comment.DESC_COMENTARIO"></textarea>
            </div>
            <span :class="message.error ? '' : 'text-danger'" v-if="message.error">{{message.commentmessage}}</span>
            <p><button type="submit" class="btn btn-default">Comentar</button></p>
          </form>
          <!--FIN FORM DE COMENTAR-->

        </div>
        <div id="listComentarios" class="row margin-top" v-for="c in post.comentarios" :key="c.IDEN_COMENTARIO">
          <div class="col-xs-12 contorno">
            <p class="margin-top-20">
              <i class="fa fa-comment"> </i>
              <small class="margin-left"> {{c.FECH_CREACION | dateFormat}}</small>
              {{c.DESC_COMENTARIO}}
            </p>
            <p v-if="c.respuesta.DESC_RESPUESTA" class="margin-top-20">
              <i class="fa fa-comments-o"> </i>
              <small> {{c.respuesta.FECH_CREACION | dateFormat}}</small>
              {{c.respuesta.DESC_RESPUESTA}}
            </p>

            <p>
              <a href="#" class="margin-top">Denunciar</a>
              <span v-if="isAuthenticated && loggedUser.rol === 102 && c.respuesta.IDEN_RESPUESTA === undefined"> -
                <a :id="c.IDEN_COMENTARIO" style="cursor: pointer" @click="openAnswer($event.toElement.id)" class="margin-top">Responder</a>
              </span>
            </p>
            <div class="comentarios" v-if="c.IDEN_COMENTARIO == selected">

              <!--FORM RESPUESTAS-->
              <form id='writeComments' @submit.prevent="answerPOST">
                <div class="form-group margin-top-20">
                  <textarea class="form-control" rows="3" v-validate data-vv-rules="required" data-vv-as="respuesta" name="ans" v-model="answer.DESC_RESPUESTA"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Enviar</button>
                <button @click="selected=false" class="btn btn-default">Ocultar</button>
                <span :class="message.error ? '' : 'text-danger'" v-if="message.error">{{message.answermessage}}</span>
              </form>
              <!--FIN FORM RESPUESTAS-->
            </div>
          </div>
        </div>
      </div><!-- /container -->
    </section><!-- /Comentarios -->
  </div>

  <!-- Modals -->
  <section id="modals">
    <!-- Modal de calificacion -->
    <div class="modal fade" id="modal" v-if="isAuthenticated" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Calificaciones</h4>
          </div>
          <div class="modal-body">
            <div :key="rating.IDEN_CALIFICACION" v-for="rating in post.calificaciones">
              <no-ssr>
                <star-rating 
                  v-model="rating.NUMR_VALOR"
                  :increment="0.1"
                  :star-size="20"
                  :read-only="true">
                </star-rating>
              </no-ssr>
              <p><small>{{rating.FECH_CREACION | dateFormat}}</small></p>
              <p>{{rating.DESC_CALIFICACION}} </p>
              <hr>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!--Autenticar modal-->
    <div class="modal fade" id="modal" v-if="!isAuthenticated" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">¡No puedes ver este contenido!</h4>
          </div>
          <div class="modal-body">
            <p>Debes <nuxt-link to="/autenticar">iniciar sesión</nuxt-link> para visualizar esta funcionalidad</p>
              <p>¿No tienes cuenta aún? <nuxt-link to="/registro">¡Regístrate!</nuxt-link></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  

</template>

<script>
import controller from '~/controllers/posts'
import commentscontroller from '~/controllers/comments'
import answerscontroller from '~/controllers/answers'
import ratingscontroller from '~/controllers/ratings'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  asyncData ({ app, params }) {
    return controller.GET(app, params.id)
  },
  data () {
    return {
      comment: {},
      message: {message: '', error: false, commentmessage: '', answermessage: ''},
      selected: false,
      answer: {},
      rating: {},
      imageUrl: process.env.imagesUrl
    }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  methods: {
    commentPOST () {
      commentscontroller.POST(this)
    },
    ratingPOST () {
      ratingscontroller.POST(this)
    },
    answerPOST () {
      answerscontroller.POST(this)
    },
    openAnswer (event) {
      this.selected = event
      this.answer.DESC_RESPUESTA = ''
    }
  },
  filters: {
    dateFormat: function (date) {
      return moment(String(date)).format('DD/MM/YYYY HH:mm')
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
