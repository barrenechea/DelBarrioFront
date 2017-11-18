<template>
  <div>
    <section id="productos" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>Productos</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3 col-xs-6" v-bind:key="p.IDEN_POST" v-for="p in posts">
            <a v-bind:href="'/publicaciones/'+p.IDEN_PUBLICACION ">
              <img v-if="p.imagenes.length == 0" v-bind:src="'/img/no-image.jpg'" class="img-responsive" alt="">
              <img v-else v-bind:src="'http://delbarrio.barrenechea.cl/api/'+p.imagenes[0].URL_IMAGEN" class="img-responsive" alt="">
            </a>
            <h4 class="text-center">{{p.NOMB_PUBLICACION}}</h4> 
            <!-- <p class="text-center"><truncate clamp="más" :length="40" less="menos" :text="p.DESC_PUBLICACION"></truncate></p> -->
            <h5 class="text-center">{{p.NUMR_PRECIO}} <small>C/U</small></h5>
          </div>
        <!-- Productos -->
        </div><!-- /row -->
      </div><!-- /container -->
    </section><!-- /Producto -->

    <section id="emprendedores" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>Emprendedores</h2>
          </div>
        </div>
        <div class="row margin-top">
          <div class="col-xs-12">
            <div class="carousel carousel-showmanymoveone slide" id="itemslider">
              <div class="carousel-inner">
                <div class="item active">
                  <div class="col-md-2 col-sm-6">
                    <a href="emprendedor.html"><img v-bind:src="'/img/no-image.jpg'" class="img-responsive" alt=""></a>
                    <h4 class="text-center">Listado de emprendedores</h4>
                  </div>
                </div>
                <div class="item">
                  <div class="col-md-2 col-sm-6">
                    <a href="emprendedor.html">
                      <img v-bind:src="'/img/no-image.jpg'" class="img-responsive" alt="">
                    </a>
                    <h4 class="text-center">Emprendedor 2</h4>
                  </div>
                </div>
              </div>
              <div id="slider-control">
                <a class="left carousel-control" href="#itemslider" data-slide="prev"><img src="https://s12.postimg.org/uj3ffq90d/arrow_left.png" alt="Left" class="img-responsive"></a>
                <a class="right carousel-control" href="#itemslider" data-slide="next"><img src="https://s12.postimg.org/djuh0gxst/arrow_right.png" alt="Right" class="img-responsive"></a>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /container -->
    </section><!-- /Emprendedores -->
  </div>
</template>

<script>
import controller from '~/controllers/posts'
export default {
  asyncData () {
    return controller.GETAll()
  },
  head () {
    return {
      title: 'Publicaciones - Del Barrio',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
