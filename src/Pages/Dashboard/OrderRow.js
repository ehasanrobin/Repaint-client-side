import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const {
    _id,
    productName,
    productQuantity,
    totalPrice,
    userAddress,
    userState,
    status,
    userZip,
    date,
    paid,
    transactionId,
  } = order;

  const handleDelete = (id) => {
    const proceed = window.confirm();
    if (proceed) {
      axiosPrivate({
        method: "DELETE",
        url: `https://repaint-server-side1.vercel.app/orders/${id}`,
      }).then(async (res) => {
        navigate("/dashboard/");
        toast("Your Order has been deleted");
      });
    }
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-50">Quantity:{productQuantity}</div>
            <div className="text-sm opacity-50">Price: ${totalPrice}</div>
          </div>
        </div>
      </td>
      <td>
        {userAddress}
        <br />
        <span className="badge badge-ghost badge-sm">{userState}</span>
      </td>
      <td>{date}</td>
      <td className=" items-center justify-center">
        {status === "pending" ? (
          <span className="badge badge-primary  badge-lg p-5 capitalize">
            {status}
          </span>
        ) : (
          <p className="text-success">{status}</p>
        )}
      </td>
      <th>
        {status === "pending" && paid !== true ? (
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            Cancel
          </button>
        ) : (
          <p className="text-success">completed</p>
        )}
      </th>
      <td>
        {paid !== true ? (
          <Link to={`/dashboard/payment/${_id}`} className="btn btn-primary ">
            payment
          </Link>
        ) : (
          <div>
            <p className="text-success">paid</p>
            <p className="text-success">{transactionId}</p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
