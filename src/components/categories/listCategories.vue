<<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
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
      <table class="table">
  <thead>
    <tr>
      <th>Estado</th>
      <th>ID</th>
      <th>Categoría</th>
      <th>Cat. Padre</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <i class="fa fa-check fa-2x" title="Habilitado"></i>
        <i class="fa fa-times fa-2x" title="Deshabilitado"></i>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <a class="btn btn-secondary" href="#">
          <i class="fa fa-pencil-square-o" title="Editar"></i>
        </a>
        <a class="btn btn-danger" href="#">
          <i class="fa fa-times" title="Deshabilitar"></i>
        </a>
        <a class="btn btn-success" href="#">
          <i class="fa fa-check" title="Habilitar"></i>
        </a>
    </td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCategories',
  data () {
    return { }
  },
  mounted () { },
  methods: { }
}
</script>
