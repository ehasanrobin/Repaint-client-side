import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
import Footer from "../Shared/Footer";

const Tools = ({ setOrder }) => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axiosPrivate
      .get(`http://localhost:5000/services/${id}`)
      .then(function (res) {
        setService(res.data);
      })
      .catch(function (error) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
        // handle error
      });
  }, []);
  const [quantityPrice, setQuantityPrice] = useState(0);

  const handlePurchase = () => {
    service.quanity = quantityPrice;
    setOrder(service);
    navigate("/orders");
  };
  return (
    <>
      <div className="grid md:grid-cols-2 max-w-7xl min-h-screen mx-auto items-center gap-6">
        <div>
          <img src={service.img} className="w-full" alt="" />
        </div>
        <div className="grid gap-3">
          <h1 className="text-6xl font-bold">{service.name}</h1>
          <p className="text-2xl">min: {service.minOrderQuanity}</p>
          <p className="text-2xl">available: {service.orderQuanity}</p>

          <div>
            <label htmlFor="" className="text-2xl">
              Quanity:{" "}
            </label>
            <input
              type="number"
              defaultValue={service.minOrderQuanity}
              onChange={(e) => setQuantityPrice(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <p className="text-2xl">Price :{service.price}</p>
          {service.minOrderQuanity <= quantityPrice &&
          service.orderQuanity >= quantityPrice ? (
            <button
              onClick={handlePurchase}
              className="btn bg-orange max-w-full"
            >
              Purchase
            </button>
          ) : (
            <button className="btn bg-orange max-w-full" disabled>
              Purchase
            </button>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Tools;
