import React from 'react'
import './ButtonProject.css'
import { Link } from 'react-router-dom'

const Buttonproject = () => {
  return (
    <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0'
    }}>
        <Link className='btn__project' to={'/dashboard/upload-project'}>
            <button>Add Project</button>
        </Link>
    </div>
  )
}

export default Buttonproject