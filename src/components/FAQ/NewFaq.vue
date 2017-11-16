<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva Pregunta Frecuente</h1>
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
            <button class="btn btn-success">Agregar</button>
          </div>
        </form>
        <div>
          <span v-show='error'>{{error}}</span>
          <span v-show='success'>Agregado exitosamente!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faqctrl from '@/components/FAQ/controller/faqcontroller.js'
export default {
  name: 'NewFaq',
  data () {
    return {
      f: {},
      error: '',
      success: false
    }
  },
  methods: {
    addFaq (event) {
      event.preventDefault()
      faqctrl.addFaq(this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          faqctrl.addFaq(this)
        }
      })
    }
  }
}
</script>
