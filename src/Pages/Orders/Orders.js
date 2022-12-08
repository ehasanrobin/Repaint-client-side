import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const Orders = ({ order }) => {
  const navigate = useNavigate();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [user, loading] = useAuthState(auth);
  const { _id, name, quanity, price, img } = order;
  const totalPrice = quanity * price;

  const {
    isLoading,
    error,
    data: profile,
  } = useQuery(["users", user], () =>
    fetch(`https://repaint-server-side1.vercel.app/users/${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );
  isLoading && <Loading></Loading>;

  if (loading) {
    return <Loading></Loading>;
  }
  if (!order.name) {
    navigate("/");
  }

  const handleOrder = async (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userAddress = e.target.address.value;
    const userState = e.target.state.value;
    const userZip = e.target.zip.value;

    const order = {
      userName,
      userEmail,
      productId: _id,
      productName: name,
      productQuantity: quanity,
      totalPrice,
      userAddress,
      userState,
      userZip,
      date,
      status: "pending",
    };

    await axiosPrivate({
      method: "post",
      url: `https://repaint-server-side1.vercel.app/orders`,
      data: order,
    }).then(async (res) => {
      navigate("/dashboard/");
      toast("Your Order Has been placed");
    });
  };
  return (
    <div className="grid lg:grid-cols-2 min-h-screen items-center max-w-7xl mx-auto">
      <div>
        <form action="" onSubmit={handleOrder}>
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              defaultValue={profile ? profile.name : ""}
              name="name"
              disabled
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={profile ? profile.email : ""}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              defaultValue={profile ? profile.address : ""}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text">State</span>
            </label>
            <input
              type="text"
              name="state"
              defaultValue={profile ? profile.state : ""}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mx-auto w-full max-w-xs">
            <label className="label">
              <span className="label-text">Zip</span>
            </label>
            <input
              type="text"
              name="zip"
              defaultValue={profile ? profile.zip : ""}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control mx-auto w-full max-w-xs mt-4">
            <input
              type="submit"
              value="proceed & checkout"
              className="input input-bordered w-full max-w-xs bg-orange"
            />
          </div>
        </form>
      </div>
      <div>
        <div className="card card-side  shadow-xl">
          <figure>
            <img src={img} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-xl capitalize">quanity : {quanity}</p>
            <p className="text-xl capitalize text-red-500">
              Total Price : ${totalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
