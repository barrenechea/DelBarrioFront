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
            <th>ID Usuario</th>
          </tr>
        </thead>
        <tbody> 
          <tr v-for="emp in entrepreneurs">
            <td>{{emp.DESC_EMPRENDEDOR}}</td> 
            <td>{{emp.DESC_CLAVE_MUNICIPALIDAD}}</td>
            <td>{{emp.DESC_NOMBRE_FANTASIA}}</td>
            <td>{{emp.DESC_NOMBRE_EMPRESA}}</td>
            <td>{{emp.IDEN_USUARIO}}</td>
            <td>
              <a class="btn btn-secondary" href="#"  v-bind:href="'/administracion/emprendedores/editar/'+emp.IDEN_EMPRENDEDOR">
                <i class="fa fa-pencil-square-o" title="Editar"></i>
              </a>
              <a class="btn btn-danger" href="#">
                <i class="fa fa-times" title="Deshabilitar"></i> <!--Pendiente a cuando llegue el objeto Usuario-->
              </a>
              <a class="btn btn-success" href="#">  <!--Pendiente a cuando llegue el objeto Usuario-->
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
import entrepreneurcontroller from '@/components/entrepreneurs/controller/entrepreneurcontroller.js'
export default {
  name: 'entrepreneurs',
  data () {
    return {
      entrepreneurs: {}
    }
  },
  mounted () {
    entrepreneurcontroller.listEntrepreneurs(this)
  }
}
</script>