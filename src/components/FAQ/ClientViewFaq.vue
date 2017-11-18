<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Preguntas Frecuentes</h1>
        <div class="row">
            <div v-bind:key="f.IDEN_FAQ" v-for="f in faqs">
            <h2>{{f.NOMB_FAQ}}</h2>
            <p>{{f.DESC_FAQ}}</p>
            </div>
        </div>
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
  }
}
</script>
