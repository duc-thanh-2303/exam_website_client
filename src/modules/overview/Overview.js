import React, { useEffect } from 'react'
import CardOverview from './components/CardOverview'
import Navbar from '../home/components/Navbar'

const Overview = () => {
  useEffect(() => {
    document.title = 'Overview'
  })
  return (
    <div style={{
      width: '100%',
      height: 'auto',
    }}>
      <Navbar/>
      <div>
        <CardOverview/>
      </div>

    </div>
  )
}

export default Overview