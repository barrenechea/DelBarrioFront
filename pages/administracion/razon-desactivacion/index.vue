<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Razones de deshabilitación de cuenta</h1>
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
          <tr :key="deactivationreason.IDEN_MOTIVO_DESHABILITACION" v-for="deactivationreason in deactivationreasons">
            <td>
              <i class="fa fa-check fa-2x" title="Habilitado" v-show='deactivationreason.FLAG_VIGENTE'></i>
              <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!deactivationreason.FLAG_VIGENTE'></i>
            </td>
            <td>{{deactivationreason.NOMB_MOTIVO_DESHABILITACION}}</td>
            <td>
              <a class="btn btn-danger" v-on:click="setState(deactivationreason)" v-show='deactivationreason.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" v-on:click="setState(deactivationreason)" v-show='!deactivationreason.FLAG_VIGENTE'>
                <i class="fa fa-check" title="Habilitar"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/razon-desactivacion/nuevo'">Agregar</a>
    </div>
  </div>
</div>
</template>

<script>
import controller from '~/controllers/admin/deactivationreasons'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    setState: deactivationreason => {
      controller.setState(deactivationreason)
    }
  }
}
</script>
