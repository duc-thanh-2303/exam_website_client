import React, {useEffect, useState} from 'react'
import FormDetails from './components/FormDetails'
import InforDetails from './components/InforDetails'
import Navbar from '../home/components/Navbar'
import axios from 'axios'
import ButtonDetails from './components/ButtonDetails'

const Details = () => {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    document.title = 'Details'
  })
  useEffect(() => {
    axios.get('http://localhost:5000/info')
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <Navbar/>
        <div style={{
      position: 'relative',
      top: '20vh',
      left: '10vw'
    }}>
          <InforDetails info={info}/>
          <FormDetails/>
          <ButtonDetails/>
        </div>
    </div>
  )
}

export default Details