import React, { useEffect } from 'react'
import Navbar from '../home/components/Navbar'
import SupportForm from '../support/components/SupportForm'
import SupportImage from '../support/components/SupportImage'
import TitleForm from '../support/components/TitleForm'

const Support = () => {
  useEffect(() => {
    document.title = 'Support'
  })
  return (
    <div style={{position: 'relative'}}>
      <Navbar/>
      <div>
        <div>
          <SupportImage/>
        </div>
        <div>
          <TitleForm/>
          <SupportForm/>
        </div>
      </div>
    </div>
  )
}

export default Support