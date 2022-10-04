import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LnhEqIb25AxNl5o47N4fb3QwyPy24dcZurGR2mUDuvx1R0vUYZ2Ioy4Ya9hqGMSPGJnLMCKmz8X0XByrZoGI31e00wrVCYHre"
);
const Payment = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: product,
  } = useQuery("singleData", () =>
    fetch(`https://repaint-server-side.herokuapp.com/order/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange">
            Welcome {product.userName}
          </h1>
          <p className="py-6">
            Payment for {product.productName}, quanity:{product.productQuantity}
            , Price : {product.totalPrice}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
