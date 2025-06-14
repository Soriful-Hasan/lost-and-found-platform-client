import React, { useMemo } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();
  const myPostPromise = useMemo(() => {
    return (email) =>
      axiosSecure.get(`/myPosts/${email}`).then((res) => res.data);
  }, [axiosSecure]);

  const postDetailsPromise = useMemo(() => {
    return (id) => axiosSecure.get(`/getItem/${id}`).then((res) => res.data);
  }, [axiosSecure]);

  const recoverItemsPromise = useMemo(() => {
    return (email) =>
      axiosSecure.get(`/recoveredItems/${email}`).then((res) => res.data);
  }, [axiosSecure]);

  const updateDataPromise = useMemo(() => {
    return (id) =>
      axiosSecure
        .get(`${import.meta.env.VITE_apiUrl}/getItem/${id}`)
        .then((res) => res.data);
  }, [axiosSecure]);

  return {
    myPostPromise,
    postDetailsPromise,
    recoverItemsPromise,
    updateDataPromise,
  };
};

export default useApplicationApi;
