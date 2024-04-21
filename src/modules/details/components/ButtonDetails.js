import React from 'react'
import { Link } from 'react-router-dom'

const ButtonDetails = () => {
  return (
    <div>
        <Link to={`/home/overview/`}>
            <button>Next</button>
        </Link>
    </div>
  )
}

export default ButtonDetails