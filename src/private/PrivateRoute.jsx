import React, { useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(UserContext);
  const state = useLocation();
  console.log(loading);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate state={state} to={"/signIn"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
