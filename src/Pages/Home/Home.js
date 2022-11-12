import React from 'react'
import Appointment from './Appointment/Appointment'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import Reviews from './Reviews/Reviews'
import Services from './Services/Services'

const Home = () => {
  return (
    <div className='px-5'>
        <Banner/>
        <Info/>
        <Services/>
        <Appointment/>
        <Reviews/>
    </div>
  )
}

export default Home