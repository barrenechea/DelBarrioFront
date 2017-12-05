<template>
  <section id="admin" class="container-fluid">
    <div class="container fondo-beige">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Mi cuenta</h2>
        </div>
      </div>
      <div class="row">
        <!-- EMPRENDEDOR - PREGUNTAS -->
        <div class="col-xs-12" v-if="isAuthenticated && loggedUser.rol === 102">
          <h3><icon name="comments-o" :aria-hidden="true" :scale="2"></icon><span style="vertical-align: super"> Preguntas</span></h3>
          <hr>
          <p><span class="label label-default">0</span> <span style="vertical-align: sub"> Que aún no respondiste</span></p>
        </div>
        <!-- CLIENTE - RESPUESTAS -->
        <div class="col-xs-12"v-if="isAuthenticated && loggedUser.rol === 101">
          <h3><icon name="comments-o" :aria-hidden="true" :scale="2"></icon><span style="vertical-align: super"> Respuestas</span></h3>
          <hr>
          <p><span class="label label-default">0</span> <span style="vertical-align: sub"> Te han respondido</span></p>
        </div>
      </div>
      <hr>
      <div v-if="isAuthenticated && loggedUser.rol === 102">
        <div class="row margin-top">
          <div class="col-xs-12">
            <h3>Tus destacados</h3>
            <small class="text-muted"><nuxt-link to="/administracion/publicaciones">Ver todos</nuxt-link></small>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-6 margin-top-20">
            <a href="el-producto.html"><img src="img/producto.jpg" class="img-responsive" alt=""></a>
          </div>
        </div>
        <hr class="margin-top">
      </div>
      <a class="btn btn-default" @click="selected = !selected">
        <icon name="wrench" :aria-hidden="true"></icon>
        <span style="vertical-align: text-buttom"> Configuración Cuenta</span>
      </a>
      <!-- CONFIGURACION DE CUENTA -->
      <div v-if="selected" class="margin-top">
        <div class="col-xs-12">
          <h3><span style="vertical-align: super"> Mis datos</span></h3>
          <hr>
        </div>
      </div>
      
    </div> <!-- /container -->
  </section>

</template>

<script>
import { mapGetters } from 'vuex'
import controller from '~/controllers/admin/entrepreneurs'

export default {
  asyncData ({ app }) {
    return controller.GETData(app, this)
  },
  data () {
    return {
      selected: false
    }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  head () {
    return {
      title: 'Mi Cuenta'
    }
  }
}
</script>