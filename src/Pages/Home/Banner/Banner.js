import React from 'react'
import bannerImg from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/PrimaryButton'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner py-5 md:p-y-0 md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-4 md:px-12'>
      <div className=''>
        <h1 className='text-5xl font-bold mb-4'>Your New Smile Starts <br /> Here</h1>
        <p className='max-w-[655px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
      <div>
        <img className='w-full' src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner