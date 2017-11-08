import { globalConst } from '@/config/global.js'
import axios from 'axios'

export default {
  authCheck () {
    let token = sessionStorage.getItem('id_token')
    if (token !== null) {
      console.log('logged as: ' + token)
    }
  },
  login (context) {
    context.error = ''
    axios.post( // ####### CAMBIAR POR URL DE GLOBAL CONFIG #######
      globalConst().localUrl + 'auth/',
      {
        email: context.auth.email,
        password: context.auth.password
      }
    ).then(response => {
      console.log(response.data)
      sessionStorage.setItem('id_token', response.data.data.token)
      context.error = response.error
    })
  }
}
