<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Categorías</h1>
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
              <th>Estado</th>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="category.IDEN_CATEGORIA" v-for="category in categories">
              <td>
                <i class="fa fa-2x" v-bind:class="category.FLAG_VIGENTE ? 'fa-check' : 'fa-times'" v-bind:title="category.FLAG_VIGENTE ? 'Habilitado' : 'Deshabilitado'"></i>
              </td>
              <td>{{category.NOMB_CATEGORIA}}</td>
              <td>
                <nuxt-link :to="{ path: '/administracion/categorias/editar/'+category.IDEN_CATEGORIA }" class="btn btn-secondary">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </nuxt-link>
                <a class="btn" v-bind:class="category.FLAG_VIGENTE ? 'btn-danger' : 'btn-success'" v-on:click="setState(category)" v-bind:title="category.FLAG_VIGENTE ? 'Deshabilitar' : 'Habilitar'">
                  <i class="fa" v-bind:class="category.FLAG_VIGENTE ? 'fa-times' : 'fa-check'"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nuxt-link :to="{ path: '/administracion/categorias/nueva' }" class="btn btn-success">Agregar</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/admin/categories'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    setState: category => {
      controller.setState(category)
    }
  }
}
</script>
