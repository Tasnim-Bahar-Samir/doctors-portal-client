import React from "react";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import quote from '../../../assets/icons/quote.svg'
import Review from "./Review";
const reviews = [
  {
    _id: 1,
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    name: "Winson Herry",
    img: person1,
    location: "California",
  },
  {
    _id: 2,
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    name: "Haland",
    img: person2,
    location: "Sydne",
  },
  {
    _id: 3,
    text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    name: "Winson Herry",
    img: person3,
    location: "Washington",
  },
];

const Reviews = () => {
  return (
    <div className=" mt-28 mb-36">
      <div className="flex justify-between items-center mb-16">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-accent text-4xl">What Our Patients Says</h2>
        </div>
        <div>
            <img className=" h-40" src={quote} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
