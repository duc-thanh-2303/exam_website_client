import React, {useEffect} from 'react'
import Navigation from '../dashboard/components/Navigation'
import FormProject from './components/FormProject'

const UploadProject = () => {
  useEffect(() => {
    document.title = 'Add Project'
  })
  return (
    <div>
      <Navigation/>
      <div>
        <FormProject/>
      </div>
    </div>
  )
}

export default UploadProject