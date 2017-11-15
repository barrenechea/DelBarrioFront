import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  getClient (context) {
    let token = sessionStorage.getItem('id_token')
    console.log('JWT ' + token)
    axios.get(
      globalConst().localUrl + 'private/usuario/',
      {
        headers: { Authorization: 'JWT ' + token }
      }
    ).then(responseid => {
      context.client = responseid.data.data.persona
      context.client.EMAIL_USUARIO = responseid.data.data.EMAIL_USUARIO
      context.client.FECH_FECHA_NACIMIENTO = context.client.FECH_FECHA_NACIMIENTO.slice(0, -14)
  //    context.usuario = element.usuario
      context.auth.email = responseid.data.data.EMAIL_USUARIO
      context.usuario.token = token
  //    console.log('idusuario' + responseid.data)
    })
    .catch(errors => {
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
    if (this.validar(context) && !context.errors.any()) {
      // Enviar mensaje deerror
      var slice2 = context.client.RUT_USUARIO.slice(0, -1) // slice2 queda el rut sin el último caracter
      var dv = context.client.RUT_USUARIO.slice(-1) // dv queda con el último caracter
      dv = dv.toUpperCase() // DV a mayuscula en caso de ser letra
      var nmrorut = slice2.replace('.', '') // elimina los puntos de slice2
      nmrorut = nmrorut.replace('.', '')    // elimina los puntos de slice2
      nmrorut = nmrorut.replace('-', '')    // elimina el guión de lo de arriba
      nmrorut = parseInt(nmrorut)
      axios.post(
        globalConst().localUrl + 'usuario/',
        {
          // --------------------
          // LLENAR TABLA USUARIOS v
          IDEN_ROL: 1,              // identificador 1, correspondiente al ROL Usuario
          RUT_USUARIO: nmrorut,
          DV_USUARIO: dv,
          EMAIL_USUARIO: context.client.email,
          DESC_PASSWORD: context.client.password
          // FLAG_VIGENTE: Se setea automatico en true
          // LLENAR TABLA USUARIOS ^
        }
      ).then(response => {
        console.log(response.data.data)
        var idusr = response.data.data.IDEN_USUARIO
        idusr = parseInt(idusr)
        console.log('EL ID USER ES: ' + idusr)
        console.log(context.client)
        context.client.birthdate = new Date(context.client.birthdate).toJSON()
        console.log('Fecha de nac-> ' + context.client.FECH_FECHA_NACIMIENTO)
        axios.post( // Tabla PERSONA v
          globalConst().localUrl + 'persona/',
          {
            IDEN_USUARIO: idusr, // un INT, correspondiente al Id del usuario anteriormente insertado
            NOMBRES: context.client.nombres, // String
            APELLIDO_PATERNO: context.client.apellido_pat, // String
            APELLIDO_MATERNO: context.client.apellido_mat, // String
            FECH_FECHA_NACIMIENTO: context.client.FECH_FECHA_NACIMIENTO // Date
          }
          )
      }).then(response => {
      //  context.client = {} // Limpiar campos
        location.href = '/#'
        alert('Usuario registrado con éxito')
      }).catch(errors => {
        console.log(' xD ' + errors)
        context.error.exclusivo = 'Formulario incompleto.'
      })
    } else {
      context.emp = context.emp
      context.error = context.error
      console.log(context.error)
      context.error.exclusivo = 'Formulario incompleto.'
      // XD
    }
  },
  validar (context) {
    var cantErrores = 0
    if (String(context.client.nombres).length === 0) {
      context.error.exclusivo = 'Formulario incompleto. '
    }
    var validacion = ValidaRut(context.client.RUT_USUARIO)
    if (!validacion) {
      cantErrores++
      context.error.rut = 'El rut no es válido'
    } else {
      context.error.rut = ''
    }
    if (cantErrores === 0) {
      return true
    } else {
      console.log(context.error)
      return false
    }
  },
  EditClient (context) {
    console.log('token antiwo --->' + context.usuario.token)
    axios.post( // ####### CAMBIAR POR URL DE GLOBAL CONFIG #######
      globalConst().localUrl + 'auth/',
      {
        email: context.auth.email,
        password: context.auth.password
      }
    ).then(response => {
      console.log('AA XD ' + response.data)
      sessionStorage.setItem('id_token', response.data.data.token)
    }).then(response => {
      let token = sessionStorage.getItem('id_token')
      console.log('nueo token' + token)
      if (String(token).length > 10) {
        context.error.passwd = ''
        if (context.client.repitepassword === context.client.nuevapassword && String(context.client.nuevapassword).length > 5) {
          var passwordnueva = context.client.nuevapassword
        } else {
          passwordnueva = context.client.password
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
              console.log('Si sale esto se cambio el usuario')
              context.client.birthdate = new Date(context.client.FECH_FECHA_NACIMIENTO).toJSON()
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
              alert('Actualizado de forma éxitosa')
            }).catch(errors => {
              console.log(errors)
            })
      } else {
        alert('Oops! Algo salió mal')
      }
    }).catch(errors => {
      alert('Contraseña incorrecta')
      console.log(errors)
    })
    // FALTA FUNCIÓN PARA VALIDAR QUE LA PASSWORD SEA LA CORRECTA
  }
}

function ValidaRut (Objeto) {
  if (Objeto != null) {
    var tmpstr = ''
    var intlargo = Objeto
    if (intlargo.length > 0) {
      var crut = Objeto
      var largo = crut.length
      if (largo < 2) {
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
        return false
      }
      return true
    }
  }
}
