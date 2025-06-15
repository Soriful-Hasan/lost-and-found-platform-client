import axios from "axios";
import React, { useContext } from "react";
import useUserContext from "./ContextHook";
import UserContext from "../provider/AuthContext";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_apiUrl}`,
});
const useAxiosSecure = () => {
  const { user, userSignOut, setLoading, token } = useContext(UserContext);

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
      if (error.response?.status === 401 || error.response?.status === 403) {
        userSignOut()
          .then((res) => {
            setLoading(false);
          })
          .catch((error) => {});
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
