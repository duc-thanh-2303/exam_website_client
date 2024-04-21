import React from 'react'
import './CardOther.css'
import {Link} from 'react-router-dom'

const CardOther = (props) => {
  console.log(props)
  return (
    <div className='cardOther'>
        <div className='cardOther-img'>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className='cardOther-info'>
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

export default CardOther