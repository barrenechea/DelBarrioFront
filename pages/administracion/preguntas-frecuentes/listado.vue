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
                <nuxt-link :to="{ path: '/administracion/preguntas-frecuentes/editar/'+f.IDEN_FAQ }" class="btn btn-secondary">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </nuxt-link>
                <a class="btn btn-danger" v-on:click="deleteFaq(f)">
                  <i class="fa fa-times" title="Deshabilitar"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nuxt-link :to="{ path: '/administracion/preguntas-frecuentes/nueva' }" class="btn btn-success" >Agregar</nuxt-link>
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
