<<template>
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
          <tr v-for="reason in reasons">
            <td>
              <i class="fa fa-check fa-2x" title="Habilitado" v-show='reason.FLAG_VIGENTE'></i>
              <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!reason.FLAG_VIGENTE'></i>
            </td>
            <td>{{reason.NOMB_MOTIVO_DESHABILITACION}}</td>
            <td>
              <a class="btn btn-danger" v-on:click="setState(reason.IDEN_MOTIVO_DESHABILITACION, false)" v-show='reason.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" v-on:click="setState(reason.IDEN_MOTIVO_DESHABILITACION, true)" v-show='!reason.FLAG_VIGENTE'>
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
import reasonscontroller from '@/components/deactivation-reasons/controller/deactivationreasoncontroller.js'
export default {
  name: 'ListDeactivationReasons',
  data () {
    return {
      reasons: {}
    }
  },
  mounted () {
    reasonscontroller.listReasons(this)
  },
  methods: {
    setState: function (id, state) {
      event.preventDefault()
      reasonscontroller.setState(id, state, this)
    }
  }
}
</script>
