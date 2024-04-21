import React from 'react'
import './CardEncourage.css'
import {Link} from 'react-router-dom'

const CardEncourage = (props) => {
  console.log(props)
  return (
    <div className='cardEn'>
        <div className='cardEn-img'>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className='cardEn-info'>
          <h1>{props.topic}</h1>
          <p>{props.des}</p>
          <Link style={{
                position: 'absolute',
                bottom: '4vh',
                left: '1.3vw'
            }} to={props.href}>
                    <button>Start</button>
            </Link>
        </div>

    </div>
  )
}

export default CardEncourage