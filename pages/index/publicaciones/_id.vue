<template>
<div>
  <section id="el-producto" class="container-fluid">
    <div class="container">
      <div class="row margin-top-sec">
        <div class="col-sm-6">
          <div id="carousel" class="carousel slide" v-if="post.imagenes.length > 0">
            <div class="carousel-inner">
              <div class="item active">
                <img v-bind:src="'https://delbarrio.barrenechea.cl/' + post.imagenes[0].URL_IMAGEN" class="img-responsive" alt="">
              </div>
              <div class="item" :key="img.IDEN_IMAGEN" v-for="img in post.imagenes">
                <img v-bind:src="'https://delbarrio.barrenechea.cl/' + img.URL_IMAGEN" class="img-responsive" alt="">
              </div>
            </div>
          </div><!--- Carrousel Grande -->
          <div class="clearfix">
            <div id="thumbcarousel" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="item active" v-if="post.imagenes.length>1" >
                  <div data-target="#carousel" :data-slide-to="img.$index" class="thumb" v-bind:key="img.IDEN_IMAGEN" v-for="img in post.imagenes">
                      <img v-bind:src="'http://delbarrio.barrenechea.cl/' + img.URL_IMAGEN" class="img-responsive" alt="">
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
            <a data-toggle="modal" data-target="#calificacionModal" href="#">{{post.calificaciones.length}} opiniones</a>
          </div>
          <p class="margin-top-20"><i class="fa fa-eye" aria-hidden="true"></i> (15)</p> <!-- Agregarle el contador de visitas-->
          <a href="#comentarios">Comentarios ({{post.comentarios.length}})</a>
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

  <div id = "interacciones" v-if="isAuthenticated">
    <!--TODO -->
    <section id="calificaciones" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <hr>
            <h2 class="margin-top">Calificaciones</h2>
            <p>Ingresa tu calificación</p>          
            <div class="estrellas">
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
            </div>
            <form action="">
              <div class="form-group margin-top-20">
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-default">Calificar</button>
            </form>
          </div>
        </div>
              
        <div class="row margin-top">
          <div class="col-xs-12 contorno">
            <h3>Usuario Z</h3>
            <div class="estrellas">
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
            </div>
            <p class="margin-top-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique hic, delectus magni. Nobis neque nihil, reiciendis facilis debitis laudantium temporibus quae recusandae sit nisi ipsum perferendis numquam ratione ipsam omnis!</p>
            <p><a href="#" class="margin-top">Denunciar</a></p>
            <p class="text-center"><a data-toggle="modal" data-target="#calificacionModal" href="#">Ver más</a></p>
          </div>
        </div>
      </div><!-- /container -->
    </section><!-- /Calificaciones -->
  

  <!-- Modal de calificaciones -->
  <div class="modal fade" id="calificacionModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>This is a large modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


  <section id="comentarios" name="comentarios" class="container-fluid">
    <div class="container">
      <div class="row">
        <hr>
        <h2 class="margin-top">Comentarios</h2>
        <p>Ingresa tu comentario</p>

        <!--FORM DE COMENTAR-->
        <form @submit.prevent="validateBeforeSubmit(true)">
          <div class="form-group margin-top-20">
            <textarea class="form-control" rows="3" v-validate data-vv-rules="required" data-vv-as="comentario" name="com" v-model="comment.DESC_COMENTARIO"></textarea>
          </div>
          <span :class="message.error ? '' : 'text-danger'" v-if="message.error">{{message.commentmessage}}</span>
          <p><button type="submit" class="btn btn-default">Comentar</button></p>
        </form>
        <!--FIN FORM DE COMENTAR-->

      </div>
      <div class="row margin-top" v-for="c in post.comentarios" :key="c.IDEN_COMENTARIO">
        <div class="col-xs-12 contorno">
          <small>{{c.FECH_CREACION | dateFormat}}</small>
          <p class="margin-top-20"><i class="fa fa-comment"></i> {{c.DESC_COMENTARIO}}</p>
          <p v-if="c.respuesta.DESC_COMENTARIO" class="margin-top-20"><i class="fa fa-comments-o"></i> {{c.respuesta.DESC_RESPUESTA}}</p>
          <p>
            <a href="#" class="margin-top">Denunciar</a>
            <span v-if="isAuthenticated && loggedUser.rol === 102 && c.respuesta.IDEN_RESPUESTA === undefined"> -
               <a :id="c.IDEN_COMENTARIO" style="cursor: pointer" @click="openAnswer($event.toElement.id)" class="margin-top">Responder</a>
            </span>
          </p>
          <div class="comentarios" v-if="c.IDEN_COMENTARIO == selected">

            <!--FORM RESPUESTAS-->
            <form id='writeComments'  @submit.prevent="validateBeforeSubmit(false)">
              <div class="form-group margin-top-20">
                <textarea class="form-control" rows="3" v-validate data-vv-rules="required" data-vv-as="respuesta" name="ans" v-model="answer.DESC_RESPUESTA"></textarea>
              </div>
              <button type="submit" class="btn btn-default">Enviar</button>
              <button @click="selected=''" class="btn btn-default">Ocultar</button>
              <span :class="message.error ? '' : 'text-danger'" v-if="message.error">{{message.answermessage}}</span>
            </form>
            <!--FIN FORM RESPUESTAS-->
          </div>
        </div>
      </div>
    </div><!-- /container -->
  </section><!-- /Comentarios -->
</div>
  

</div>
  

</template>

<script>
import controller from '~/controllers/posts'
import commentscontroller from '~/controllers/comments'
import answerscontroller from '~/controllers/answers'
import moment from 'moment'
import { mapGetters } from 'vuex'

var SocialSharing = require('vue-social-sharing')

export default {
  asyncData ({ app, params }) {
    return controller.GET(app, params.id)
  },
  data () {
    return {
      comment: {},
      message: {message: '', error: false, commentmessage: '', answermessage: ''},
      selected: false,
      answer: {}
    }
  },
  components: {
    SocialSharing
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  methods: {
    validateBeforeSubmit (isComment) {
      if (isComment) {
        if (this.comment.DESC_COMENTARIO === undefined || this.comment.DESC_COMENTARIO.length < 1 || this.comment.DESC_COMENTARIO > 255) {
          this.message.commentmessage = 'Ingrese comentario'
          this.message.error = true
        } else {
          commentscontroller.POST(this)
        }
      } else {
        if (this.answer.DESC_RESPUESTA === undefined || this.answer.DESC_RESPUESTA.length < 1 || this.answer.DESC_RESPUESTA > 255) {
          this.message.answermessage = 'Ingrese respuesta'
          this.message.error = true
        } else {
          answerscontroller.POST(this)
        }
      }
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
