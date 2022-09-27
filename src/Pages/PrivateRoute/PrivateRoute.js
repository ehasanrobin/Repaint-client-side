import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const state = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={state.pathname} replace={true} />;
  }
  return children;
};

export default PrivateRoute;
