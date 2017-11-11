import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
// Enviar POST request a la fuente. Se utilizó placeholder.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Return:       Retorna los datos del POST response por consola js.
  // Constraints:  post {
  //                      title: string (req | len < 255) -- ignorar
  //                      body:  string (req | len < 255) -- ignorar
  //                    }
  // =======================================================================================
  addPublication (context) {
    var tp
    if (context.publ.tipo_publicacion === 'Producto') {
      tp = 1
    } else {
      if (context.publ.tipo_publicacion === 'Servicio') {
        tp = 2
      } else {
        var errors = 'TIPO PUBLICACIÓN NO PERMITIDO'
      }
    }
    axios.post(
      globalConst().localUrl + 'publicacion/',
      {
        // --------------------
        // LLENAR TABLA PUBLICACION v
        IDEN_EMPRENDEDOR: 2,              // Se toma el de la sesión !! uwu
        IDEN_TIPO_PUBLICACION: tp,           // context.cliente.rut (Falta función para separar el rut)
        IDEN_CATEGORIA: context.publ.categoria,            // Falta funcion para separar DV del RUT
        NOMB_PUBLICACION: context.publ.nombre,
        DESC_PUBLICACION: context.publ.descripcion,
        NUMR_PRECIO: context.publ.precio,
        // FECHA_CREACION POR DEFECTO NOW,
        FLAG_CONTENIDO_ADULTO: context.publ.adultcontent
        // FLAG_VIGENTE: Se setea automatico en true
      }
    ).then(response => {
      axios.post(
        globalConst().localUrl + 'imagenes/',
        {
          IDEN_PUBLICACION: response.data.data.IDEN_PUBLICACION,
          IDEN_EMPRENDEDOR: response.data.data.IDEN_EMPRENDEDOR
         // URL_IMAGEN: context.publ.URL_IMAGEN[] // Como guardar varias? 7.18 am -> No me cruje uwu
        }
        )
    }).then(response => {
      context.publ = {errors} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  }

}
