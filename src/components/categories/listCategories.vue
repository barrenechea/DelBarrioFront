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
            <th>ID</th>
            <th>Categoría</th>
            <th>Cat. Padre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in categories">
            <td>
              <i class="fa fa-check fa-2x" title="Habilitado" v-show='cat.FLAG_VIGENTE'></i>
              <i class="fa fa-times fa-2x" title="Deshabilitado" v-show='!cat.FLAG_VIGENTE'></i>
            </td>
            <td>{{cat.IDEN_CATEGORIA}}</td>
            <td>{{cat.NOMB_CATEGORIA}}</td>
            <td>
              <span v-show='cat.IDEN_CATEGORIA_PADRE == null'>No posee{{cat.IDEN_CATEGORIA_PADRE}}</span>
              <span v-show='cat.IDEN_CATEGORIA_PADRE != null'>{{cat.IDEN_CATEGORIA_PADRE}}</span>
            </td>
            <td>{{cat.DESC_CATEGORIA}}</td>
            <td>
              <a class="btn btn-secondary" href="#">
                <i class="fa fa-pencil-square-o" title="Editar" v-bind:href="'/administracion/editar-categoria'"></i>
              </a>
              <a class="btn btn-danger" href="#" v-show='cat.FLAG_VIGENTE'>
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
              <a class="btn btn-success" href="#" v-show='!cat.FLAG_VIGENTE'>
                <i class="fa fa-check" title="Habilitar"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/nueva-categoria'">Agregar</a>
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
  }
}
</script>
