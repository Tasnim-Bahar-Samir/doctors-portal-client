import React from 'react'
import bannerImg from '../../../assets/images/chair.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner flex flex-col-reverse md:flex-row items-center gap-4 px-12'>
      <div className=''>
        <h1 className='text-5xl font-bold mb-4'>Your New Smile Starts <br /> Here</h1>
        <p className='max-w-[655px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <button className='btn btn-primary mt-7 bg-gradient-to-r from-secondary to-primary text-white'>GET STRTED</button>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner