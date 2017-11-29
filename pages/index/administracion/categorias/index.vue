<template>
  <section class="container-fluid" id="admin-faq">
    <div class="container fondo-beige">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Categorías</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 margin-top">
          <nuxt-link to="/administracion/categorias/nueva" class="btn btn-tabla"><i class="fa fa-plus"></i> Agregar</nuxt-link>
        </div>
        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 margin-top">
          <form class="input-group text-truncate">
            <input class="form-control" name="search" placeholder="Buscar" autocomplete="off" autofocus="autofocus" type="text">
            <div class="input-group-btn">
              <button class="btn btn-outline-success" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div class="row margin-top">
        <div class="col-xs-12 table-responsive">
          <table class="table table-hover table-condensed">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Nombre</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody :key="category.IDEN_CATEGORIA" v-for="category in categories">
              <!-- CATEGORÍAS -->
              <tr data-toggle="collapse" :data-target="'#'+category.IDEN_CATEGORIA" @click="selected = category.IDEN_CATEGORIA, open= !open">
                <td>
                  <i class="fa fa-2x" v-bind:class="category.FLAG_VIGENTE ? 'fa-check' : 'fa-times'" v-bind:title="category.FLAG_VIGENTE ? 'Habilitado' : 'Deshabilitado'"></i>
                </td>
                <td><i v-if="category.subcategorias.length > 0" :class="selected == category.IDEN_CATEGORIA && open ? 'fa fa-caret-down' : 'fa fa-caret-right' "></i> {{category.NOMB_CATEGORIA}}</td>
                <td>
                  <nuxt-link :to="{ path: '/administracion/categorias/editar/'+category.IDEN_CATEGORIA }" class="btn btn-secondary">
                    <i class="fa fa-pencil-square-o" title="Editar"></i>
                  </nuxt-link>
                  <a class="btn" v-bind:class="category.FLAG_VIGENTE ? 'btn-danger' : 'btn-success'" v-on:click="setState(category)" v-bind:title="category.FLAG_VIGENTE ? 'Deshabilitar' : 'Habilitar'">
                    <i class="fa" v-bind:class="category.FLAG_VIGENTE ? 'fa-times' : 'fa-check'"></i>
                  </a>
                </td>
              </tr>
              <!-- SUBCATEGORÍAS -->
              <tr :id="category.IDEN_CATEGORIA" v-for="subcategory in category.subcategorias" :key="subcategory.IDEN_CATEGORIA" class="collapse">
                <td>
                  <i class="fa fa-2x" v-bind:class="subcategory.FLAG_VIGENTE ? 'fa-check' : 'fa-times'" v-bind:title="subcategory.FLAG_VIGENTE ? 'Habilitado' : 'Deshabilitado'"></i>
                </td>
                <td>{{subcategory.NOMB_CATEGORIA}}</td>
                <td>
                  <nuxt-link :to="{ path: '/administracion/categorias/editar/'+subcategory.IDEN_CATEGORIA }" class="btn btn-secondary">
                    <i class="fa fa-pencil-square-o" title="Editar"></i>
                  </nuxt-link>
                  <a class="btn" v-bind:class="subcategory.FLAG_VIGENTE ? 'btn-danger' : 'btn-success'" v-on:click="setState(subcategory)" v-bind:title="subcategory.FLAG_VIGENTE ? 'Deshabilitar' : 'Habilitar'">
                    <i class="fa" v-bind:class="subcategory.FLAG_VIGENTE ? 'fa-times' : 'fa-check'"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import controller from '~/controllers/admin/categories'

export default {
  asyncData ({ app }) {
    return controller.GETAll(app)
  },
  data () {
    return {
      selected: 'fa fa-caret-right',
      open: false
    }
  },
  methods: {
    setState (category) {
      controller.setState(this, category)
    }
  }
}
</script>
