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
import Payment from '../Pages/Dashboard/Payment/Payment'
import Error from '../Pages/Error/Error'
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        errorElement: <Error/>,
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
        errorElement: <Error/>,
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
            {
                path:'/dashboard/payment/:id',
                element:<Payment/>,
                loader: ({params})=> fetch(`https://doctors-portal-server-omega-olive.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])