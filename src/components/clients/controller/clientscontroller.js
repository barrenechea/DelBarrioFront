import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  getClient (context) {
    axios.get(globalConst().localUrl + 'persona/2/') // ' + context.$session.params.id + '
    .then(response => {
      context.client = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
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
    var validacion = ValidaRut(context.client.RUT_USUARIO)
    if (validacion) {
      // Enviar mensaje deerror
    }
    var slice2 = context.client.RUT_USUARIO.slice(0, -1) // slice2 queda el rut sin el último caracter
    var dv = context.client.RUT_USUARIO.slice(-1) // dv queda con el último caracter
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
        RUT_USUARIO: nmrorut,      // context.cliente.rut (Falta función para separar el rut)
        DV_USUARIO: dv,            // Falta funcion para separar DV del RUT
        EMAIL_USUARIO: context.client.email,
        DESC_PASSWORD: context.client.password
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
          FECH_FECHA_NACIMIENTO: context.client.birthdate
        }
        )
    }).then(response => {
      context.client = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  },

  EditClient (context) {
    // FALTA FUNCIÓN PARA VALIDAR QUE LA PASSWORD SEA LA CORRECTA

    if (context.client.confirm_password_nueva === context.client.password_nueva) {
      var passwordnueva = context.client.password_nueva
    } else {
      passwordnueva = context.client.usuario.DESC_PASSWORD
    }
    axios.put(
      globalConst().localUrl + 'usuario/' + context.client.IDEN_USUARIO + '/',
      {
        // --------------------
        // LLENAR TABLA USUARIOS v
        // IDEN_ROL: 2,              // identificador 2, correspondiente al ROL Emprendedor
        EMAIL_USUARIO: context.client.usuario.EMAIL_USUARIO,
        DESC_PASSWORD: passwordnueva
        // FLAG_VIGENTE: Se setea automatico en true
        // LLENAR TABLA USUARIOS ^
      }
        ).then(response => {
          axios.put(
            globalConst().localUrl + 'persona/' + context.client.IDEN_PERSONA + '/',
            {
            //  IDEN_USUARIO: response.data.data.IDEN_USUARIO,
              NOMBRES: context.client.NOMBRES,
              APELLIDO_PATERNO: context.client.APELLIDO_PATERNO,
              APELLIDO_MATERNO: context.client.APELLIDO_MATERNO,
              FECH_FECHA_NACIMIENTO: context.client.FECH_FECHA_NACIMIENTO
            }
        )
        }).then(response => {
          console.log(response.data)
        }).catch(errors => {
          console.log(errors)
        })
  }
}

function ValidaRut (Objeto) {
  var tmpstr = ''
  var intlargo = Objeto
  if (intlargo.length > 0) {
    var crut = Objeto
    var largo = crut.length
    if (largo < 2) {
      alert('rut inválido')
      return false
    }
    for (var i = 0; i < crut.length; i++) {
      if (crut.charAt(i) !== ' ' && crut.charAt(i) !== '.' && crut.charAt(i) !== '-') {
        tmpstr = tmpstr + crut.charAt(i)
      }
    }
    var rut = tmpstr
    crut = tmpstr
    largo = crut.length
    if (largo > 2) {
      rut = crut.substring(0, largo - 1)
    } else {
      rut = crut.charAt(0)
    }
    var dv = crut.charAt(largo - 1)
    if (rut === null || dv === null) {
      return 0
    }
    var dvr = '0'
    var suma = 0
    var mul = 2
    for (i = rut.length - 1; i >= 0; i--) {
      suma = suma + rut.charAt(i) * mul
      if (mul === 7) {
        mul = 2
      } else {
        mul++
      }
    }
    var res = suma % 11
    if (res === 1) {
      dvr = 'k'
    } else {
      if (res === 0) {
        dvr = '0'
      } else {
        var dvi = 11 - res
        dvr = dvi + ''
      }
    }
    if (dvr !== dv.toLowerCase()) {
      alert('El Rut Ingreso es Invalido')
      return false
    }
    alert('El Rut Ingresado es Correcto!')
    return true
  }
}
