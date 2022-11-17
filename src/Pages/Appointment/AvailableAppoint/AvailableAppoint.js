import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { da } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import BookingModal from "../../../Components/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppoint = ({ selected }) => {
  // const [appointmentOptions,setAppointmentOptions] = useState([])
  const [booking, setBooking] = useState({});
  const date = format(selected,"PP")

  //using react-query to get data from database
  const { data,refetch } = useQuery({
    queryKey: ["appointmentOptions",date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then((res) =>
        res.json()
      ),
  });
  console.log(data);
  // useEffect(()=>{
  //     fetch('http://localhost:5000/appointmentSessions')
  //     .then(res => res.json())
  //     .then(data => {
  //         setAppointmentOptions(data.data)
  //         console.log(data)
  //     })
  // },[])
  return (
    <div className="md:px-5">
      <h5 className="text-secondary text-xl text-center  my-16">
        Available Appointments on {format(selected, "PP")}{" "}
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data.map((data) => (
          <AppointmentOption
            setBooking={setBooking}
            key={data._id}
            data={data}
          />
        ))}
      </div>
      {booking && <BookingModal refetch = {refetch} selected={selected} setBooking= {setBooking} booking={booking} />}
    </div>
  );
};

export default AvailableAppoint;
