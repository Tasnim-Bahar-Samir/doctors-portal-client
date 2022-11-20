import {createBrowserRouter} from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import Main from '../Layout/Main'
import Appointment from '../Pages/Appointment/Appointment/Appointment'
import ProtectedRoute from './ProtectedRoute'
import MyAppointments from '../Pages/Dashboard/MyAppointments/MyAppointments'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Home/Register/Register'
import Login from '../Pages/Login/Login'
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers'
import AdminRoute from './AdminRoutes'
import AddDoctor from '../Pages/Dashboard/AddDoctors/AddDoctor'
import ManageDoctors from '../Pages/Dashboard/ManageDoctors/ManageDoctors'
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/appointment',
                element:<Appointment/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<ProtectedRoute><DashboardLayout/></ProtectedRoute>,
        children: [
            {
                path:'/dashboard',
                element:<MyAppointments/>
            },
            {
                path:'/dashboard/allUsers',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'/dashboard/addDoctor',
                element:<AdminRoute><AddDoctor/></AdminRoute>
            },
            {
                path:'/dashboard/manageDoctors',
                element:<AdminRoute><ManageDoctors/></AdminRoute>
            },
        ]
    }
])