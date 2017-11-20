import axios from 'axios'
import { CFG } from '~/controllers/_helpers'

function authCheck () {
  let token = sessionStorage.getItem('id_token')
  if (token !== null) {
    console.log('logged as: ' + token)
  }
}

function login (context) {
  axios.post(
    CFG.apiUrl + 'auth/',
    {
      email: context.auth.email,
      password: context.auth.password
    }
  ).then(response => {
    console.log(response)
    // sessionStorage.setItem('id_token', response.data.data.token)
  }).catch(errors => {
    context.message = errors.response.data.data.message ? errors.response.data.data.message : 'Error inesperado'
  })
}

export default {
  authCheck,
  login
}
