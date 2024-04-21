import React, {useEffect} from 'react'
import FormReset from './components/FormReset'
import ImageReset from './components/ImageReset'

const Forgot = () => {
  useEffect(() => {
    document.title = 'Reset Password'
  })
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <FormReset/>
      <ImageReset />
    </div>
  )
}

export default Forgot