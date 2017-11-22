<template>
  <section class="container">
    <div>
      <h1>
        Este es el index
      </h1>
      <h2>
        <nuxt-link :to="{ path: '/publicaciones'}"> Listado de Publicaciones </nuxt-link>
      </h2>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>
