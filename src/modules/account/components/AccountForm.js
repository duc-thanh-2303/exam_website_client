import React, {useState} from 'react'
import axios from 'axios'
import './AccountForm.css'

const AccountForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password:'',
    email: '',
    fullName: '',
    gender: '',
    country: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  axios.defaults.withCredentials = true;
  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await axios.post('https://exam-website-server-api.vercel.app/dashboard/add-account', formData)
      setMessage(response.data)
      setFormData({
        username: '',
        password: '',
        email: '',
        fullName: '',
        gender: '',
        country: ''
      })
    } catch (error) {
      console.error(error)
      setMessage('Error registering user.')
    }
  }

  return (
    <div style={{
      position: 'absolute',
      // backgroundColor: 'red',
      top: '2vh',
      right: '2vh',
      left: '22vw'
    }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className='account-form'>
        <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} require/>
        <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} require/>
        <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} require/>
        <input type='text' name='fullName' placeholder='Full Name' value={formData.fullName} onChange={handleChange} require/>
        <select style={{
          marginTop: '1vw',
          marginBottom: '1vw',
        }} name='gender' value={formData.gender} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type='text' name='country' placeholder='Country' value={formData.country} onChange={handleChange}/>
        <button type='submit'>Register</button>
      </form>
      <p style={{
        marginTop: '20px',
        marginLeft: '33vw'
      }}>{message}</p>
    </div>
  )
}

export default AccountForm
