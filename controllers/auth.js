import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'
import { CFG } from '~/controllers/_helpers'

function login (context) {
  return axios.post(
    CFG.apiUrl + 'auth/',
    {
      email: context.auth.email,
      password: context.auth.password
    }
  ).then(response => {
    context.error = false
    this.setToken(response.data.data.token)
  }).catch(errors => {
    context.error = true
    context.message = errors.response.data.data.message ? errors.response.data.data.message : 'Error inesperado'
  })
}

function setToken (token) {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
  Cookie.set('jwt', token)
}

function unsetToken () {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('token')
  Cookie.remove('jwt')
}

function getUserFromCookie (req) {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}

function getUserFromLocalStorage () {
  const token = window.localStorage.token
  return token ? jwtDecode(token) : undefined
}

export default {
  login,
  setToken,
  unsetToken,
  getUserFromCookie,
  getUserFromLocalStorage
}
