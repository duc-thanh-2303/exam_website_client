import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import './Navigation.css'
import axios from 'axios'

const Navigation = () => {
    const handleLogout = async () => {
        try {
          await axios.post('/logout'); // Gửi yêu cầu logout tới backend
          // Chuyển hướng người dùng đến trang đăng nhập
          window.location.href = '/'; // Đổi đường dẫn này nếu đường dẫn của trang login khác
        } catch (error) {
          console.error('Logout không thành công:', error);
        }
      };
  return (
    <div style={{
        position: 'fixed',
        top: '2vh',
        bottom: '2vh',
        left: '1.2vw',
        width: '20vw',
        height: '95vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        border: 'none',
        borderRadius: '0.8vw'
    }}>
        <div class="head">
            <Link to="/dashboard" className='head-logo'>
                <img src={logo} alt="logo"/>
            </Link>

            <ul>
                <li>
                    <Link className='link' style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '1.2vw',
                    }} to="/dashboard/project">Project</Link>
                </li>
                <li>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '1.2vw',
                    }} to="/dashboard/account">Account</Link>
                </li>
                <li>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '1.2vw',
                    }} to="/dashboard/report">Report</Link>
                </li>
            </ul>
        </div>
        
        <Link className='btn' to="/logout">
            <button onClick={handleLogout}>
                <ion-icon name="log-out-outline"></ion-icon>Log out
            </button>

        </Link>
    </div>
  )
}

export default Navigation