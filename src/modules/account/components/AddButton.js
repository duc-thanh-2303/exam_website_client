import React from 'react'
import {Link} from 'react-router-dom'
import './AddButton.css'
const AddButton = () => {
  return (
    <div>
        <Link className='add-btn' to='https://exam-website-server-api.vercel.app/dashboard/add-account'>
           Add account
        </Link>
    </div>
  )
}

export default AddButton
