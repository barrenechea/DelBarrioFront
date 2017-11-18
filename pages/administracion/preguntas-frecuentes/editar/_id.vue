<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar Pregunta Frecuente</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Pregunta</label>
            <input v-validate data-vv-rules="required|min:5|max:255" data-vv-as="pregunta" name="question" type="text" v-model="f.NOMB_FAQ"/>
            <span v-show="errors.has('question')">{{ errors.first('question') }}</span>
          </div>
          <div>
            <label>Respuesta</label>
            <input v-validate data-vv-rules="required|min:5|max:1000" data-vv-as="respuesta" name="answer" type="text" v-model="f.DESC_FAQ"/>
            <span v-show="errors.has('answer')">{{ errors.first('answer') }}</span>
          </div>
          <div>
            <button class="btn btn-success">Modificar</button>
          </div>
        </form>
        <div>
          <span v-show='error.length>0'>{{error}}</span>
          <span v-show='success'>Editado exitosamente!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '~/controllers/admin/faqs'

export default {
  data () {
    return {
      error: '',
      success: false
    }
  },
  asyncData ({ params }) {
    return controller.GET(params.id)
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) controller.PUT(this)
      })
    }
  }
}
</script>
