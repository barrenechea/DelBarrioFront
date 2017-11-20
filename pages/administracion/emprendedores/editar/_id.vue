<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Editar Emprendedor</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <div>
            <label>Nombre de fantasía</label>
            <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="entrepreneur.DESC_NOMBRE_FANTASIA"/>
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div>
            <label>Nombre Empresa</label>
            <input v-validate data-vv-rules="required" data-vv-as="nombre empresa" name="realname" type="text" v-model="entrepreneur.DESC_NOMBRE_EMPRESA"/>
            <span v-show="errors.has('realname')">{{ errors.first('realname') }}</span>
          </div>
          <div>
            <label>RUT</label>
            <input v-validate data-vv-rules="required|alpha_num" data-vv-as="RUT" name="rut" type="text" v-model="rut"/>
            <span v-show="errors.has('rut')">{{ errors.first('rut') }}</span>
          </div>
          <div>
            <label>Descripcion</label>
            <textarea v-validate data-vv-rules="required" data-vv-as="descripción" name="description" type="text" v-model="entrepreneur.DESC_EMPRENDEDOR"></textarea>
            <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
          </div>
          <div>
            <button class="btn btn-success" type="submit">Editar</button>
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
import controller from '~/controllers/admin/entrepreneurs'

export default {
  data () {
    return {
      message: false
    }
  },
  asyncData ({ params }) {
    return controller.GET(params.id)
      .then(entrepreneur => {
        return {
          id: entrepreneur.id,
          entrepreneur: entrepreneur.entrepreneur,
          rut: entrepreneur.entrepreneur.RUT_EMPRENDEDOR + entrepreneur.entrepreneur.DV_EMPRENDEDOR
        }
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
