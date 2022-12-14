import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../../Contexts/Authcontext";

const MyAppointments = () => {
  const { user } = useContext(authProvider);
  const { data = {} } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-omega-olive.vercel.app/bookings?email=${user?.email}`,{
          headers: {
            authorization: localStorage.getItem('doc_port_token')
          }
        }
      );
      const data = res.json();
      return data;
    },
  });
  const bookings = data?.data;
  console.log(bookings);
  if(bookings?.length < 1){
    return <div className="flex h-96 items-center justify-center text-2xl">No Bookings To Show</div>
  }
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold">My Appointments</h2>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full mr-5">
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>

            </tr>
          </thead>
          <tbody>
            {
                bookings?.map((booking,index)=>{
                    return <tr key={index}>
                    <th>{index+1}</th>
                    <td>{booking.patient}</td>
                    <td>{booking.treatment}</td>
                    <td>{booking.date}</td>
                    <td>{booking.slot}</td>
                    <td>{booking.price&& !booking.paid && <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-sm btn-primary">Pay</Link>}
                    {
                      booking.price && booking.paid && <span className="text-green-600 font-semibold text-lg">Paid</span>
                    }</td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
