<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva categoría</h1>
        <div>
          <label>Nombre</label>
          <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="cat.NOMB_CATEGORIA"/>
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div>
          <label>Descripción</label>
          <input v-validate data-vv-rules="required" data-vv-as="descripción" name="description" type="text" v-model="cat.DESC_CATEGORIA"/>
          <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
        </div>
        <div>
          <label>Categoria Padre</label>
          <select v-validate data-vv-rules="required" data-vv-as="categoría padre" name="parent" v-model="cat.IDEN_CATEGORIA_PADRE">
            <option v-bind:key="cat.IDEN_CATEGORIA" v-for="cat in categories" v-if='cat.FLAG_VIGENTE' :value="cat.IDEN_CATEGORIA">{{ cat.NOMB_CATEGORIA }}</option>
          </select>
          <span v-show="errors.has('parent')">{{ errors.first('parent') }}</span>
        </div>
        <div>
          <button class="btn btn-success" v-on:click="addCategory">Agegar</button>
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
  name: 'NewCategory',
  data () {
    return {
      cat: {},
      categories: {},
      error: false
    }
  },
  mounted () {
    categoriescontroller.listCategories(this)
  },
  methods: {
    // Llamar función addPost en controller
    addCategory (event) {
      event.preventDefault()
      categoriescontroller.addCategory(this)
    }
  }
}
</script>
