import React, { useState } from 'react';
import './LoginForm.css'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { Link } from 'react-router-dom';

function LoginForm({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://exam-website-server-api.vercel.app/login", { username, password });
      const token = response.data;
      // Lưu token vào localStorage hoặc sessionStorage
      localStorage.setItem('token', token);
      // Giải mã token để lấy thông tin về vai trò của người dùng
      const decodedToken = jwtDecode(token);
      if (decodedToken.role === 'admin') {
        // Chuyển hướng đến trang dashboard nếu là admin
        window.location.href = 'https://exam-website-client.vercel.app/dashboard';
      } else {
        // Chuyển hướng đến trang home nếu là user
        window.location.href = 'https://exam-website-client.vercel.app//option';
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Tài khoản hoặc mật khẩu không đúng.');
    }
  };

  return (
    <div className='loginForm'>
      <h2>Welcome back</h2>
      <p>Welcome back! Please enter your details.</p>
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' />
        </div>
        <div className='password'>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********' />
        </div>
        {/* <a href='/reset-password'>Forgot password</a> */}
        <Link to='/reset-password'>Reset Password</Link>
        <button type="submit">Sign in</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default LoginForm;
