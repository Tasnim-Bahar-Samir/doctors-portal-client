import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailableAppoint from '../AvailableAppoint/AvailableAppoint'

const Appointment = () => {
  
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
        <AppointmentBanner selected ={selected} setSelected = {setSelected}/>
        <AvailableAppoint selected= {selected}/>
    </div>
  )
}

export default Appointment