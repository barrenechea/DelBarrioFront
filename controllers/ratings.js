// Obtener todas las categorías de la api.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: lista todas las publicaciones.
// =======================================================================================
function GETAll (app) {
  return app.$axios.$get('private/comentario')
    .then(response => {
      return {
        comments: response.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Enviar POST request a la fuente.
// Param.:       context -> Contiene los objetos instanciados en "data".
// Return:       Retorna los datos del POST response por consola js.
// Constraints:  post {
//                      IDEN_TIPO_PUBLICACION: id (req)
//                      IDEN_CATEGORIA:  id (req)
//                      NOMB_PUBLICACION: string (req | len < 255)
//                      DESC_PUBLICACION: string (req | len < 10.000)
//                      NUMB_PRECIO: int (req | > 0)
//                      FLAG_CONTENIDO_ADULTO: bool
//                    }
// =======================================================================================
function POST (context) {
  context.$axios.$post(
    'private/calificacion',
    {
      IDEN_PUBLICACION: context.post.IDEN_PUBLICACION,
      DESC_CALIFICACION: context.rating.DESC_CALIFICACION,
      NUMR_VALOR: context.rating.NUMR_VALOR
    }).then(response => {
    context.rating = { }
    context.message.message = 'Se ha enviado tu calificacion'
    context.message.error = false
    // ACTUALIZAR LAS CALIFICACIONES DESPUÉS DE AGREGARLOS.
  }).catch(errors => {
    context.message.message = 'Lo sentimos, ha ocurrido un error inesperado.'
    context.message.error = true
  })
}

// =======================================================================================
// Enviar PUT request a la fuente. Se utilizó placeholder.
// Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
//               "data".
// Return:       Retorna los datos del PUT response por consola js.
// Constraints:  post {
//                      title:  string (req | len < 255)
//                      body:   string (req | len < 255)
//                      userId: int (req | user-exists)
//                      id:     int (req | post-exists)
//                    }
// =======================================================================================
function setState (context, post) {
  if (!post.FLAG_BAN) {
    context.$axios.$post(
      'private/comentario/' + post.IDEN_PUBLICACION,
      {
        FLAG_VIGENTE: !post.FLAG_VIGENTE
      }
    ).then(response => {
      post.FLAG_VIGENTE = !post.FLAG_VIGENTE
    }).catch(errors => {
      console.log(errors)
    })
  }
}

export default {
  GETAll,
  POST,
  setState
}
