<template>
    <ol class="breadcrumb">
        <li v-for="item in crumbs" :key="item.path" class="breadcrumb-item">
            <nuxt-link :to="item.path" active-class="active">
                {{ item.breadcrumb }}
            </nuxt-link>
        </li>
    </ol>
</template>

<script>
  const breadcrumbs = {
    '/administracion': 'Administración',
    '/administracion/categorias': 'Categorías',
    '/administracion/categorias/nueva': 'Nueva'
  }

  export default {
    computed: {
      crumbs () {
        let crumbs = []
        this.$route.matched.forEach((item) => {
          if (breadcrumbs[item.name] || breadcrumbs[item.path]) {
            item.breadcrumb = breadcrumbs[item.name] || breadcrumbs[item.path]
            crumbs.push(item)
          }
        })

        return crumbs
      }
    },
    mounted () {
      // Para depurar los path a definir arriba
      console.log(this.$route.matched)
    }
  }
</script>
