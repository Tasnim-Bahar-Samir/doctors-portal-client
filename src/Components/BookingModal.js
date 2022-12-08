import { format } from "date-fns";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { authProvider } from "../Contexts/Authcontext";

const BookingModal = ({ booking, selected,setBooking,refetch }) => {
    const {name,slots,price} = booking
  const date = format(selected, "PP");
  const {user} = useContext(authProvider)

  const handleBooking = (e)=>{
    e.preventDefault()
    const form = e.target;
    const booking = {
      date,
      email : user?.email,
      treatment: name,
      patient: form.patient.value,
      slot:form.slot.value,
      phone: form.phone.value,
      price
    }
    fetch('https://doctors-portal-server-omega-olive.vercel.app/bookings',{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        console.log(data)
        toast.success('Confirm Booking')
        setBooking(null)
      refetch()
      }else{
        toast.error(data.message)
      }
      
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 mt-11">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full" required>
               
              {
                slots?.map((slot,index) =><option key={index}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="patient"
              placeholder="Patient Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name = "phone"
              placeholder="Phone"
              className="input input-bordered w-full"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent input-bordered text-white w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
