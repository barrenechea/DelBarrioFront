<<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Emprendedores</h1>
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
            <th>Emprendedor</th>
            <th>Clave municipalidad</th>
            <th>Nombre de fantasía</th>
            <th>Nombre de la empresa</th>
            <th>RUT Usuario</th>
          </tr>
        </thead>
        <tbody> 
          <tr v-for="emp in entrepreneurs" v-if="emp.usuario != undefined">
            <td>{{emp.DESC_EMPRENDEDOR}}</td> 
            <td>{{emp.DESC_CLAVE_MUNICIPALIDAD}}</td>
            <td>{{emp.DESC_NOMBRE_FANTASIA}}</td>
            <td>{{emp.DESC_NOMBRE_EMPRESA}}</td>
            <td>{{emp.usuario.RUT_USUARIO }}-{{emp.usuario.DV_USUARIO}}</td>
            <td>
              <a class="btn btn-secondary" v-bind:href="'/administracion/emprendedores/editar/'+emp.IDEN_EMPRENDEDOR">
                <i class="fa fa-pencil-square-o" title="Editar"></i>
              </a>
              <a class="btn btn-danger" v-on:click="setState(emp.usuario.IDEN_USUARIO, false)" v-show='emp.usuario.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" v-on:click="setState(emp.usuario.IDEN_USUARIO, true)" v-show='!emp.usuario.FLAG_VIGENTE'>
                <i class="fa fa-check" title="Habilitar"></i>
              </a>
            </td>
            </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/emprendedores/nuevo'">Agregar</a>
    </div>
  </div>
</div>
</template>

<script>
import entrepreneurscontroller from '@/components/entrepreneurs/controller/entrepreneurscontroller.js'
import userscontroller from '@/components/users/controller/userscontroller.js'
import VeeValidate from 'vee-validate'

export default {
  name: 'entrepreneurs',
  data () {
    return {
      entrepreneurs: {}
    }
  },
  components: {
    VeeValidate
  },
  mounted () {
    entrepreneurscontroller.listEntrepreneurs(this)
  },

  methods: {
    setState: function (id, state) {
      event.preventDefault()
      userscontroller.setState(id, state, this)
    }
  }
}
</script>