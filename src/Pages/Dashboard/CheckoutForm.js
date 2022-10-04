import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const { _id, totalPrice, userEmail, userName } = product;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error.message);
    } else {
      setProcessing(true);
      setSuccess("");
      // confirm card payment
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: userName,
              email: userEmail,
            },
          },
        }
      );
      if (error) {
        setError(error.massage);
        setTransactionId("");
        setSuccess("");
        setProcessing(false);
      } else {
        const payment = {
          orderId: _id,
          transactionId: paymentIntent.id,
        };
        fetch(`https://repaint-server-side.herokuapp.com/payments/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        setError("");
        setProcessing(false);
        setTransactionId(paymentIntent.id);
        setSuccess("Your payment is completed");
      }
    }
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://repaint-server-side.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="btn btn-accent"
          type="submit"
          disabled={!stripe || !elements || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-orange">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      {transactionId && (
        <p className="text-success">Your transaction id is {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
