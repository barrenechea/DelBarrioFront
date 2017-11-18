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
import controller from '~/controllers/admin/faqs'

export default {
  asyncData () {
    return controller.GETAll()
  }
}
</script>
