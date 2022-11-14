import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({selected,setSelected}) => {
  return (
    <div className="p-5 banner ">
      <div className=" flex  justify-around flex-col-reverse md:flex-row md:items-center md:px-12">
        <div className="rounded-xl shadow-lg bg-white">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
