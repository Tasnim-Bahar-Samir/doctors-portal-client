
import React from "react";

const AppointmentOption = ({data,setBooking}) => {
  
  const {name,slots} = data;
  return (
    <div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-xl text-secondary">{name}</h2>
          <p>{slots.length>0? slots[0]:"Try Another Day"}</p>
          <p>{slots.length} {slots.length > 1?"spaces":"space"} available.</p>
          <div className="card-actions justify-center">
            <label disabled ={slots.length === 0} onClick={()=>setBooking(data)} htmlFor="booking_modal" className="btn btn-primary mt-7 bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
