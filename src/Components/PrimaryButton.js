import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className='btn btn-primary mt-7 bg-gradient-to-r from-secondary to-primary text-white'>{children}</button>
  )
}

export default PrimaryButton