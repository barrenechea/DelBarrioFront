module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Del Barrio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      // Que es este meta?
      { property: 'og:image', content: 'http://delbarrio.barrenechea.cl/static/img/logo-del-barrio.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' },
      { src: '/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins initialization
  * src: route
  * ssr: Server-side rendering
  */
  plugins: [
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/croppa', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Instanciar sólo una vez en la aplicación
    */
    vendor: [
      'axios',
      'vee-validate',
      'vue-croppa'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
