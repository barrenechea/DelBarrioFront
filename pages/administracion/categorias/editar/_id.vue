<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar categoría</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:50|alpha_spaces" data-vv-as="nombre" name="name" type="text" v-model="category.NOMB_CATEGORIA"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div v-if="category.subcategorias.length > 0">
            <label>Categoria Padre</label>
            <select v-model="category.IDEN_CATEGORIA_PADRE">
              <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
            </select>
          </div>
          <div>
            <button class="btn btn-success">Actualizar</button>
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
import controller from '~/controllers/admin/categories'

export default {
  data () {
    return {
      error: '',
      success: false
    }
  },
  asyncData ({ params }) {
    return controller.GET(params.id)
      .then(category => {
        return controller.GETAll()
          .then(categories => {
            return {
              id: category.id,
              category: category.category,
              categories: categories.categories
            }
          })
      })
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
