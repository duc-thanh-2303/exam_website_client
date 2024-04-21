import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = 'BESPOKE - BEYOU'
  })
  return (
    <div className='home'>
      <Navbar/>
      <Content/>
    </div>
    
  )
}

export default Home