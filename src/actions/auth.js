import Swal from 'sweetalert2'
import { fetchNoToken, fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'
import { eventLogout } from './events'

export const startLogin = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetchNoToken('auth', { email, password }, 'POST')
      const { name, ok, token, uid, message } = await response.json()

      if (ok) {
        localStorage.setItem('token', token)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({ uid, name }))
      } else {
        Swal.fire('Error', message, 'error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const startRegister = (email, password, name) => {
  return async dispatch => {
    try {
      const response = await fetchNoToken(
        'auth/new',
        { email, password, name },
        'POST'
      )
      const body = await response.json()

      if (body.ok) {
        localStorage.setItem('token', body.token)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({ uid: body.uid, name: body.name }))
      } else {
        Swal.fire('Error', body.message, 'error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const startChecking = () => {
  return async dispatch => {
    try {
      const response = await fetchWithToken('auth/renew')
      const body = await response.json()

      if (body.ok) {
        localStorage.setItem('token', body.token)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({ uid: body.uid, name: body.name }))
      } else {
        dispatch(checkingFinish())
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const startLogout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch(eventLogout())
    dispatch(logout())
  }
}

const login = user => ({
  type: types.authLogin,
  payload: user
})

const checkingFinish = () => ({
  type: types.authCheckingFinish
})

const logout = () => ({
  type: types.authLogout
})
