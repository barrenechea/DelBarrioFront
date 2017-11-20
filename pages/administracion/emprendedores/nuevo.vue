<template>
  <div class="container">
    <div class="bs-component">
      <div class="jumbotron">
        <h1>Nuevo Emprendedor</h1>
        <form @submit.prevent="validateBeforeSubmit">
          <h3>Emprendimiento</h3>
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
            <input v-validate data-vv-rules="required|alpha_num" data-vv-as="RUT" name="rut" type="text" v-model="entrepreneur.RUT_EMPRENDEDOR"/>
            <span v-show="errors.has('rut')">{{ errors.first('rut') }}</span>
          </div>
          <div>
            <label>Descripcion</label>
            <textarea v-validate data-vv-rules="required" data-vv-as="descripción" name="description" type="text" v-model="entrepreneur.DESC_EMPRENDEDOR"></textarea>
            <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
          </div>
          <hr>
          <h3>Usuario</h3>
          <div>
            <label>Correo electrónico</label>
            <input v-validate data-vv-rules="required|email" data-vv-as="correo electrónico" name="email" type="text" v-model="entrepreneur.EMAIL_USUARIO"/>
            <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
          <div>
            <label>Clave municipalidad</label>
            <input v-validate data-vv-rules="required" data-vv-as="clave de municipalidad" name="pass" type="text" v-model="entrepreneur.DESC_PASSWORD"/>
            <span v-show="errors.has('pass')">{{ errors.first('pass') }}</span>
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
import controller from '~/controllers/admin/entrepreneurs'

export default {
  data () {
    return {
      entrepreneur: {},
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
