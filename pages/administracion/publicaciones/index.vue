<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Tus publicaciones</h1>
        <div class="row">
          <div class="col-md-4 offset-md-8">
            <div class="form-group">
              <input class="form-control form-control-lg" type="text" id="inputLarge" placeholder="Buscar">
            </div>
          </div>
        </div>
        <table class="table table-responsive">
          <thead>
            <tr>
              <th></th>
              <th>Título</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="post.IDEN_PUBLICACION" v-for="post in posts">
              <td>
                <i class="fa fa-2x" v-bind:class="post.FLAG_VIGENTE ? 'fa-check' : 'fa-times'" v-bind:title="post.FLAG_VIGENTE ? 'Habilitado' : 'Deshabilitado'"></i>
              </td>
              <td>{{post.NOMB_PUBLICACION}}</td>
              <td>{{post.CODI_TIPO_PUBLICACION == 'P' ? 'Producto' : 'Servicio' }}</td>
              <td>{{post.categoria.NOMB_CATEGORIA}}</td>
              <td>
                <nuxt-link :to="{ path: '/administracion/publicaciones/editar/'+post.IDEN_PUBLICACION }" class="btn btn-secondary">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </nuxt-link>
                <a class="btn" v-if="!post.FLAG_BAN" v-bind:class="post.FLAG_VIGENTE ? 'btn-danger' : 'btn-success'" @click="setState(post)" v-bind:title="post.FLAG_VIGENTE ? 'Deshabilitar' : 'Habilitar'">
                  <i class="fa" v-bind:class="post.FLAG_VIGENTE ? 'fa-times' : 'fa-check'"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nuxt-link :to="{ path: '/administracion/publicaciones/nueva' }" class="btn btn-success">Agregar</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/posts'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    setState: post => {
      controller.setState(post)
    }
  }
}
</script>
