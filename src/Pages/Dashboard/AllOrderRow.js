import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";

const AllOrderRow = ({ order, index }) => {
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
  } = order;

  const handleDelete = (id) => {
    const proceed = window.confirm();
    if (proceed) {
      axiosPrivate({
        method: "DELETE",
        url: `https://repaint-server-side.herokuapp.com/orders/${id}`,
      }).then(async (res) => {
        navigate("/dashboard/");
        toast("Your Order has been deleted");
      });
    }
  };

  const handleStatus = (id) => {
    const proceed = window.confirm("Are you sure?want to make it Shipping");
    if (proceed) {
      axiosPrivate({
        method: "PUT",
        url: `https://repaint-server-side.herokuapp.com/-side.herokuapp.com/orders/${id}`,
        data: { status: "shipped" },
      }).then(async (res) => {
        toast("order has been shipped");
      });
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
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
          <span
            onClick={() => handleStatus(_id)}
            className="badge badge-primary  badge-lg p-5 capitalize"
          >
            {status}
          </span>
        ) : (
          <p className="text-success">Shipped</p>
        )}
      </td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          Cancel
        </button>
      </th>
    </tr>
  );
};

export default AllOrderRow;
