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
  if (context.comment.DESC_COMENTARIO === undefined || context.comment.DESC_COMENTARIO.length < 1 || context.comment.DESC_COMENTARIO > 255) {
    context.message.comment = 'Ingrese comentario'
    context.message.error = true
  } else {
    // Creación de objeto dummy para simular respuesta instantánea del server
    // Eliminar atributos del objeto que no se estén utilizando en la vista (si hay alguno que no se use)
    // Menos IDEN_PUBLICACION y DESC_COMENTARIO, se están usando en Axios abajo
    let dummyEntity = {
      DESC_COMENTARIO: context.comment.DESC_COMENTARIO,
      IDEN_PUBLICACION: context.post.IDEN_PUBLICACION,
      FECH_CREACION: new Date().toJSON(),
      FLAG_BAN: false,
      IDEN_COMENTARIO: 0,
      IDEN_USUARIO: context.loggedUser.id,
      respuesta: {}
    }
    // Limpiar campo de comentario
    context.comment = { }
    // Agregar objeto dummy al comienzo del array de comentarios
    context.post.comentarios.unshift(dummyEntity)
    context.$scrollTo('#listComentarios')
    context.$axios.$post(
      'private/comentario',
      {
        IDEN_PUBLICACION: dummyEntity.IDEN_PUBLICACION,
        DESC_COMENTARIO: dummyEntity.DESC_COMENTARIO
      }).then(response => {
      context.message.message = ''
      context.message.error = false
    }).catch(errors => {
      // Eliminar el objeto dummy del arreglo en caso de errores server-side
      context.post.comentarios.shift()
      // Volver a poner texto en el campo de comentario
      context.comment = {
        DESC_COMENTARIO: dummyEntity.DESC_COMENTARIO
      }
      context.$scrollTo('#comentarios')
      // Tirar una de esas notificaciones bien Spotify
      context.message.message = 'Lo sentimos, ha ocurrido un error inesperado.'
      context.message.error = true
    })
  }
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
