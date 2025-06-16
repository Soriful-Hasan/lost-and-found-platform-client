// import axios from "axios";
// import React, { useContext } from "react";
// import useUserContext from "./ContextHook";
// import UserContext from "../provider/AuthContext";

// const axiosInstance = axios.create({
//   baseURL: `${import.meta.env.VITE_apiUrl}`,
// });
// const useAxiosSecure = () => {
//   const { user, userSignOut, setLoading, token } = useContext(UserContext);

//   axiosInstance.interceptors.request.use((config) => {
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

//   axiosInstance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       if (error.response?.status === 401 || error.response?.status === 403) {
//         userSignOut()
//           .then((res) => {
//             setLoading(false);
//           })
//           .catch((error) => {});
//       }
//       return Promise.reject(error);
//     }
//   );

//   return axiosInstance;
// };

// export default useAxiosSecure;
import axios from "axios";
import React, { useContext, useEffect } from "react";
import UserContext from "../provider/AuthContext";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_apiUrl}`,
});

const useAxiosSecure = () => {
  const { user, userSignOut, loading } = useContext(UserContext);

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user?.accessToken}`;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            userSignOut()
              .then(() => {
                Swal.fire({
                  title: "Logged out due to token issue.",
                  icon: "error",
                  draggable: true,
                });
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, userSignOut]);

  return axiosInstance;
};

export default useAxiosSecure;
