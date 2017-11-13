<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar categoría</h1>
        <div>
          <label>Nombre</label>
          <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="cat.NOMB_CATEGORIA"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div v-if="cat.subcategorias.length> 0">
          <label>Categoria Padre</label>
          <select v-model="cat.IDEN_CATEGORIA_PADRE">
            <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
          </select>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="editCategory">Actualizar</button>
        </div>
        <div>
          <span v-show='error'>Error</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriescontroller from '@/components/categories/controller/categoriescontroller.js'
export default {
  name: 'EditCategory',
  category: ['id'],
  data () {
    return {
      cat: {
        subcategorias: []
      },
      categories: {},
      error: false
    }
  },
  mounted () {
    categoriescontroller.listCategories(this)
    categoriescontroller.getCategory(this)
  },
  methods: {
    editCategory (event) {
      event.preventDefault()
      categoriescontroller.editCategory(this)
    }
  }
}
</script>
