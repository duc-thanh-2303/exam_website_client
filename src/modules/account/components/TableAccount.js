import React, {useEffect, useState} from 'react'
import './TableAccount.css'
import axios from 'axios'

const TableAccount = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://exam-website-server-api.vercel.app/dashboard/account');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{
        position: 'absolute',
        top: '10vh',
        right: '2vh',
        left: '0vw',
        // bottom: '0',
        // backgroundColor: 'red'
    }}>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Full Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.fullName}</td>
                <td>{user.role}</td>
                </tr>
            ))}
            </tbody>
      </table>
    </div>
  )
}

export default TableAccount
