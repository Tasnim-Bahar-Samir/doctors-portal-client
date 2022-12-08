import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AllUsers = () => {
    
    const { data,refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
          fetch(`https://doctors-portal-server-omega-olive.vercel.app/users`).then((res) =>
            res.json()
          ),
      });

      const handleAdmin = id =>{
        fetch(`https://doctors-portal-server-omega-olive.vercel.app/users/admin/${id}`,{
            method:"PUT",
            headers:{
                authorization: localStorage.getItem('doc_port_token')
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                refetch()
            }
        })
        .catch(err => console.log(err))
      }
  return (
    <div>
        <h3 className='text-2xl'>All Users</h3>
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.data.map((user,index) => {
            return <tr key={index}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role !== 'admin' && <button onClick={()=>handleAdmin(user._id)} className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
            <td><button className='btn btn-xs bg-red-600'>Delete</button></td>
          </tr>
        })
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AllUsers