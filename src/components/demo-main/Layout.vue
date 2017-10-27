<template>
<div>

  <div class="header hide-on-med-and-down">
      <div class="row">
        <div class="col s4"><img class="img-delbarrio" v-bind:src="'/static/img/delbarriologo.png'"/></div>
        <div class="col s4 offset-s4" ><img class="img-emprende" v-bind:src="'/static/img/emprendelogo.png'"/></div>
      </div>
  </div>
  <!-- Listado de la cuenta de administrador-->
  <ul id="dropdown-account" class="dropdown-content" data-beloworigin="true">
    <li><a href="#!">Configuración</a></li>
    <li class="divider"></li>
    <li><a href="#!">Cerrar Sesión</a></li>
  </ul>
  <!-- Fin Listado de la cuenta de administrador-->

  <!-- Listado de administración de cuenta Administrador-->
  <ul id="dropdown-admin" class="dropdown-content" data-beloworigin="true">
    <li><a href="#!">Categorías</a></li>
    <li><a href="#!">Rubros</a></li>
    <li><a href="#!">Términos y condiciones</a></li>
    <li><a href="#!">Preguntas frecuentes</a></li>
  </ul>
  <!-- Fin Listado de administración de cuenta Administrador-->

  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Publicaciones</a></li>
        <li><a href="badges.html">Denuncias</a></li>
        <li><a href="collapsible.html">Emprendedores</a></li>
        <li><a href="collapsible.html">Clientes</a></li>
        <li><a class="dropdown-button" href="#!" data-activates="dropdown-admin">Administración<i class="material-icons right">arrow_drop_down</i></a></li>
        <li class="divider"></li>
        <li><a class="dropdown-button" href="#!" data-activates="dropdown-account"><i class="material-icons left">account_circle</i> Nombre de Administrador<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <!--Inicio Menú mobile (Administrador) -->
      <ul class="side-nav" id="mobile-demo">
        <div class="container">
        <li class="logo">
          <a id="logo-container" href="/">
            <img class="responsive-img" v-bind:src="'/static/img/delbarriologo-mobile.png'"/>
          </a>
        </li>
        </div>
        <li class="bold">
          <li class="bold"><a class="collapsible-header waves-effect waves-teal"><i class="material-icons left">home</i> Inicio</a></li>
          <li class="divider"></li>
          <li class="bold"><a class="collapsible-header waves-effect waves-teal">Publicaciones</a><li>
          <li class="bold"><a class="collapsible-header waves-effect waves-teal">Denuncias</a><li>
          <li class="bold"><a class="collapsible-header waves-effect waves-teal">Emprendedores</a><li>
          <li class="bold"><a class="collapsible-header waves-effect waves-teal">Clientes</a><li>
          <ul class="collapsible collapsible-accordion">
            <li class="bold"><a class="collapsible-header waves-effect waves-teal">Administración <i class="material-icons right">arrow_drop_down</i></a>
              <div class="collapsible-body" style="display: block;">
                <ul>
                  <li><a href="" class="waves-effect waves-teal">Categorías</a></li>
                  <li><a href="" class="waves-effect waves-teal">Rubros</a></li>
                  <li><a href="" class="waves-effect waves-teal">Términos y condiciones</a></li>
                  <li><a href="" class="waves-effect waves-teal">Preguntas frecuentes</a></li>
                </ul>
              </div>
            </li>
          </ul>  
        </li>
      </ul>
      <!--Fin Menú mobile (Administrador)-->
    </div>    
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
</script>
