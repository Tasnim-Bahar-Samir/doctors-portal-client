import React, { useState } from "react";
import bannerImg from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="p-5 banner ">
      <div className=" flex  justify-around flex-col-reverse md:flex-row md:items-center md:px-12">
        <div className="rounded-md shadow-sm bg-white w-fit">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src={bannerImg} alt="" />
        </div>
      </div>
      <p className="text-secondary text-xl text-center mt-10">You Have Selected Date: {format(selected,"PP")} </p>
    </div>
  );
};

export default AppointmentBanner;
