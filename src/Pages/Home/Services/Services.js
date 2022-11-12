import React from 'react'
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard'
const Services = () => {

    const services = [
        {
            id:1,
            img:fluoride,
            name: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:2,
            img:cavity,
            name: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:3,
            img:whitening,
            name: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
  return (
    <div className='text-center mt-32'>
        <h3 className='text-secondary font-bold text-xl'>OUR SERVICES</h3>
        <h2 className='text-accent text-4xl'>Services We Provide</h2>
        <div className='gap-8 mt-16 grid lg:grid-cols-3'>
        {
            services.map(service => <ServiceCard key={service.id} service = {service} />)
        }
        </div>
    </div>
  )
}

export default Services