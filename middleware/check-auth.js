// import axios from 'axios'
import controller from '~/controllers/auth'

export default function ({ isServer, store, req }) {
  if (isServer && !req) return
  const loggedUser = isServer ? controller.getUserFromCookie(req) : controller.getUserFromLocalStorage()
  store.commit('SET_USER', loggedUser)
}
