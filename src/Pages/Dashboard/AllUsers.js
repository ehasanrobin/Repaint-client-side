import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
  const { isLoading, error, data } = useQuery(["users", user], () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        setAllUser(data);
      })
  );
  (isLoading || loading) && <Loading></Loading>;

  const handleAdmin = () => {
    const proceed = window.confirm("are you sure? make this User admin.");
    const role = { role: "admin" };
    if (proceed) {
      axiosPrivate({
        method: "PUT",
        url: `http://localhost:5000/user/${user.email}`,
        data: role,
      }).then(async (res) => {});
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                {user.role === "admin" ? (
                  <td>
                    <div className="badge badge-accent mt-2">Admin</div>
                  </td>
                ) : (
                  <td>
                    <button onClick={handleAdmin} className="btn btn-success">
                      make admin
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
