import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";
import Loading from "../Shared/Loading";

import auth from "../../firebase/firebase.init";

const Myprofile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.pname.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const state = e.target.state.value;
    const zip = e.target.zip.value;
    const updateInfo = { email, name, address, state, zip };
    console.log(updateInfo);
    e.preventDefault();
    axiosPrivate({
      method: "PUT",
      url: `https://repain-server-side.herokuapp.com/user/${email}`,
      data: updateInfo,
    }).then(async (res) => {
      toast("Your Profile has been updated");
    });
  };

  const {
    isLoading,
    error,
    data: profile,
  } = useQuery(["users", user], () =>
    fetch(`https://repain-server-side.herokuapp.com/users/${user.email}`, {
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

  return (
    <div className="w-full">
      <form action="" onSubmit={handleUpdate} className="w-7xl">
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="pname"
            defaultValue={profile ? profile.name : ""}
            disabled
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            value={profile ? profile.email : ""}
            disabled
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            defaultValue={profile ? profile.address : ""}
            placeholder="Type here"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            defaultValue={profile ? profile.state : ""}
            name="state"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Zip</span>
          </label>
          <input
            type="text"
            name="zip"
            defaultValue={profile ? profile.zip : ""}
            placeholder="Type here"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="submit"
            value="Update"
            className="input input-bordered w-full bg-orange max-w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Myprofile;
