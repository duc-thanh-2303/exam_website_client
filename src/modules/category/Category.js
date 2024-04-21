import React, {useEffect} from 'react'
import CardEncourage from './components/CardEncourage'
import CardMain from './components/CardMain'
import CardOther from './components/CardOther'
import Navbar from '../home/components/Navbar'
import Fridge from './assets/Fridge.jpg'
import Dish from './assets/Dishwasher.jpg'
import Stove from './assets/Electric stove.jpg'
import Cleaner from './assets/Vacuum cleaner.jpg'
import Griller from './assets/Griller.jpg'

const Category = () => {
  useEffect(() => {
    document.title = 'Category'
  })
  return (
    <div>
      <Navbar />
      <div style={{
        position: 'absolute',
        paddingLeft: '20vw'
        }}>
        <div style={{
          marginTop: '18vh',
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gridTemplateRows: 'auto auto auto',
          rowGap: '3vh',
          columnGap: '3vw'
        }}>
          <CardMain img={Fridge} topic="Fridge" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href='/overview'/>
          <CardMain img={Dish} topic="Dishwasher" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href='/overview'/>
          <CardMain img={Stove} topic="Electric stove" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href='/overview'/>
          <CardMain img={Cleaner} topic="Vacuum cleaner" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href='/overview'/>
          <CardEncourage img={Griller} topic="Griller" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href='/overview'/>
          <CardOther img={Griller} topic="Other" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href='/overview'/>
        </div>
      </div>
      
    </div>
  )
}

export default Category