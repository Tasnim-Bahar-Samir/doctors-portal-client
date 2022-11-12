import React from 'react'

const Review = ({review}) => {
    const {text,name,img,location} = review;
  return (
    <div className='shadow-xl rounded-2xl p-8'>
       <div className='mb-9'>
            <p>{text}</p>
       </div>
       <div className='flex items-center gap-4 '>
        <div className=''>
            <img className='w-16 avatar rounded-full p-1 border border-secondary' src={img} alt="" />
        </div>
        <div>
            <h6 className='text-xl font-semibold text-accent'>{name}</h6>
            <p>{location}</p>
        </div>
       </div>
    </div>
  )
}

export default Review