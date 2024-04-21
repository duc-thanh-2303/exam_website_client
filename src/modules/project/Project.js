import React, {useEffect} from 'react'
import Navigation from '../dashboard/components/Navigation'
import Buttonproject from './components/ButtonProject'
import TableProject from './components/TableProject'

const Project = () => {
  useEffect(() => {
    document.title = 'Project'
  })
  return (
    <div>
      <Navigation />
      <div style={{
        position: 'absolute',
        top: '2vh',
        right: '2vh',
        left: '23vw'
      }}>
        <Buttonproject/>
        <TableProject/>
      </div>
    </div>
  )
}

export default Project