<template>
  <section id="admin-faq" class="container-fluid">
    <div class="container fondo-beige">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Clientes</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-md-offset-8 col-sm-6 col-sm-offset-3 margin-top">
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
                <th>E-mail</th>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="client.IDEN_PERSONA" v-for="client in clients">
                <td><i class="fa fa-2x" v-bind:class="client.usuario.FLAG_BAN ? 'fa-times' : 'fa-check'" v-bind:title="client.usuario.FLAG_BAN ? 'Deshabilitado' : 'Habilitado'"></i></td>
                <td>{{client.usuario.EMAIL_USUARIO}}</td>
                <td>{{client.NOMBRES + ' ' + client.APELLIDO_PATERNO+ ' ' +client.APELLIDO_MATERNO}}</td>
                <td>{{client.FECH_FECHA_NACIMIENTO | dateFormat }}</td>
                <td>
                  <a class="btn" v-bind:class="client.usuario.FLAG_BAN ? 'btn-success' : 'btn-danger'" v-on:click="setState(client)" v-bind:title="client.usuario.FLAG_BAN ? 'Habilitar' : 'Deshabilitar'">
                    <i class="fa" v-bind:class="client.usuario.FLAG_BAN ? 'fa-check' : 'fa-times'"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table><!-- /tabla -->
                      
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
        <!-- /paginacion -->              
        </div>
      </div>
    </div><!-- /container -->
  </section><!-- /Tabla Publicaciones -->
</template>

<script>
import controller from '~/controllers/admin/clients'
import moment from 'moment'

export default {
  asyncData ({ app }) {
    return controller.GETAll(app)
  },
  methods: {
    setState: client => {
      controller.setState(this, client)
    }
  },
  filters: {
    dateFormat: function (date) {
      return moment(String(date)).format('DD/MM/YYYY')
    }
  }
}
</script>
