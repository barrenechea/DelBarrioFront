<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Emprendedores</h1>
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
            <tr :key="entrepreneur.IDEN_CATEGORIA" v-for="entrepreneur in entrepreneurs">
              <td>
                <i class="fa fa-2x" v-bind:class="entrepreneur.FLAG_VIGENTE ? 'fa-check' : 'fa-times'" v-bind:title="entrepreneur.FLAG_VIGENTE ? 'Habilitado' : 'Deshabilitado'"></i>
              </td>
              <td><nuxt-link :to="{ path: '/emprendedores/' + entrepreneur.IDEN_EMPRENDEDOR }">{{entrepreneur.DESC_NOMBRE_FANTASIA}}</nuxt-link></td>
              <td>
                <nuxt-link :to="{ path: '/administracion/emprendedores/editar/'+entrepreneur.IDEN_EMPRENDEDOR }" class="btn btn-secondary">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </nuxt-link>
                <a class="btn" v-bind:class="entrepreneur.usuario.FLAG_VIGENTE ? 'btn-danger' : 'btn-success'" v-on:click="setState(entrepreneur)" v-bind:title="entrepreneur.usuario.FLAG_VIGENTE ? 'Deshabilitar' : 'Habilitar'">
                  <i class="fa" v-bind:class="entrepreneur.usuario.FLAG_VIGENTE ? 'fa-times' : 'fa-check'"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nuxt-link :to="{ path: '/administracion/emprendedores/nuevo' }" class="btn btn-success">Agregar</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/admin/entrepreneurs'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    setState: entrepreneur => {
      controller.setState(entrepreneur)
    }
  }
}
</script>
