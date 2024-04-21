import React from 'react'
import logo from '../assets/Logo.png'
import '../components/Navbar.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await axios.post('https://exam-website-server-api.vercel.app/logout'); // Gửi yêu cầu logout tới backend
      // Chuyển hướng người dùng đến trang đăng nhập
      window.location.href = '/'; // Đổi đường dẫn này nếu đường dẫn của trang login khác
    } catch (error) {
      console.error('Logout không thành công:', error);
    }
  };
  return (
    <div className='navbar'>
      <div className='navbar__image'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='navbar__btn'>
        <Link className='navbar__btn-over' to="/home/support">
          <button type='submit'>Support</button>
        </Link>
        <Link className='navbar__btn-over' to="/logout">
          <button type='submit' onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
