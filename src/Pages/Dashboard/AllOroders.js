import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
import AllOrderRow from "./AllOrderRow";

const AllOroders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const [user] = useAuthState(auth);
  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `http://localhost:5000/allorders`,
    }).then((result) => {
      setOrders(result.data);
    });
  }, [user, orders]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <AllOrderRow
              key={order._id}
              index={index}
              order={order}
            ></AllOrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOroders;
