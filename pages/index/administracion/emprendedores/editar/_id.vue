<template>
  <section id="publicacion" class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 fondo-beige">
          <h2 class="text-center">Editar Emprendedor</h2>
          <form @submit.prevent="validateBeforeSubmit">
            <div class="form-group margin-top">
              <label for="name">Nombre de fantasía</label>
              <input v-validate data-vv-rules="required" data-vv-as="nombre" name="name" type="text" v-model="entrepreneur.DESC_NOMBRE_FANTASIA" class="form-control"/>
              <small class="text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</small>
            </div>
            <div class="form-group margin-top">
              <label for="realname">Nombre Empresa</label>
              <input v-validate data-vv-rules="required" data-vv-as="nombre empresa" name="realname" type="text" v-model="entrepreneur.DESC_NOMBRE_EMPRESA" class="form-control"/>
              <small class="text-danger" v-show="errors.has('realname')">{{ errors.first('realname') }}</small>
            </div>
            <div class="form-group margin-top">
              <label for="rut">RUT</label>
              <input v-validate data-vv-rules="required|alpha_num" data-vv-as="RUT" name="rut" type="text" v-model="rut" class="form-control"/>
              <small class="text-danger" v-show="errors.has('rut')">{{ errors.first('rut') }}</small>
            </div>
            <div class="form-group margin-top">
              <label for="description">Descripcion</label>
              <textarea v-validate data-vv-rules="required" data-vv-as="descripción" name="description" type="text" v-model="entrepreneur.DESC_EMPRENDEDOR" class="form-control"></textarea>
              <small class="text-danger" v-show="errors.has('description')">{{ errors.first('description') }}</small>
            </div>
            <button type="submit" class="btn btn-default">Guardar</button>
          </form>
          <div v-if='message'>
            <span>{{message}}</span>
          </div>
        </div>
      </div>
    </div><!-- /container -->
  </section><!-- /Tabla Publicaciones -->
</template>


<script>
import controller from '~/controllers/admin/entrepreneurs'

export default {
  data () {
    return {
      message: false
    }
  },
  asyncData ({app, params}) {
    return controller.GET(app, params.id)
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
