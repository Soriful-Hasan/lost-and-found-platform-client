import axios from "axios";
import React, { useContext } from "react";
import useUserContext from "./ContextHook";
import UserContext from "../provider/AuthContext";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_apiUrl}`,
});
const useAxiosSecure = () => {
  const { user, userSignOut, setLoading } = useContext(UserContext);

  const token = user?.accessToken;

  axiosInstance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error in interceptors response", error.status);
      if (error.response?.status === 401 || error.response?.status === 403) {
        userSignOut()
          .then((res) => {
            alert("user sign out from axios secure");
            setLoading(false);
          })
          .catch((error) => console.log("error"));
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
