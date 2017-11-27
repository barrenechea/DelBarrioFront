<template>
  <section id="admin-denuncias" class="container-fluid">
    <div class="container fondo-beige">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Denuncias Vigentes</h2>
        </div>
      </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-8 col-sm-6 col-sm-offset-3">
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
        <table class="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Realizado por</th>
                <th>Hacia</th>
                <th>Motivo</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="denounce in denounces" :key="denounce.iden_denounce">
                <td><a href="#">{{denounce.DESC_DENUNCIA}}</a></td>
                <td>Usuario A</td>
                <td>Emprendedor C</td>
                <td>{{denounce.DESC_DENUNCIA.substring(0,10)}}</td>
                <td>
                    <a href="#" class="btn btn-tabla" data-toggle="modal" data-target= "#modal" @click="denounceDetail = denounce">Ver detalle</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div><!-- /container -->
    <!--Modal-->
    <div class="modal fade" id="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Detalle de denuncia</h4>
          </div>
          <div class="modal-body">
            <p>Nombre publicación</p>
            <p>Nombre usuario denunciante</p>
            <p>{{denounceDetail.usuario.EMAIL_USUARIO}}</p>
            <p>motivo de denuncia</p>
            <p>{{denounceDetail.FECH_CREACION | dateFormat}}</p>
            <p>{{denounceDetail.DESC_DENUNCIA}}</p>
            
            <a style="cursor: pointer" @click="open = !open">Resolver</a>
            <div v-if="open">
              <h5 class="margin-top">Resolución de denuncia</h5>
              <form>
                <div class="form-group">
                  <label for="description">Descripción</label>
                  <textarea v-validate data-vv-rules="required|min:5|max:250" data-vv-as="descripción" name="description" v-model="denounceresolution.DESC_RESOLUCION" class="form-control"></textarea>
                  <small class="text-danger" v-show="errors.has('description')">{{ errors.first('description') }}</small>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
          </div>
        </div>
      </div>
    </div>
  </section><!-- /Tabla Publicaciones -->
</template>

<script>
import controller from '~/controllers/admin/denounces'
import moment from 'moment'

export default {
  asyncData ({ app }) {
    return controller.GETAll(app)
  },
  data () {
    return {
      denounceDetail: { usuario: {} },
      open: false,
      denounceresolution: {}
    }
  },
  methods: {
    setState: client => {
      controller.setState(this, client)
    }
  },
  filters: {
    dateFormat: function (date) {
      return moment(String(date)).format('DD/MM/YYYY HH:mm')
    }
  }
}
</script>
