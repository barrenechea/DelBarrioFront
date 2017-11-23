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
function POST (context, id) {
  context.$axios.$post(
    'private/respuesta',
    {
      IDEN_COMENTARIO: id,
      DESC_RESPUESTA: context.answer.DESC_RESPUESTA
    }).then(response => {
    console.log(response)
    context.answer = { }
    context.message.message = 'Se ha enviado tu respuesta'
    context.message.error = false
    // ACTUALIZAR LOS MENSAJES DESPUÉS DE AGREGARLOS.
    context.post.comentarios = context.post.comentarios.push(context.comment)
  }).catch(errors => {
    console.log(errors.request)
    console.log(errors.response)
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
