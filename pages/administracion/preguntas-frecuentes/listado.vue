<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Preguntas Frecuentes</h1>
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
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="f.IDEN_FAQ" v-for="f in faqs">
              <td>{{f.NOMB_FAQ}}</td>
              <td>{{f.DESC_FAQ}}</td>
              <td>
                <a class="btn btn-secondary" v-bind:href="'/administracion/preguntas-frecuentes/editar/'+f.IDEN_FAQ">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </a>
                <a class="btn btn-danger" v-on:click="deleteFaq(f)">
                  <i class="fa fa-times" title="Deshabilitar"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <a class="btn btn-success" v-bind:href="'/administracion/preguntas-frecuentes/nueva'">Agregar</a>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/admin/faqs'

export default {
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    deleteFaq: function (f) {
      controller.DELETE(f, this)
    }
  }
}
</script>
