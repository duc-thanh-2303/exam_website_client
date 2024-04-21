import React, {useEffect} from 'react'
import Navigation from '../dashboard/components/Navigation'
import ButtonReport from './components/ButtonReport'

const Report = () => {
  useEffect(() => {
    document.title = 'Report'
  })
  return (
    <div>
      <Navigation />
      <div style={{
        position: 'absolute',
        top: '2vh',
        left: '22vw'
      }}>
        <ButtonReport/>
      </div>
    </div>
  )
}

export default Report