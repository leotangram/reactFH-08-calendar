import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startLogin, startRegister } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import './login.css'

const LoginSreen = () => {
  const dispatch = useDispatch()

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: 'leonardo@gmail.com',
    lPassword: '123456'
  })
  const { lEmail, lPassword } = formLoginValues

  const [formSignupValues, handleSignupInputChange] = useForm({
    sName: 'Leo',
    sEmail: 'leo@gmail.com',
    sPassword: '123456',
    sConfirmPassword: '123456'
  })
  const { sName, sEmail, sPassword, sConfirmPassword } = formSignupValues

  const handleLogin = e => {
    e.preventDefault()
    dispatch(startLogin(lEmail, lPassword))
  }

  const handleRegister = e => {
    e.preventDefault()
    if (sPassword !== sConfirmPassword) {
      return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error')
    }
    dispatch(startRegister(sEmail, sPassword, sName))
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="sName"
                value={sName}
                onChange={handleSignupInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="sEmail"
                value={sEmail}
                onChange={handleSignupInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="sPassword"
                value={sPassword}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="sConfirmPassword"
                value={sConfirmPassword}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSreen
