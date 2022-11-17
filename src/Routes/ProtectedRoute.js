import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authProvider } from '../Contexts/Authcontext'

const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(authProvider)
    const location = useLocation()

    if(loading){
        return <p>loading...</p>
    }

    if(user){
        return children;
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default ProtectedRoute