import React from "react";

const ServiceCard = ({service}) => {
    const {img,name,details} = service;
  return (
    <div>
      <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-accent">{name}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
