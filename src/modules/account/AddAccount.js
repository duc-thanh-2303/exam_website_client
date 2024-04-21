import React, {useEffect} from 'react'
import AccountForm from './components/AccountForm'
import Navigation from '../dashboard/components/Navigation'

const AddAccount = () => {
  useEffect(() => {
    document.title = 'Add Account'
  })
  return (
    <div>
        <Navigation/>
        <div>
            <AccountForm/>
        </div>
        
    </div>
  )
}

export default AddAccount