import React from 'react'
import { Link } from 'react-router-dom'

const ButtonDetails = () => {
  return (
    <div>
        <Link to={`https://exam-website-client.vercel.app/home/overview/`}>
            <button>Next</button>
        </Link>
    </div>
  )
}

export default ButtonDetails
