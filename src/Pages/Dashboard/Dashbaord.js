import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";

const Dashbaord = () => {
  const [user] = useAuthState(auth);
  const [userAdmin, setUserAdmin] = useState({});

  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `http://localhost:5000/users/${user.email}`,
    }).then((res) => {
      setUserAdmin(res.data);
    });
  }, [user]);

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <h1 className="text-4xl font-bold p-5 bg-orange">
            welcome to dashboad {user.displayName}
          </h1>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {userAdmin.role !== "admin" && (
              <>
                <li>
                  <Link to="">My Orders</Link>
                </li>

                <li>
                  <Link to="addreview">Add Review</Link>
                </li>
              </>
            )}
            <li>
              <Link to="myprofile">My profile</Link>
            </li>
            {userAdmin.role === "admin" && (
              <>
                <li>
                  <Link to="Allusers">All Users</Link>
                </li>
                <li>
                  <Link to="blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="addPost">Add Post</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
