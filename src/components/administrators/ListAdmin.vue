<<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Administradores</h1>
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
            <th>EMAIL</th>
            <th>RUT Usuario</th>
          </tr>
        </thead>
        <tbody> 
          <tr v-for="adm in administrators">
            <div v-show="adm.IDEN_ROL == 3">
              <td>{{adm.EMAIL_USUARIO}}</td> 
              <td>{{adm.RUT_USUARIO }}-{{adm.DV_USUARIO}}</td>
              <td>
                <a class="btn btn-secondary" v-bind:href="'/administracion/administradores/editar/'+adm.IDEN_USUARIO">
                  <i class="fa fa-pencil-square-o" title="Editar"></i>
                </a>
                <a class="btn btn-danger" v-on:click="setState(adm.IDEN_USUARIO, false)" v-show='adm.FLAG_VIGENTE'>
                  <i class="fa fa-times" title="Deshabilitar"></i>
                </a>
                <a class="btn btn-success" v-on:click="setState(adm.IDEN_USUARIO, true)" v-show='!adm.FLAG_VIGENTE'>
                  <i class="fa fa-check" title="Habilitar"></i>
                </a>
              </td>
              </div>
            </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/administradores/nuevo'">Agregar</a>
    </div>
  </div>
</div>
</template>

<script>
import administratorscontroller from '@/components/administrators/controller/administratorscontroller.js'
import userscontroller from '@/components/users/controller/userscontroller.js'

export default {
  name: 'administrators',
  data () {
    return {
      administrators: {}
    }
  },
  mounted () {
    administratorscontroller.listsAdmin(this)
  },
  methods: {
    setState: function (id, state) {
      event.preventDefault()
      userscontroller.setState(id, state, this)
    }
  }
}
</script>