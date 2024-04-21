import React, {useEffect} from 'react'
import Navigation from '../dashboard/components/Navigation'
import AddButton from './components/AddButton'
import TableAccount from './components/TableAccount'


const Account = () => {
  useEffect(() => {
    document.title = 'Account'
  })
  return (
    <div>
      <Navigation />
      <div style={{
        position: 'absolute',
        top: '4vh',
        right: '0',
        left: '22vw'
      }}>
        <AddButton/>
        <TableAccount/>
      </div>
    </div>
  )
}

export default Account