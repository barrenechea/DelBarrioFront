import axios from 'axios'
import moment from 'moment'
import { CFG } from '~/controllers/_helpers'

// Obtener categoria especifica según id.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListPosts"
// =======================================================================================
function GET (id) {
  return axios.get(CFG.apiUrl + 'comentario/' + id)
    .then(response => {
      return {
        post: response.data.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Obtener todas las categorías de la api.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: lista todas las publicaciones.
// =======================================================================================
function GETAll () {
  return axios.get(CFG.apiUrl + 'comentario')
    .then(response => {
      return {
        posts: response.data.data
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
  axios.post(
    CFG.apiUrl + 'comentario',
    {
      IDEN_PUBLICACION: this.$route.params,
      IDEN_USUARIO: 1, // Prueba
      DESC_COMENTARIO: context.post.DESC_COMENTARIO
    }).then(response => {
    console.log('Prueba')
  }).catch(errors => {
    console.log(errors + 'catch')
    context.error = 'Error inesperado al ingresar Publicación'
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
function PUT (context) {
  if (this.validate(context)) {
    axios.put(
      CFG.apiUrl + 'comentario/' + context.post.IDEN_PUBLICACION,
      {
        IDEN_TIPO_PUBLICACION: context.post.IDEN_TIPO_PUBLICACION,
        IDEN_CATEGORIA: context.post.IDEN_CATEGORIA,
        NOMB_PUBLICACION: context.post.NOMB_PUBLICACION,
        DESC_PUBLICACION: context.post.DESC_PUBLICACION,
        NUMR_PRECIO: context.post.NUMR_PRECIO,
        FLAG_CONTENIDO_ADULTO: context.post.FLAG_CONTENIDO_ADULTO
      }
    ).then(response => {
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  } else {
    return false
  }
}

function addSale (context, id) {
  return axios.post(
    CFG.apiUrl + 'oferta',
    {
      IDEN_PUBLICACION: parseInt(id),
      FECH_INICIO: moment(new Date(context.sale.FECH_INICIO)).toJSON(),
      FECH_TERMINO: new Date(context.sale.FECH_TERMINO).toJSON(),
      NUMR_PRECIO: parseInt(context.sale.NUMR_PRECIO)
    })
}
// comentarios
function setState (post) {
  if (!post.FLAG_BAN) {
    axios.put(
      CFG.apiUrl + 'comentario/' + post.IDEN_PUBLICACION,
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
  GET,
  GETAll,
  POST,
  PUT,
  addSale,
  setState
}
