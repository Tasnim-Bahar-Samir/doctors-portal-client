import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authProvider } from '../Contexts/Authcontext'
import useAdmin from '../Hooks/useAdmin'

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(authProvider)
    const location = useLocation()
    const [isAdmin,isLoading] = useAdmin(user?.email)

    if(loading || isLoading){
        return <p>loading...</p>
    }

    if(user && isAdmin){
        return children;
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default AdminRoute;