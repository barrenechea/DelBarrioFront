<template>
  <section id="admin-denuncias" class="container-fluid">
    <div class="container fondo-beige">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Denuncias Vigentes</h2>
        </div>
      </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-8 col-sm-6 col-sm-offset-3">
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
        <table class="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Realizado por</th>
                <th>Hacia</th>
                <th>Motivo</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#">Nombre producto</a></td>
                <td>Usuario A</td>
                <td>Emprendedor C</td>
                <td>Motivo lorem ipsum dolor sit amet.</td>
                <td>
                    <a href="#" class="btn-tabla">Omitir denuncia</a> <br>
                    <a href="#" class="btn-tabla"><i class="fa fa-trash" aria-hidden="true"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div><!-- /container -->
  </section><!-- /Tabla Publicaciones -->
</template>
