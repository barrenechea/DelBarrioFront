<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva Pregunta Frecuente</h1>
        <div>
          <label>Pregunta</label>
          <input v-validate data-vv-rules="required" data-vv-as="pregunta" name="question" type="text" v-model="f.NOMB_FAQ"/>
          <span v-show="errors.has('question')">{{ errors.first('question') }}</span>
        </div>
        <div>
          <label>Respuesta</label>
          <input v-validate data-vv-rules="required" data-vv-as="respuesta" name="answer" type="text" v-model="f.DESC_FAQ"/>
          <span v-show="errors.has('answer')">{{ errors.first('answer') }}</span>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="addFaq">Agregar</button>
        </div>
        <div>
          <span v-show='error'>Error</span>
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
      error: false
    }
  },
  methods: {
    addFaq (event) {
      event.preventDefault()
      faqctrl.addFaq(this)
    }
  }
}
</script>
