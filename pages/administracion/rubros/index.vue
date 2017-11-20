<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Rubros</h1>
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
            <tr :key="workfield.IDEN_RUBRO" v-for="workfield in workfields">
              <td>
                <i class="fa fa-check fa-2x" title="Habilitado" v-show='workfield.FLAG_VIGENTE'></i>
                <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!workfield.FLAG_VIGENTE'></i>
              </td>
              <td>{{workfield.NOMB_RUBRO}}</td>
              <td>
                <nuxt-link :to="{ path: '/administracion/rubros/editar/'+ workfield.IDEN_RUBRO }" class="btn btn-secondary">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </nuxt-link>
                <a class="btn" v-bind:class="workfield.FLAG_VIGENTE ? 'btn-danger' : 'btn-success'" v-on:click="setState(workfield)" v-bind:title="workfield.FLAG_VIGENTE ? 'Deshabilitar' : 'Habilitar'">
                  <i class="fa" v-bind:class="workfield.FLAG_VIGENTE ? 'fa-times' : 'fa-check'"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nuxt-link :to="{ path: '/administracion/rubros/nuevo/' }" class="btn btn-success">Agregar</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/admin/workfields'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    setState: workfield => {
      controller.setState(workfield)
    }
  }
}
</script>
