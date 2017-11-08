<<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Categorías</h1>
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
          <tr v-for="cat in categories">
            <td>
              <i class="fa fa-check fa-2x" title="Habilitado" v-show='cat.FLAG_VIGENTE'></i>
              <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!cat.FLAG_VIGENTE'></i>
            </td>
            <td>{{cat.NOMB_CATEGORIA}}</td>
            <td>
              <a class="btn btn-secondary" v-bind:href="'/administracion/categorias/editar/'+cat.IDEN_CATEGORIA">
                <i class="fa fa-pencil-square-o" title="Editar"></i>
              </a>
              <a class="btn btn-danger" v-on:click="setState(cat.IDEN_CATEGORIA, false)" v-show='cat.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" v-on:click="setState(cat.IDEN_CATEGORIA, true)" v-show='!cat.FLAG_VIGENTE'>
                <i class="fa fa-check" title="Habilitar"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/categorias/nueva'">Agregar</a>
    </div>
  </div>
</div>
</template>

<script>
import categoriescontroller from '@/components/categories/controller/categoriescontroller.js'
export default {
  name: 'categories',
  data () {
    return {
      categories: {}
    }
  },
  mounted () {
    categoriescontroller.listCategories(this)
  },
  methods: {
    setState: function (id, state) {
      event.preventDefault()
      categoriescontroller.setState(id, state, this)
    }
  }
}
</script>
