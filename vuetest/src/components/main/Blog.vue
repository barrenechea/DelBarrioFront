<template>
<div>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">DelBarrio</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/">Inicio</a></li>
        <li><a href="/posts">Posts</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="/">Inicio</a></li>
        <li><a href="/posts">Posts</a></li>
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