<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva categoría</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="cat.NOMB_CATEGORIA"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div>
            <label>Categoria Padre</label>
            <select v-model="cat.IDEN_CATEGORIA_PADRE">
              <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
            </select>
          </div>
          <div>
            <button class="btn btn-success" type="submit">Agregar</button>
          </div>
        </form>
        
        <div>
          <span v-show='error'>Error en el formulario</span>
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
    addCategory (event) {
      event.preventDefault()
      categoriescontroller.addCategory(this)
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          categoriescontroller.addCategory(this)
        }
      })
    }
  }
}
</script>
