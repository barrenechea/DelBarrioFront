import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  getCategory (context) {
    // aquí tiene que ir el id recibido desde la vista de listado.
    axios.get(globalConst().localUrl + 'categoria/' + context.$route.params.id + '/')
    .then(response => {
      context.cat = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  listCategories (context) {
    // error = "";
    axios.get(globalConst().localUrl + 'categoria/')
    .then(response => {
      context.categories = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Enviar POST request a la fuente. Se utilizó placeholder.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Return:       Retorna los datos del POST response por consola js.
  // Constraints:  post {
  //                      title: string (req | len < 255)
  //                      body:  string (req | len < 255)
  //                    }
  // =======================================================================================
  addCategory (context) {
    context.error = false
    axios.post(
      globalConst().localUrl + 'categoria/',
      {
        IDEN_CATEGORIA: context.cat.IDEN_CATEGORIA,
        IDEN_CATEGORIA_PADRE: context.cat.IDEN_CATEGORIA_PADRE,
        NOMB_CATEGORIA: context.cat.NOMB_CATEGORIA,
        DESC_CATEGORIA: context.cat.DESC_CATEGORIA
      }
    ).then(response => {
      context.cat = {} // Limpiar campos
      context.error = response.data.error
    }).catch(errors => {
      console.log(errors)
      context.error = true
    })
  },

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
    axios.put(
      globalConst().localUrl + 'categorias/' + context.cat.IDEN_CATEGORIA + '/',
      {
        post: context.post
      }
    ).then(response => {
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  }
}
