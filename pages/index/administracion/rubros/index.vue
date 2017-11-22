<template>
  <section class="container-fluid" id="admin-faq">
    <div class="container fondo-beige">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Rubros</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 margin-top">
          <nuxt-link :to="{ path: '/administracion/rubros/nuevo' }" class="btn btn-tabla"><i class="fa fa-plus"></i> Agregar</nuxt-link>
        </div>
        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 margin-top">
          <form class="input-group text-truncate">
            <input class="form-control" name="search" placeholder="Buscar" autocomplete="off" autofocus="autofocus" type="text">
            <div class="input-group-btn">
              <button class="btn btn-outline-success" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div class="row margin-top">
        <div class="col-xs-12 table-responsive">
          <table class="table table-hover table-condensed">
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
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import controller from '~/controllers/admin/workfields'

export default {
  asyncData ({ app }) {
    return controller.GETAll(app)
  },
  methods: {
    setState: workfield => {
      controller.setState(this, workfield)
    }
  }
}
</script>
