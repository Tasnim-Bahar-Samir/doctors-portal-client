import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M6Y2GFFVS7OUdBj03GSxKXn3PrelWosqx36pe47ln97rKN20oDqgVkGxE2Dtd11CvZFduBT3IhcoHDJeXwSjNPn00YDTMdb9h"
);

const Payment = () => {
  const {data}= useLoaderData();
  console.log(data);

  return (
    <div>
      <h2 className="text-2xl">Payment for -{data.treatment}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm 
        booking = {data}
        />
      </Elements>
    </div>
  );
};

export default Payment;
