import React, {useState} from 'react'
import './FormReset.css'
import axios from 'axios'

const FormReset = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const respone = await axios.post('/reset-password', {email})
      setMessage(respone.data)
    } catch (error) {
      console.error(error)
      setMessage('Please try again later.')
    }
  }
  return (
    <div className='form-reset'>
        <a href='/'>
        <ion-icon name="chevron-back-outline"></ion-icon>Back</a>
        <form onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <p>Enter the email address associated with your account</p>
            <input type='email' id='email' name='email' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Reset</button>
        </form>
        <p style={{
          color: 'green',
          marginTop: '2vh',
          marginLeft: '-1vw'
        }}>{message}</p>
    </div>
  )
}

export default FormReset