import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  listPosts (context) {
    axios.get(globalConst().apiUrl + 'posts/')
    .then(response => {
      context.posts = response.data
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener post específico de la fuente según ID. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  //         id      -> ID del post.
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  getPost (context, id) {
    axios.get(globalConst().apiUrl + 'posts/' + id + '/')
    .then(response => {
      context.post = response.data
      console.log(response.data)
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
  addPost (context) {
    axios.post(
      globalConst().apiUrl + 'posts/',
      {
        title: context.post.title,
        body: context.post.body,
        userId: 1 // Hardcoded para propósitos de demostración
      }
    ).then(response => {
      context.newPost = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
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
  updatePost (context) {
    axios.put(
      globalConst().apiUrl + 'posts/' + context.post.id + '/',
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
