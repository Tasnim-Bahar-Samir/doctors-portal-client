import React from 'react'
import doctorImg from '../../../assets/images/doctor.png'
import appointmentBg from '../../../assets/images/appointment.png'

const Appointment = () => {
  return (
    <div style={{backgroundImage:`url(${appointmentBg})`}} className='flex mt-40 items-center mb-5'>
        <div className='md:w-1/2 hidden md:block'>
            <img className='w-full -mt-24' src={doctorImg} alt="" />
        </div>
        <div className='md:w-1/2 text-white p-5 md:p-0'>
            <h4 className='text-primary font-bold text-xl'>Appointment</h4>
            <h2 className='text-4xl font-semibold my-5'>Make an appointment Today</h2>
            <p className='leading-6 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className='btn btn-primary mt-7 bg-gradient-to-r from-secondary to-primary text-white'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Appointment