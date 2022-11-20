import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ManageDoctors = () => {
    const {data} = useQuery({
        queryKey: ['doctors'],
        queryFn:()=> fetch('http://localhost:5000/doctors').then(res=>res.json())
    })
    console.log(data)
  return (
    <div>
        <h2>Manage Doctors</h2>

    </div>
  )
}

export default ManageDoctors