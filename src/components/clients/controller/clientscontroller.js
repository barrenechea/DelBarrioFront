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
  addClient (context) {
    var slice2 = context.client.rut.slice(0, -1) // slice2 queda el rut sin el último caracter
    var dv = context.client.rut.slice(-1) // dv queda con el último caracter
    dv = dv.toUpperCase() // DV a mayuscula en caso de ser letra
    var nmrorut = slice2.replace('.', '') // elimina los puntos de slice2
    nmrorut = nmrorut.replace('.', '')    // elimina los puntos de slice2
    nmrorut = nmrorut.replace('-', '')    // elimina el guión de lo de arriba
    axios.post(
      globalConst().localUrl + 'usuario/',
      {
        // --------------------
        // LLENAR TABLA USUARIOS v
        IDEN_ROL: 1,              // identificador 2, correspondiente al ROL Emprendedor
        RUT_USUARIO: nmrorut,           // context.cliente.rut (Falta función para separar el rut)
        DV_USUARIO: dv,            // Falta funcion para separar DV del RUT
        EMAIL_USUARIO: context.client.email,
        DESC_PASSWORD: context.client.clave
        // FLAG_VIGENTE: Se setea automatico en true
        // LLENAR TABLA USUARIOS ^
      }
    ).then(response => {
      axios.post(
        globalConst().localUrl + 'persona/',
        {
          IDEN_USUARIO: response.data.data.IDEN_USUARIO,
          NOMBRES: context.client.nombres,
          APELLIDO_PATERNO: context.client.apellido_paterno,
          APELLIDO_MATERNO: context.client.apellido_materno,
          FECH_FECHA_NACIMIENTO: context.clien.fecha_nacimiento
        }
        )
    }).then(response => {
      context.client = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  }

}
