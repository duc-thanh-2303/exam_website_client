import React from 'react'
import '../components/Content.css'
import {Link} from 'react-router-dom'

const Content = () => {
  return (
    <div class="header">
      <div className='header__infor-text'>
        <h1>BESPOKE - BE HOME 2024</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      <div className='header__info-link'>
        <div>
          <p>Location</p>
          <span>Distric 1, Ho Chi Minh City</span>
        </div>
        <div>
          <p>Start</p>
          <span>April 1, 2024</span>
        </div>
        <div>
          <p>End</p>
          <span>May 1, 2024</span>
        </div>
        <Link to="/home/overview" className='header__infor-link-btn'>
          <ion-icon style={{
            color: 'white',
            fontSize: '1.5vw'
          }} name="chevron-forward"></ion-icon>
        </Link>
      </div>
      <div className='header__info-intro'>
        <div>
          <p>50+</p>
          <span>examiner</span>
        </div>
        <div>
          <p>100+</p>
          <span>Candidates</span>
        </div>
        <div>
          <p>100+</p>
          <span>prize</span>
        </div>
      </div>
    </div>
  )
}

export default Content