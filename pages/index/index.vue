<template>
  <div>
    <section id="busqueda" class="container-fluid">
      <div class="container">
            <h4>Búsqueda avanzada</h4>
            <form class="margin-top">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="buscas">¿Qué Búscas?</label>
                    <input type="text" class="form-control" placeholder="Buscar...">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group pricerange">
                    <label for="rangodeprecio"class="col-sm-12">Rango de precio {{search.minPrice}} </label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" placeholder="Desde" v-model="search.minPrice">
                    </div>
                    <div class="col-sm-6 margin-top-responsive-20">
                      <input type="text" class="form-control" placeholder="Hasta">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                <label for="tipo" class="margin-top-20">Tipo</label>
                <div class="btn-group" style="width:100%" data-toggle="buttons">
                  <label class="btn btn-info col-sm-4">
                    <input type="checkbox" autocomplete="off" v-model="type.product">
                    <icon label="Check">
                      <icon name="square"></icon>
                      <icon v-if="type.product" name="check" class="text-warning"></icon>
                    </icon>
                    Producto {{type.product}}
                  </label>
                  <label class="btn btn-info col-sm-4">
                    <input type="checkbox" autocomplete="off" v-model="type.service">
                    <icon label="Check">
                      <icon name="square"></icon>
                      <icon v-if="type.service" name="check" class="text-info"></icon>
                    </icon>
                    Servicio
                  </label>
                  <label class="btn btn-info col-sm-4">
                    <input type="checkbox" autocomplete="off" v-model="type.sale">
                    <icon label="Check">
                      <icon name="square"></icon>
                      <icon v-if="type.sale" name="check" class="text-info"></icon>
                    </icon>
                    Oferta
                  </label>
                  </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="categoria" class="margin-top-20">Categoria</label>
                  <select class="form-control">
                    <option>1</option>
                  </select>
                </div>
              </div>
              </div>
              <div class="col-sm-12">
                <button type="submit" class="btn btn-default">Buscar</button>
              </div>
            </form><!-- /Formulario -->
      </div><!-- /container -->
    </section><!-- /Busqueda -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      search: {},
      type: {product: true, service: false, sale: false}
    }
  }
}
</script>
