import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  listCategories (context) {
    // error = "";
    axios.get(globalConst().localUrl + 'categoria/')
    .then(response => {
      context.categories = response.data
      console.log(context.categories)
    }).catch(errors => {
      console.log(errors)
    })
  }
}
