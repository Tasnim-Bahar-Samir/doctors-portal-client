
import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const info = [
  {
    id: 1,
    title: "Opening Hours",
    icon: clock,
    desc: "Open 10pm to 12pm everyday only friday is off.",
    bg: "bg-gradient-to-r from-secondary to-primary"
  },
  {
    id: 2,
    title: "Our Location",
    icon: marker,
    desc: "Brooklyn, NY 10036, United States",
    bg: "bg-accent"
  },
  {
    id: 3,
    title: "Contact us now",
    icon: phone,
    desc: "+000 123 456789",
    bg: "bg-gradient-to-r from-secondary to-primary"
  },
];
const Info = () => {
  return <div className="grid md:grid-cols-3 gap-6 mt-7">
    {
        info.map(data => <InfoCard key={data.id} data = {data}/>)
    }
  </div>;
};

export default Info;
