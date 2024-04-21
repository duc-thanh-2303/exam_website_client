import React, {useEffect} from 'react'
import Navigation from './components/Navigation'

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard'
  })
  return (
    <div>
      <Navigation/>
    </div>
  )
}

export default Dashboard