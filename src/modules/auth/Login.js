import React, {useEffect} from 'react'
// import axios from 'axios'
import LoginForm from './components/LoginForm'
import LoginImage from './components/LoginImage'

const Login = () => {
  useEffect(() => {
    document.title = 'Login'
  })
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative'
    }}>
        <LoginForm/>
        <LoginImage/>
    </div>
  )
}

export default Login