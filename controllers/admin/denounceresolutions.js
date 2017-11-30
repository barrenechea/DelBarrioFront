function GETAll (app) {
  return app.$axios.$get('private/resolucion_denuncia')
    .then(response => {
      return {
        resolucion: response.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Enviar POST request a la fuente.
// Param.:       context -> Contiene los objetos instanciados en "data".
// Return:       Retorna los datos del POST response por consola js.
// Constraints:  post {
//                      title: string (req | len < 255)
//                      body:  string (req | len < 255)
//                    }
// =======================================================================================

function POST (context) {
  context.$axios.$post(
    'resolucion_denuncia',
    {
      IDEN_USUARIO: 1,
      IDEN_DENUNCIA: context.denounceDetail.IDEN_DENUNCIA,
      DESC_RESOLUCION: context.denounceresolution.DESC_RESOLUCION
    }
  ).then(response => {
    if (context.isBan) {
      context.id = context.denounceDetail.IDEN_PUBLICACION ? context.denounceDetail.IDEN_PUBLICACION : context.denounceDetail.IDEN_CALIFICACION ? context.denounceDetail.IDEN_CALIFICACION : context.denounceDetail.IDEN_COMENTARIO
      context.model = context.denounceDetail.IDEN_PUBLICACION ? 'publicacion' : context.denounceDetail.IDEN_CALIFICACION ? 'calificacion' : 'comentario'
      this.ban(context)
    } else {
      context.$notify.success('Se ha resuelto denuncia.')
    }
  }).catch(errors => {
    console.log(errors)
    context.$notify.danger('Error. Intente más tarde.')
  })
}

function ban (context) {
  console.log('private/' + context.model + '/' + context.id)
  context.$axios.$put(
    'private/' + context.model + '/' + context.id,
    {
      FLAG_BAN: true
    }
  ).then(response => {
    context.$notify.success('Se ha resuelto denuncia.')
  }).catch(errors => {
    context.$notify.danger('Error. Intente más tarde.')
  })
}

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
function PUT (context) {
  context.$axios.$put(
    'private/denuncia/' + context.id,
    {
      NOMB_CATEGORIA: context.category.NOMB_CATEGORIA,
      IDEN_CATEGORIA_PADRE: context.category.IDEN_CATEGORIA_PADRE
    }
  ).then(response => {
    context.$notify.success('Editado exitosamente.')
  }).catch(errors => {
    context.$notify.danger('Ha ocurrido un error inesperado. Intenta más tarde.')
  })
}

// comentarios
function setState (context, category) {
  context.$axios.$put(
    'private/categoria/' + category.IDEN_CATEGORIA,
    {
      FLAG_VIGENTE: !category.FLAG_VIGENTE
    }
  ).then(response => {
    category.FLAG_VIGENTE = !category.FLAG_VIGENTE
  }).catch(errors => {
    context.$notify.danger('Ha ocurrido un error inesperado. Inténtelo más tarde.')
  })
}

export default {
  GETAll,
  POST,
  PUT,
  setState,
  ban
}
