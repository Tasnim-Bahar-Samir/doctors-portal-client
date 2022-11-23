import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-6xl'>404</h1>
            <p>Page not found.</p>
            <p>{error.statusText || error.message}</p>
        </div>
    </div>
  )
}

export default Error