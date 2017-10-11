import axios from 'axios'
export default {
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  listPosts (context) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      context.posts = response.data
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Enviar POST request a la fuente. Se utilizó placeholder.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Return:       Retorna los datos del POST request por consola js.
  // Constraints:  newPost {
  //                      title: string (req | len < 255)
  //                      body:  string (req | len < 255)
  //                    }
  // =======================================================================================
  addPost (context) {
    axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: context.newPost.title,
        body: context.newPost.body,
        userId: 1 // Hardcoded para propósitos de demostración
      }
    ).then(response => {
      context.newPost = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  }
}
