<<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
      <h1>Preguntas Frecuentes</h1>
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
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="f in faqs">
            <td>{{f.NOMB_FAQ}}</td>
            <td>{{f.DESC_FAQ}}</td>
            <td>
              <a class="btn btn-secondary" v-bind:href="'/administracion/preguntas-frecuentes/editar/'+f.IDEN_FAQ">
                <i class="fa fa-pencil-square-o" title="Editar"></i>
              </a>
              <a class="btn btn-danger" v-on:click="deleteFaq(f.IDEN_FAQ)">
                <i class="fa fa-times" title="Deshabilitar"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a class="btn btn-success" v-bind:href="'/administracion/preguntas-frecuentes/nueva'">Agregar</a>
    </div>
  </div>
</div>
</template>

<script>
import faqctrl from '@/components/FAQ/controller/faqcontroller.js'
export default {
  name: 'faq',
  data () {
    return {
      faqs: {}
    }
  },
  mounted () {
    faqctrl.listFaqs(this)
  },
  methods: {
    deleteFaq: function (id) {
      event.preventDefault()
      faqctrl.deleteFaq(id, this)
    }
  }
}
</script>
