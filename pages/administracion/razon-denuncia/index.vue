<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Razones de denuncias</h1>
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
          <tr :key="denouncereason.IDEN_MOTIVO_DENUNCIA" v-for="denouncereason in denouncereasons">
            <td>
              <i class="fa fa-check fa-2x" title="Habilitado" v-show='denouncereason.FLAG_VIGENTE'></i>
              <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!denouncereason.FLAG_VIGENTE'></i>
            </td>
            <td>{{denouncereason.NOMB_MOTIVO_DENUNCIA}}</td>
            <td>
              <a class="btn btn-danger" v-on:click="setState(denouncereason)" v-show='denouncereason.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" v-on:click="setState(denouncereason)" v-show='!denouncereason.FLAG_VIGENTE'>
                <i class="fa fa-check" title="Habilitar"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <nuxt-link to="/administracion/razon-denuncia/nuevo" class="btn btn-success">Agregar</nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import controller from '~/controllers/admin/denouncereasons'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    setState: denouncereason => {
      controller.setState(denouncereason)
    }
  }
}
</script>
