import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListPublications"
  // =======================================================================================
  getPublication (context) {
    axios.get(globalConst().localUrl + 'publicacion/' + context.$route.params.id + '/')
    .then(response => {
      context.publication = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener todas las categorías de la api.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: lista todas las publicaciones.
  // =======================================================================================
  listPublications (context) {
    axios.get(globalConst().localUrl + 'publicacion/')
    .then(response => {
      context.publications = response.data.data
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
  addPublication (context) {
    context.error = false
    if (this.validate(context)) {
      axios.post(
        globalConst().localUrl + 'publicacion/',
        {
          IDEN_TIPO_PUBLICACION: context.publicacion.IDEN_TIPO_PUBLICACION,
          IDEN_CATEGORIA: context.publicacion.IDEN_CATEGORIA,
          NOMB_PUBLICACION: context.publicacion.NOMB_PUBLICACION,
          DESC_PUBLICACION: context.publicacion.DESC_PUBLICACION,
          NUMR_PRECIO: context.publicacion.NUMR_PRECIO,
          FLAG_CONTENIDO_ADULTO: context.publicacion.FLAG_CONTENIDO_ADULTO
        }
      ).then(response => {
        context.publicacion = {} // Limpiar campos
        context.error = response.data.error
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
  editPublication (context) {
    if (this.validate(context)) {
      axios.put(
        globalConst().localUrl + 'publicacion/' + context.publicacion.IDEN_PUBLICACION + '/',
        {
          IDEN_TIPO_PUBLICACION: context.publicacion.IDEN_TIPO_PUBLICACION,
          IDEN_CATEGORIA: context.publicacion.IDEN_CATEGORIA,
          NOMB_PUBLICACION: context.publicacion.NOMB_PUBLICACION,
          DESC_PUBLICACION: context.publicacion.DESC_PUBLICACION,
          NUMR_PRECIO: context.publicacion.NUMR_PRECIO,
          FLAG_CONTENIDO_ADULTO: context.publicacion.FLAG_CONTENIDO_ADULTO
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
    if (context.publication.NOMB_PUBLICACION == null) {
      return false
    } else {
      return true
    }
  }
}
