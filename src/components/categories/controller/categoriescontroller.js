import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListCategories"
  // =======================================================================================
  getCategory (context) {
    axios.get(globalConst().localUrl + 'categoria/' + context.$route.params.id + '/')
    .then(response => {
      context.cat = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener todas las categorías de la api.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: lista todas las categorías.
  // =======================================================================================
  listCategories (context) {
    axios.get(globalConst().localUrl + 'categoria/')
    .then(response => {
      context.categories = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Enviar POST request a la fuente.
  // Param.:       context -> Contiene los objetos instanciados en "data".
  // Return:       Retorna los datos del POST response por consola js.
  // Constraints:  post {
  //                      title: string (req | len < 255)
  //                      body:  string (req | len < 255)
  //                    }
  // =======================================================================================
  addCategory (context) {
    context.error = false
    // if (this.validate(context)) {
    axios.post(
      globalConst().localUrl + 'categoria/',
      {
        IDEN_CATEGORIA_PADRE: context.cat.IDEN_CATEGORIA_PADRE,
        NOMB_CATEGORIA: context.cat.NOMB_CATEGORIA
      }
    ).then(response => {
      context.cat = {} // Limpiar campos
      context.error = response.data.error
    }).catch(errors => {
      context.error = true
    })
    // } else {
      // context.error = true
      // return false
    // }
  },
  // Enviar POST request a la fuente.
  // Param.:       context -> Contiene los objetos instanciados en "data".
  // Return:       Retorna los datos del POST response por consola js.
  // Constraints:  post {
  //                      title: string (req | len < 255)
  //                      body:  string (req | len < 255)
  //                    }
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
  editCategory (context) {
    // if (this.validate(context)) {
    console.log(context.cat)
    axios.put(
      globalConst().localUrl + 'categoria/' + context.cat.IDEN_CATEGORIA + '/',
      {
        NOMB_CATEGORIA: context.cat.NOMB_CATEGORIA,
        IDEN_CATEGORIA_PADRE: context.IDEN_CATEGORIA_PADRE
      }
    ).then(response => {
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
    // } else {
      // return false
    // }
  },
  // comentarios
  setState (id, state, context) {
    axios.put(
      globalConst().localUrl + 'categoria/' + id + '/',
      {
        FLAG_VIGENTE: state
      }
    ).then(response => {
      console.log(response.data)
      // actualizar datos.
      this.listCategories(context)
    }).catch(errors => {
      console.log(errors)
    })
  }/* ,
  validate (context) {
    if (context.cat.NOMB_CATEGORIA == null) {
      return false
    } else {
      return true
    }
  } */
}
