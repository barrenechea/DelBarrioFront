<<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Rubros</h1>
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
          <tr v-for="f in fields">
            <td>
              <i class="fa fa-check fa-2x" title="Habilitado" v-show='f.FLAG_VIGENTE'></i>
              <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!f.FLAG_VIGENTE'></i>
            </td>
            <td>{{f.NOMB_RUBRO}}</td>
            <td>
              <a class="btn btn-secondary" v-bind:href="'/administracion/rubros/editar/'+f.IDEN_RUBRO">
                <i class="fa fa-pencil-square-o" title="Editar"></i>
              </a>
              <a class="btn btn-danger" v-on:click="setState(f.IDEN_RUBRO, false)" v-show='f.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" v-on:click="setState(f.IDEN_RUBRO, true)" v-show='!f.FLAG_VIGENTE'>
                <i class="fa fa-check" title="Habilitar"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/rubros/nuevo'">Agregar</a>
    </div>
  </div>
</div>
</template>
<script>
  import fieldcontroller from '@/components/fields/controller/fieldscontroller.js'
  export default {
    name: 'ListFields',
    data () {
      return {
        fields: {}
      }
    },
    mounted () {
      fieldcontroller.listFields(this)
    },
    methods: {
      setState: function (id, state) {
        event.preventDefault()
        fieldcontroller.setState(id, state, this)
      }
    }
  }
</script>