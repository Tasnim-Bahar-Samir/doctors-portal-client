import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [proccessing, setProccessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { price, patient, email,_id } = booking;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("doc_port_token"),
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error.message);
      setCardError(error.message);
      return;
    } else {
      setCardError("");
    }
    setSuccess("");
    setProccessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
        const payment = {
            price,
            email,
            bookingId: _id,
            transactionId: paymentIntent.transactionId
        }
      fetch("http://localhost:5000/payments",{
        method: "POST",
        headers: {
            'content-type':'application/json',
            authorization: localStorage.getItem('doc_port_token')
        },
        body: JSON.stringify(payment)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setSuccess("Your payment is completed!");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProccessing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="my-6 w-96"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-success"
          disabled={!stripe || !clientSecret || proccessing}
        >
          Pay
        </button>
      </form>
      {cardError && <p>{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-600">{success}</p>
          <p className=" font-semibold">Your transactionId{transactionId}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
