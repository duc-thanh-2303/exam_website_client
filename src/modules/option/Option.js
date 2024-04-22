import React, {useEffect} from 'react'
import CardOption from './components/CardOption'
// import logo from './assets/Women talking-pana.svg'
// import samsung from './assets/samsung.jpg'
import './Option.css'

const Option = () => {
  useEffect(() => {
    document.title = 'Option'
  })
  return (
    <div className='option'>
      <div className='option__card'>
        <CardOption status="online" title="BESPOKE - BE HOME" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." href="https://exam-website-server-api.vercel.app/home" link="Start"/>
        <CardOption status="coming" title="COMING SOON" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." href="#" link="Start"/>
        <CardOption status="coming" title="COMING SOON" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." href="#" link="Start"/>
        <CardOption status="coming" title="COMING SOON" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." href="#" link="Start"/>
      </div>
    </div>

  )
}


export default Option
