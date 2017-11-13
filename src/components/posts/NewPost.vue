<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva publicación</h1>
        <div>
          <label>Nombre</label>
          <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="publication.NOMB_PUBLICACION"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div>
          <label>Categoria</label>
          <select v-model="publication.IDEN_CATEGORIA">
            <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
          </select>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="addPublication">Agregar</button>
        </div>
        <div>
          <span v-show='error'>Error</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postscontroller from '@/components/posts/controller/postscontroller.js'
import categoriescontroller from '@/components/categories/controller/categoriescontroller.js'
export default {
  name: 'NewPublication',
  data () {
    return {
      post: {},
      categories: {},
      subcategories: {},
      error: false
    }
  },
  mounted () {
    categoriescontroller.listCategories(this)
  },
  methods: {
    // Llamar función addCategory en controller
    addPost (event) {
      event.preventDefault()
      postscontroller.addPost(this)
    }
  }
}
</script>
