<template>
<div>
  <ul id="dropdown-posts" class="dropdown-content">
    <li><a href="/demo-posts-new">Nuevo</a></li>
    <li><a href="/demo-posts-edit">Editar</a></li>
  </ul>
  <ul id="dropdown-posts-mobile" class="dropdown-content">
    <li><a href="/demo-posts-new">Nuevo</a></li>
    <li><a href="/demo-posts-edit">Editar</a></li>
  </ul>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">DEMO</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/">Inicio</a></li>
        <li><a class="dropdown-button" data-activates="dropdown-posts">Posts <i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="/">Inicio</a></li>
        <li><a class="dropdown-button" data-activates="dropdown-posts-mobile">Posts <i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
</script>

<style>
    body {
        background: #fff;
    }
    nav {
        background-color: #595383;
        padding: 0 15px 0 15px;
    }
</style>