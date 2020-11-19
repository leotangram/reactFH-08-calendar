import { fetchNoToken } from '../helpers/fetch'
import { types } from '../types/types'

export const startLogin = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetchNoToken('auth', { email, password }, 'POST')
      const { name, ok, token, uid } = await response.json()

      if (ok) {
        localStorage.setItem('token', token)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({ uid, name }))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const login = user => ({
  type: types.authLogin,
  payload: user
})
