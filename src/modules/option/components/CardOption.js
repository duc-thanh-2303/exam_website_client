import React from 'react'
import './CardOption.css'
import {Link} from 'react-router-dom'

const CardOption = (props) => {
    console.log(props)
  return (
    <div className='card__option'>
      <div className='card__option-info'>
        <div className='card__option-info-status'>
          <ion-icon style={{
            color: 'green'
          }} name="ellipse"></ion-icon>
          <p>{props.status}</p>
        </div>
        <div className='card__option-info-text'>
          <h3>{props.title}</h3>
          <p>{props.des}</p>
        </div>
        <Link className='card__option-info-link' to={props.href}>
          <p>{props.link}</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>  
      </div>
      <div className='card__option-image'>
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default CardOption