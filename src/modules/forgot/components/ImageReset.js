import React from 'react'
import reset from '../assets/Forgot password-rafiki.svg'
import './ImageReset.css'

const ImageReset = () => {
  return (
    <div className='reset-image'>
        <img src={reset} alt='reset-password'/>
    </div>
  )
}

export default ImageReset