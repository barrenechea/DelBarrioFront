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
    axios.newClient(
      globalConst().apiUrl + 'clientes/',
      {
        // LLENAR TABLA PERSONAS v
        NOMBRES: context.cliente.nombre,
        APELLIDO_PATERNO: context.cliente.apellidos, //  Falta función para separar apellidos paternos y maternos
        APELLIDO_MATERNO: context.cliente.apellidos, //  Ó lo hacemos con campos distintos en el formulario???
        FECH_FECHA_NACIMIENTO: null, // irrelevante para los clientes.
        // LLENAR TABLA PERSONAS ^
        // --------------------
        // LLENAR TABLA USUARIOS v
        IDEN_ROL: 2,              // identificador 2, correspondiente al ROL Cliente
        RUT_USUARIO: 7,           // context.cliente.rut (Falta función para separar el rut)
        DV_USUARIO: 8,            // Falta funcion para separar DV del RUT
        DESC_PAIS: 'CHILE',       // En duro, no considero relevante solicitarlo en el form, además de no estar en los reqqqq
        DESC_CORREO: context.cliente.email,
        FLAG_VIGENTE: true
        // LLENAR TABLA USUARIOS ^
      }
    ).then(response => {
      context.newClient = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  }

}
