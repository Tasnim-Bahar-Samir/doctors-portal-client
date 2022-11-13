import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from '../../../Components/BookingModal'
import AppointmentOption from './AppointmentOption'

const AvailableAppoint = ({selected}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([])
    const [booking,setBooking] = useState({})
    useEffect(()=>{
        fetch('AppointmentSession.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
  return (
    <div className='md:px-5'>
        <h5 className='text-secondary text-xl text-center  my-16'>Available Appointments on {format(selected,"PP")} </h5>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                appointmentOptions.map(data => <AppointmentOption setBooking ={setBooking} key={data._id} data = {data}/>)
            }
        </div>
        <BookingModal
        selected = {selected}
        booking = {booking}/>
    </div>
  )
}

export default AvailableAppoint