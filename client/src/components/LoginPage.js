import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import LoginForm from './auth/LoginForm'
import GoogleLogin from './auth/GoogleLogin'

const LoginPage = () => {
  return (
    <div>
      <Header />

      <div>Login</div>

      <div>
        <LoginForm />
      </div>

      <div>
        <GoogleLogin />
      </div>

      <Link to='/'>Go to home</Link>
    </div>
  )
}

export default LoginPage