import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import logo from "../../images/logo.png";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navmenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blogs">blogs</Link>
      </li>
      <li>
        <Link to="/contactUs">contact us</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("accessToken");
              }}
            >
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="container bg-white">
      <div className="navbar  max-w-7xl justify-between mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navmenu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navmenu}</ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
