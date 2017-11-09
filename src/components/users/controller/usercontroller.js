import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListCategories"
  // =======================================================================================
  getUser (context) {
    axios.get(globalConst().localUrl + 'usuario/5/')
    .then(response => {
      context.usr = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  }
}
