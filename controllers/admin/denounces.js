function GETAll (app) {
  return app.$axios.$get('private/denuncia')
    .then(response => {
      return {
        denounces: response.data
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
function ratingDenounce (context) {
  context.$axios.$post(
    'private/denuncia',
    {
      IDEN_CALIFICACION: context.iden,
      IDEN_MOTIVO_DENUNCIA: context.denounce.IDEN_MOTIVO_DENUNCIA,
      DESC_DENUNCIA: context.denounce.DESC_DENUNCIA
    }
  ).then(response => {
    context.$notify.success('Se ha enviado tu denuncia.')
  }).catch(errors => {
    context.message = errors.response.data.data.message ? errors.response.data.data.message : 'Error inesperado'
  })
}

function postDenounce (context) {
  context.$axios.$post(
    'private/denuncia',
    {
      IDEN_PUBLICACION: context.post.IDEN_PUBLICACION,
      IDEN_MOTIVO_DENUNCIA: context.denounce.IDEN_MOTIVO_DENUNCIA,
      DESC_DENUNCIA: context.denounce.DESC_DENUNCIA
    }
  ).then(response => {
    context.$notify.success('Se ha enviado tu denuncia.')
  }).catch(errors => {
    context.$notify.danger('Ha ocurrido un error. Vuelve a intentarlo más tarde.')
  })
}

function commentDenounce (context) {
  context.$axios.$post(
    'private/denuncia',
    {
      IDEN_COMENTARIO: context.iden,
      IDEN_MOTIVO_DENUNCIA: context.denounce.IDEN_MOTIVO_DENUNCIA,
      DESC_DENUNCIA: context.denounce.DESC_DENUNCIA
    }
  ).then(response => {
    context.$notify.success('Se ha enviado tu denuncia.')
  }).catch(errors => {
    context.message = errors.response.data.data.message ? errors.response.data.data.message : 'Error inesperado'
  })
}

function POST (context) {
  parseInt(context.iden)
  parseInt(context.denounce.IDEN_MOTIVO_DENUNCIA)
  if (context.type === 'pub') {
    this.postDenounce(context)
  } else {
    if (context.type === 'com') {
      this.commentDenounce(context)
    } else {
      this.ratingDenounce(context)
    }
  }
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
    context.$notify.success(category.FLAG_VIGENTE ? 'Habilitado correctamente' : 'Deshabilitado correctamente')
  }).catch(errors => {
    console.log(errors)
  })
}

export default {
  GETAll,
  POST,
  PUT,
  setState,
  commentDenounce,
  postDenounce,
  ratingDenounce
}
