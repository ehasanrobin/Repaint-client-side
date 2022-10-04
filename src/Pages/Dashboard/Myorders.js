import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import OrderRow from "./OrderRow";
const Myorders = () => {
  // const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery(["orders", user], () =>
    fetch(`https://repaint-server-side.herokuapp.com/orders/${user?.email}`, {
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

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {orders?.length ? (
            <>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>action</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderRow key={order._id} order={order}></OrderRow>
                ))}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td>
                  <span className="text-3xl min-h-screen grid items-center justify-center">
                    No orders available
                  </span>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Myorders;
