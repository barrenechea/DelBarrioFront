<template>
  <div>
    <div class="header hidden-md-down">
        <div class="row">
          <div class="col-md-4"><img class="img-delbarrio" v-bind:src="'/static/img/delbarriologo.png'"/></div>
          <div class="col-md-4 offset-md-3"><img class="img-emprende" v-bind:src="'/static/img/emprendelogo.png'"/></div>
        </div>
    </div>

    <div class="navbar navbar-expand-lg navbar-light bg-faded" style="">
      <a href="../" class="navbar-brand">Bootswatch</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarResponsive" style="">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Publicaciones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Denuncias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Emprendedores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Clientes</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="administration">Administración <span class="caret"></span></a>
            <div class="dropdown-menu" aria-labelledby="administration">
              <a class="dropdown-item" v-bind:href="'/administracion/categorias'">Categorías</a>
              <a class="dropdown-item" v-bind:href="'/administracion/rubros'">Rubros</a>
              <a class="dropdown-item" v-bind:href="'/administracion/terminos-condiciones'">Términos y Condiciones</a>
              <a class="dropdown-item" v-bind:href="'/administracion/preguntas-frecuentes'">Preguntas frecuentes</a>
            </div>
          </li>
        </ul>

        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="adminName"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>Nombre de Administrador <span class="caret"></span></a>
            <div class="dropdown-menu" aria-labelledby="adminName">
              <a class="dropdown-item" href="#">Configuración</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Cerrar Sesión</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    
  <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Providencia</h3>

				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> Paris, France</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>

  </div>
</template>

<script>
</script>
