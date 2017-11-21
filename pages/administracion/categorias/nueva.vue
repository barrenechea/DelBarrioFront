<template>
  <div class="container">
    <div col-md-12><br/></div> <!--Esto está ordinario. Cambiar-->
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nueva categoría</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre</label>
            <input v-validate data-vv-rules="required|min:5|max:50|alpha_spaces" data-vv-as="nombre" name="name" type="text" v-model="category.NOMB_CATEGORIA"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div>
            <label>Categoria Padre</label>
            <select v-model="category.IDEN_CATEGORIA_PADRE">
              <option v-bind:key="c.IDEN_CATEGORIA" v-for="c in categories" v-bind:value="c.IDEN_CATEGORIA">{{c.NOMB_CATEGORIA}}</option>
            </select>
          </div>
          <div>
            <button class="btn btn-success" type="submit">Agregar</button>
          </div>
        </form>
        <div v-if='message'>
          <span>{{message}}</span>
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
      category: {},
      message: false
    }
  },
  asyncData () {
    return controller.GETAll()
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          controller.POST(this)
        }
      })
    }
  }
}
</script>
