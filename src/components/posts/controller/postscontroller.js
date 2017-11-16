import axios from 'axios'
import { globalConst } from '@/config/global.js'
import imagecontroller from '@/components/images/controller/imagecontroller'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListPosts"
  // =======================================================================================
  getPost (context) {
    axios.get(globalConst().localUrl + 'publicacion/' + context.$route.params.id + '/')
    .then(response => {
      context.post = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener todas las categorías de la api.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: lista todas las publicaciones.
  // =======================================================================================
  listPosts (context) {
    axios.get(globalConst().localUrl + 'publicacion/')
    .then(response => {
      context.posts = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
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
  addPost (context, blob) {
    context.error = false
    if (this.validate(context)) {
      axios.post(
        globalConst().localUrl + 'publicacion/',
        {
          CODI_TIPO_PUBLICACION: context.post.CODI_TIPO_PUBLICACION,
          IDEN_CATEGORIA: context.post.IDEN_CATEGORIA,
          NOMB_PUBLICACION: context.post.NOMB_PUBLICACION,
          DESC_PUBLICACION: context.post.DESC_PUBLICACION,
          NUMR_PRECIO: parseInt(context.post.NUMR_PRECIO),
          FLAG_CONTENIDO_ADULTO: context.post.FLAG_CONTENIDO_ADULTO,
          IDEN_EMPRENDEDOR: 1 // Temporal, hasta que se implementen usuarios
        }
      ).then(response => {
        context.post = { FLAG_CONTENIDO_ADULTO: false } // Limpiar campos
        context.error = response.data.error
        imagecontroller.addPostImage(context, response.data.data.IDEN_PUBLICACION, blob)
        console.log(response.data.data.IDEN_PUBLICACION)
      }).catch(errors => {
        context.error = true
      })
    } else {
      context.error = true
      return false
    }
  },
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
  editPost (context) {
    if (this.validate(context)) {
      axios.put(
        globalConst().localUrl + 'publicacion/' + context.post.IDEN_PUBLICACION + '/',
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
  },
  validate (context) {
    if (context.post.NOMB_PUBLICACION == null || isNaN(context.post.NUMR_PRECIO)) {
      return false
    } else {
      return true
    }
  }
}
