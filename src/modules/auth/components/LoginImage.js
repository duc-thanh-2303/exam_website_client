import React from 'react'
import './LoginImage.css'
import bg from '../assets/bg.jpg'

const LoginImage = () => {
  return (
    <div className='image'>
        <img loading='lazy' src={bg} alt='background'/>
    </div>
  )
}

export default LoginImage